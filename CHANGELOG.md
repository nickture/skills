# Changelog

Projects reference rules by their headings, for example in a Foundation file. The version number follows SemVer and tells you whether those references still work.

| Change | From 1.0.0 | Before 1.0.0 |
| --- | --- | --- |
| A rule heading, a section file or a skill is renamed or removed | major | minor |
| A new rule or section, or a rule now checks something else: a threshold, a number, a scope | minor | patch |
| Wording, an example, a source, a typo | patch | patch |

Before 1.0.0 each kind of change bumps one digit lower, the usual convention for 0.x versions. A version covers changes to `skills/` and the plugin manifest. Changes to the README, `working/` and the issue forms come out without a version.

A version lists its changes under Breaking, Added, Changed and Fixed. Breaking names every renamed or removed heading with its replacement, so you know what to change in your Foundation. A rule is named in English by its meaning, with the Russian heading in parentheses to search for.

## 0.1.0 — 2026-10-03

First numbered version. Both skills, `nickture-interface` and `nickture-text-ru`, ship as one Claude Code plugin, `nickture-skills`. The old plugins `nickture-interface@nickture` and `nickture-text-ru@nickture` are renamed to it.

### Breaking

Two headings were renamed shortly before this version.

- Interface, slop: a blue-to-purple gradient by default (Сине-фиолетовый градиент и Inter по умолчанию → Сине-фиолетовый градиент по умолчанию). Inter is no longer part of the rule.
- Interface, mobile: a quick swipe closes a sheet or a toast (Смахивание срабатывает по скорости → Быстрое смахивание закрывает шторку и тост).
