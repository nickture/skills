# Nickture Skills for interface polish, Russian copy and AI deslop

Two Agent Skills that help an AI agent make an interface clear, consistent, easy to use and scalable, and Russian text clear and correct, without the signs of AI-generated work. Each skill is a set of checkable rules. The agent follows them when it edits an interface or text, and reviews finished work against them. They work in Claude, Codex, Cursor and other compatible agents.

The skills themselves are in Russian for now. The agent reads them as they are and replies in your language, so `nickture-interface` works for an interface in any language. `nickture-text-ru` covers Russian text only, and an English version is planned.

> I’m [Nick](https://nickture.com), a product and interface designer with almost thirty years of experience. I consult teams on product, interface and conversion, record video reviews of products, teach managers to tell a good interface from a bad one, and build products with my team from idea to launch. If you need any of this, [contact me](mailto:hey@nickture.com).

| Skill | What it covers |
| --- | --- |
| [`nickture-interface`](skills/nickture-interface/SKILL.md) | Layout, styles, components and animation of any interface: web app, website, landing page, mobile layout, email, presentation |
| [`nickture-text-ru`](skills/nickture-text-ru/SKILL.md) | Any text in Russian: page, document, button label, error message, email, reply to a customer |

With `nickture-interface` the agent also does its best to remove the signs of generated design, collected in its [Slop](skills/nickture-interface/rules/slop.md) (Слоп) section. Among them are three columns with an icon in a colored circle, a blue-to-purple gradient, everything centered, a card around every block, a badge that repeats the heading next to it, monospace type where it doesn’t belong, numbering like “01 / 02 / 03” or “0.1 / 0.2 / 0.3”, even nested several levels deep, and emoji in place of icons.

With `nickture-text-ru` the agent edits text so it reads easily and is correct, and does its best to remove the signs of generated text. Its [Slop](skills/nickture-text-ru/SKILL.md#slop) (Слоп) section lists several dozen of them, including clichés, “not X but Y” constructions, bureaucratic phrasing, intensifiers and hedge after hedge.

The rules come from my own reviews and thinking, and from open catalogs, books and articles. The key at the end of a rule points to the source table in `sources.md`. In `nickture-interface` a star ★ marks the rules about the most visible mistakes. They are listed in the quick pass (Экспресс-проход) section, and when time is short they are checked first. A rule can be broken when there is a reason for it.

## For AI agents

If you were given a link to this repository, clone it into a temporary folder outside the project and read the files from disk.

```bash
git clone --depth 1 https://github.com/nickture/skills /tmp/nickture-skills
```

A web fetch tool returns a short summary instead of the file, so the rules never reach you. If you can’t clone, read each file in full from `raw.githubusercontent.com` with a tool that returns it unchanged. If that is impossible too, tell the user that the rules were not read in full.

To review a finished project, read `SKILL.md` of each skill and every file in its `rules/` folder in full. Review the text and the layout in separate runs, each in its own agent or session. Check the text against `nickture-text-ru` first, then the layout against `nickture-interface` on the rendered page. For an edit, read `SKILL.md`, the slop sections and the sections the edit touches, and check your result against them. Take the product from an exact copy: its files, or the live page opened in a browser. Download the page with `curl` for the search scripts, or instead of the browser only when none of your tools can open one. A summary of the page is not enough.

## Installation

Install the skills or clone the repository. A link to it in a prompt is not enough, because the agent reads the link through a web fetch tool, which passes on a summary instead of the rules.

### From the Claude Directory

The plugin is in the Claude Directory. In the Claude app and in Cowork, open [the plugin page](https://claude.ai/customize/plugins/id/80b13ceb-a207-49bd-8197-8e12c551062f%40anthropic-plugin-directory) and select Add. In Claude Code, run this command:

```text
/plugin install nickture-skills@anthropic-plugin-directory
```

Claude Code has the directory built in, so you don’t add a marketplace first.

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
/plugin install nickture-skills@nickture
```

The first command adds the plugin marketplace, the second installs the plugin with both skills. To install just one skill, use the skills CLI with `--skill`.

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

A review of a finished project reads every rule. An edit, such as a new component or a changed screen, reads the slop sections and only the sections it touches. The agent picks them from the section table in `SKILL.md`.

Run a review in plan mode. In it the agent reads the rules, lists the ones that are broken and proposes fixes. It changes files only after you approve the plan, so you can drop a fix you disagree with before it reaches the code.

| Agent | How to turn it on |
| --- | --- |
| Claude Code | `Shift+Tab` or `/plan` before the request |
| Codex | `/plan` |
| Cursor | `Shift+Tab` in the chat input |

A weaker model or a low reasoning effort reads selectively and skips rules, so use the strongest model you have. In Claude Code that is Opus or Sonnet with effort set to `high` or `max`, and some of them default to `medium`.

```text
/effort high
```

`max` lasts until the end of the session, `high` carries over to the next ones. In Codex, choose the model and reasoning effort with `/model`.

Review the text and the layout in separate runs, text first, each in its own agent or session. In a shared run the text rules get lost among the visual ones, and a text fix changes the length of lines and blocks that the layout check depends on.

Separate runs also save room. Together the two skills fill more than half of a 200K context window. Add the project code, and Claude Code compacts the conversation, so the rules it read shrink to a short summary. In Claude Code, Opus 4.7 and later and Sonnet 5 and later have a 1M-token window, where a single skill leaves most of the room for the project.

After the fixes, run the review again in a new session (`/clear` in Claude Code) so the agent reads the rules afresh. This finds what the first run missed and what the fixes broke.

The rules hold for any product. Decisions of a particular project go into its Foundation: typefaces, colors, spacing scales, animation durations, and exceptions to the rules with a reason. The questions it answers are listed in the [What to define](skills/nickture-interface/rules/what-to-define.md) (Что желательно определить) section. The Foundation is a plain file in the project repository. To make the agent read it, reference it in the project’s `CLAUDE.md` or `AGENTS.md`. The Foundation is optional, and without it the agent checks against the general rules.

## Updating

The Claude Code plugin gets only released versions. They are listed with their changes in [`CHANGELOG.md`](CHANGELOG.md). The skills CLI and a clone get the current state of the `main` branch, including changes not yet released.

| How the skill was installed | How to update |
| --- | --- |
| skills CLI | `npx skills update` or `bunx skills update` |
| Claude Code plugin | `/plugin marketplace update nickture`, then `/reload-plugins` |
| Symlink to a clone | `git pull` in the clone folder |
| Copied folder | Copy it again |

Only the plugin updates itself, and only with auto-update turned on. It is off by default for third-party marketplaces. Turn it on in `/plugin` on the Marketplaces tab with Enable auto-update.

Each skill used to be a separate plugin, `nickture-interface` and `nickture-text-ru`. Now both are in one plugin, `nickture-skills`. If you installed the old plugins, update the marketplace and run `/plugin install nickture-skills@nickture` once. The old plugins are then replaced with the new one.

## What’s in the repository

```text
skills/
  nickture-interface/   SKILL.md, rules/, scripts/, sources.md
  nickture-text-ru/     SKILL.md, rules/, scripts/, sources.md
working/
  interface/            editorial notes and drafts for the interface skill
  text/                 editorial notes and drafts for the text skill
```

`working/` holds disputed rules, draft sections, the places where sources disagree, and what was left out of them on purpose, with the reason. The folder is not part of the skills, and the agent does not apply its rules. It is public so it can be discussed.

## Privacy

The skills are text files with rules and two shell scripts that search the files they are given. They collect, store and send no data, and the plugin starts nothing on its own. The agent reads your interface or text and runs the scripts in the session you already have with it, and that agent’s own privacy policy applies.

## Contributing

How to report a mistake in a rule, dispute a rule, or suggest a new rule or source is described in [`CONTRIBUTING.md`](CONTRIBUTING.md).

## License

[CC BY 4.0](LICENSE). You can copy and change the rules, including in commercial projects. Credit me as the author, [Nick](https://nickture.com), and link to this repository.

---

[![Listed in the Claude Directory](https://img.shields.io/badge/Claude_Directory-listed-0a0d12)](https://claude.ai/customize/plugins/id/80b13ceb-a207-49bd-8197-8e12c551062f%40anthropic-plugin-directory)

[![Nickture Skills on AI Agents Listing](https://aiagentslisting.com/nickture-skills/badge.svg?claim=aa644972c9d9cc4fafc921e5945ea6d0)](https://aiagentslisting.com/mcp/nickture-skills)
