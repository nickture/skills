// Turns a rendered rule file into a page: an id on every rule, links to rules
// and sources that work on the site. The Markdown itself stays as the agent reads it.

/** An anchor from a rule heading: «Один акцент на экран.» → «один-акцент-на-экран». */
export const slug = (text: string): string =>
	text
		.replace(/<[^>]+>/g, '')
		.toLowerCase()
		.replace(/[^\p{L}\p{N}]+/gu, '-')
		.replace(/^-|-$/g, '');

/** Gives every rule, a list item that opens with a bold heading, the id of its heading. */
export const anchorRules = (html: string): { html: string; ids: string[] } => {
	const ids: string[] = [];
	const anchored = html.replace(/<li>(\s*(?:<p>)?)<strong>(.+?)<\/strong>/g, (_, gap: string, heading: string) => {
		const id = slug(heading);
		ids.push(id);
		return `<li id="${id}">${gap}<strong>${heading}</strong>`;
	});
	return { html: anchored, ids };
};

/**
 * «[Дай нажать](principles.md)» → the rule «Дай нажать» on the principles page.
 * A link that names a section, not a rule, finds no such id and opens the page at the top.
 */
export const linkRules = (html: string, base: string, skill: string): string =>
	html.replace(
		/<a href="(?:rules\/)?([\w-]+)\.md">(.+?)<\/a>/g,
		(_, file: string, text: string) => `<a href="${base}${skill}/${file}/#${slug(text)}">${text}</a>`,
	);

/** «`[ui-skills, nick]`» → each key a link to its row on the sources page. */
export const linkSources = (html: string, base: string, skill: string): string =>
	html.replace(/<code>\[([\w.-]+(?:, [\w.-]+)*)\]<\/code>/g, (_, keys: string) => {
		const links = keys.split(', ').map((key) => `<a href="${base}${skill}/sources/#${key}">${key}</a>`);
		return `<code>[${links.join(', ')}]</code>`;
	});

/** Gives every row of the sources table the id of its key. */
export const anchorSources = (html: string): string =>
	html.replace(/<tr>(\s*<td><code>([^<]+)<\/code><\/td>)/g, '<tr id="$2">$1');

/** The sections of a skill in the order of the table in its SKILL.md. */
export const sectionTable = (skillMd: string): { file: string; title: string; summary: string }[] =>
	[...skillMd.matchAll(/^\| \[(.+?)\]\(rules\/([\w-]+)\.md\) \| (.+?) \|$/gm)].map(([, title, file, summary]) => ({
		file,
		title,
		summary,
	}));
