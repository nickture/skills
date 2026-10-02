# Nickture Skills

Two Agent Skills with checkable rules: one for any interface, one for Russian text and the signs of AI-generated writing. An agent applies them when it edits an interface or text, and reviews finished work against the same rules. They work in Claude, Codex, Cursor and other compatible agents.

The skills themselves are in Russian for now. The agent reads them as they are and replies in your language, so `nickture-interface` works for an interface in any language. `nickture-text-ru` covers Russian text only, and an English version is planned.

I’m [Nick](https://nickture.com), a product and interface designer with almost thirty years of experience. I consult teams on product, interface and conversion, record video reviews of products, teach managers to tell a good interface from a bad one, and build products with my team from idea to launch.

| Skill | What it covers |
| --- | --- |
| [`nickture-interface`](skills/nickture-interface/SKILL.md) | layout, styles, components and animation of any interface: web app, website, landing page, mobile layout, email, presentation |
| [`nickture-text-ru`](skills/nickture-text-ru/SKILL.md) | any text in Russian: page, document, button label, error message, email, reply to a customer |

With `nickture-text-ru` the agent edits text so it reads easily and is correct, and removes the signs of generated text. The [Slop](skills/nickture-text-ru/SKILL.md#slop) (Слоп) section lists several dozen of them, including clichés, “not X but Y” constructions, bureaucratic phrasing, intensifiers, hedge after hedge, needless lists and headings, bold in the middle of a paragraph, and runs of sentences of the same length.

The rules come from my own reviews and thinking, and from open catalogs, books and articles. The key at the end of a rule points to the source table in `sources.md`. In `nickture-interface` a star ★ marks the rules about the most visible mistakes. They are listed in the quick pass (Экспресс-проход) section, and when time is short they are checked first. A rule can be broken when there is a reason for it.

## Installation

### With the skills CLI

It installs skills into Claude Code, Codex, Cursor and other agents, and runs on Node.js or Bun. Documentation is at [skills.sh](https://skills.sh).

```bash
npx skills add nickture/skills    # Node.js
bunx skills add nickture/skills   # Bun
```

The command asks which skills to install and into which agents. The `--skill` flag installs one skill, and `-g` installs it for all projects.

```bash
npx skills add nickture/skills --skill nickture-interface -g
bunx skills add nickture/skills --skill nickture-interface -g
```

### As a Claude Code plugin

```text
/plugin marketplace add nickture/skills
/plugin install nickture-interface@nickture
/plugin install nickture-text-ru@nickture
```

The first command adds the plugin marketplace, the other two install the skills. You can install just one of them.

### Manually

Copy the skill folder into the agent’s skills directory.

| Agent | All projects | One project |
| --- | --- | --- |
| Claude Code | `~/.claude/skills/` | `.claude/skills/` |
| Codex, Cursor | `~/.agents/skills/` | `.agents/skills/` |

If you symlink a clone of the repository instead of copying, `git pull` updates the skill.

```bash
git clone https://github.com/nickture/skills.git ~/nickture-skills
mkdir -p ~/.claude/skills
ln -s ~/nickture-skills/skills/nickture-interface ~/.claude/skills/nickture-interface
```

## Usage

A skill loads on its own when the task matches its description. To call it explicitly, type `/nickture-interface` in Claude Code and Cursor or `$nickture-interface` in Codex.

Example requests:

- “Check the checkout screen against nickture-interface”
- “Rewrite the error messages in the sign-up form with nickture-text-ru”
- “Run the nickture-interface quick pass on the pricing page”

Run a review in plan mode. In it the agent reads the sections on the topic, lists the rules that are broken and proposes fixes. It changes files only after you approve the plan, so you can drop a fix you disagree with before it reaches the code.

| Agent | How to turn it on |
| --- | --- |
| Claude Code | `Shift+Tab` or `/plan` before the request |
| Codex | `/plan` |
| Cursor | `Shift+Tab` in the chat input |

There are many rules, and a full review reads every section. A weaker model or a low reasoning effort reads selectively and skips rules, so use the strongest model you have. In Claude Code that is Opus or Sonnet with effort set to `high` or `max`, and some of them default to `medium`.

```text
/effort high
```

`max` lasts until the end of the session, `high` carries over to the next ones. In Codex, choose the model and reasoning effort with `/model`.

Together the two skills take about 80 thousand tokens. Add the project code, and a 200K context window may run out of room. Claude Code then compacts the conversation, and the rules it read shrink to a short summary. With that window, review the interface and the text in separate sessions. In Claude Code, Opus 4.7 and later and Sonnet 5 and later have a 1M-token window, and both skills take less than a tenth of it.

After the fixes, run the review again in a new session (`/clear` in Claude Code) so the agent reads the rules afresh. This finds what the first run missed and what the fixes broke.

The rules hold for any product. Decisions of a particular project go into its Foundation: typefaces, colors, spacing scales, animation durations, and exceptions to the rules with a reason. The questions it answers are listed in the [What to define](skills/nickture-interface/rules/what-to-define.md) (Что желательно определить) section. The Foundation is a plain file in the project repository. To make the agent read it, reference it in the project’s `CLAUDE.md` or `AGENTS.md`. The Foundation is optional, and without it the agent checks against the general rules.

## Updating

There are no version numbers, so you always get the current state of the `main` branch.

| How the skill was installed | How to update |
| --- | --- |
| skills CLI | `npx skills update` or `bunx skills update` |
| Claude Code plugin | `/plugin marketplace update nickture`, then `/reload-plugins` |
| symlink to a clone | `git pull` in the clone folder |
| copied folder | copy it again |

Only the plugin updates itself, and only with auto-update turned on. It is off by default for third-party marketplaces. Turn it on in `/plugin` on the Marketplaces tab with Enable auto-update.

## What’s in the repository

```text
skills/
  nickture-interface/   SKILL.md, rules/, sources.md
  nickture-text-ru/     SKILL.md, rules/, sources.md
working/
  interface/            editorial notes and drafts for the interface skill
  text/                 editorial notes and drafts for the text skill
```

`working/` holds disputed rules, draft sections, the places where sources disagree, and what was left out of them on purpose, with the reason. The folder is not part of the skills, and the agent does not apply its rules. It is public so it can be discussed.

## Contributing

How to report a mistake in a rule, dispute a rule, or suggest a new rule or source is described in [`CONTRIBUTING.md`](CONTRIBUTING.md).

## License

[CC BY 4.0](LICENSE). You can copy and change the rules, including in commercial projects. Credit me as the author, [Nickture](https://nickture.com), and link to this repository.
