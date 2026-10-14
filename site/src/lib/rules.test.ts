import { expect, test } from 'bun:test';
import { anchorRules, anchorSources, linkRules, linkSources, sectionTable, slug } from './rules';

test('makes an anchor from a rule heading', () => {
	expect(slug('Один акцент на экран.')).toBe('один-акцент-на-экран');
	expect(slug('Контраст текста не ниже AA')).toBe('контраст-текста-не-ниже-aa');
});

test('gives every rule an id and reports them', () => {
	const { html, ids } = anchorRules('<ul>\n<li><strong>Один акцент.</strong> ★ Текст.</li>\n<li>\n<p><strong>Дай нажать.</strong> Текст.</p>\n</li>\n</ul>');
	expect(ids).toEqual(['один-акцент', 'дай-нажать']);
	expect(html).toContain('<li id="один-акцент"><strong>');
	expect(html).toContain('<li id="дай-нажать">\n<p><strong>');
});

test('points a link to a rule file at the rule on its page', () => {
	expect(linkRules('по правилу «<a href="principles.md">Дай нажать</a>»', '/skills/', 'interface')).toBe(
		'по правилу «<a href="/skills/interface/principles/#дай-нажать">Дай нажать</a>»',
	);
	expect(linkRules('<a href="rules/color.md">Цвет</a>', '/skills/', 'interface')).toBe(
		'<a href="/skills/interface/color/#цвет">Цвет</a>',
	);
});

test('links source keys to the sources page', () => {
	expect(linkSources('<code>[ui-skills, nick]</code>', '/skills/', 'interface')).toBe(
		'<code>[<a href="/skills/interface/sources/#ui-skills">ui-skills</a>, <a href="/skills/interface/sources/#nick">nick</a>]</code>',
	);
	expect(linkSources('<code>outline: none</code>', '/skills/', 'interface')).toBe('<code>outline: none</code>');
});

test('gives every source row the id of its key', () => {
	expect(anchorSources('<tr>\n<td><code>wcag</code></td>')).toBe('<tr id="wcag">\n<td><code>wcag</code></td>');
});

test('reads the sections, in order, from the table in SKILL.md', () => {
	const skill = '| Раздел | Что внутри |\n| --- | --- |\n| [Принципы](rules/principles.md) | из них выводятся остальные |\n| [Цвет](rules/color.md) | акцент, контраст |\n';
	expect(sectionTable(skill)).toEqual([
		{ file: 'principles', title: 'Принципы', summary: 'из них выводятся остальные' },
		{ file: 'color', title: 'Цвет', summary: 'акцент, контраст' },
	]);
});
