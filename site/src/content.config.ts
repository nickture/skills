import { defineCollection } from 'astro:content';
import type { LoaderContext } from 'astro/loaders';
import { z } from 'astro/zod';
import { readdir, readFile } from 'node:fs/promises';
import { bindHtml } from '$lib/copy';
import { anchorRules, anchorSources, linkRules, linkSources, sectionTable } from '$lib/rules';

// The site reads the skills from the repository it lives in: a rule edited in
// skills/ is on the site after the next build, with no copy to keep in step.
const SKILLS = [
	{ slug: 'interface', dir: 'nickture-interface' },
	{ slug: 'text-ru', dir: 'nickture-text-ru' },
];

const read = (url: URL) => readFile(url, 'utf8');
const skillDir = (config: LoaderContext['config'], dir: string) => new URL(`../skills/${dir}/`, config.root);
const base = (config: LoaderContext['config']) => `${config.base.replace(/\/$/, '')}/`;

/** One entry per rule file: the section page, every rule with an id. */
const sections = defineCollection({
	loader: {
		name: 'skill-sections',
		load: async ({ store, renderMarkdown, config }) => {
			store.clear();
			for (const { slug: skill, dir } of SKILLS) {
				const root = skillDir(config, dir);
				const table = sectionTable(await read(new URL('SKILL.md', root)));
				const files = (await readdir(new URL('rules/', root))).filter((f) => f.endsWith('.md'));
				const missing = files.filter((f) => !table.some((s) => `${s.file}.md` === f));
				if (missing.length) throw new Error(`${dir}/SKILL.md lists no section for ${missing.join(', ')}`);

				for (const [order, { file, title, summary }] of table.entries()) {
					const markdown = await read(new URL(`rules/${file}.md`, root));
					const { html, ids } = anchorRules((await renderMarkdown(markdown)).html);
					const expected = markdown.match(/^- \*\*/gm)?.length ?? 0;
					if (ids.length !== expected) {
						throw new Error(`${dir}/rules/${file}.md: ${ids.length} of ${expected} rules got an anchor`);
					}
					store.set({
						id: `${skill}/${file}`,
						data: { skill, file, title, summary, order, rules: ids.length },
						rendered: { html: bindHtml(linkSources(linkRules(html, base(config), skill), base(config), skill)) },
					});
				}
			}
		},
	},
	schema: z.object({
		skill: z.string(),
		file: z.string(),
		title: z.string(),
		summary: z.string(),
		order: z.number(),
		rules: z.number(),
	}),
});

/** One entry per skill: its title and intro from SKILL.md, its sources page. */
const skills = defineCollection({
	loader: {
		name: 'skills',
		load: async ({ store, renderMarkdown, config }) => {
			store.clear();
			for (const [order, { slug: skill, dir }] of SKILLS.entries()) {
				const root = skillDir(config, dir);
				const body = (await read(new URL('SKILL.md', root))).replace(/^---[\s\S]*?---\s*/, '');
				const title = body.match(/^# (.+)$/m)![1];
				const intro = body.split(/\n\s*\n/).find((block) => block.trim() && !block.startsWith('#'))!;
				const sources = anchorSources((await renderMarkdown(await read(new URL('sources.md', root)))).html);
				store.set({
					id: skill,
					data: {
						title,
						order,
						intro: bindHtml(linkRules((await renderMarkdown(intro)).html, base(config), skill)),
					},
					rendered: { html: bindHtml(sources) },
				});
			}
		},
	},
	schema: z.object({ title: z.string(), order: z.number(), intro: z.string() }),
});

export const collections = { sections, skills };
