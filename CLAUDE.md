# Knowledge

A personal body of expertise in interface design and writing: skills with universal rules that are not tied to any project. They are used in projects (the rules are read on every change to an interface or text), in reviews of finished work, in consulting, workshops and teaching. A project installs the skills and keeps only its own decisions.

## Where things are

`skills/` holds what the agent applies without reservation. Unfinished work and editorial records live in `working/`. That folder is not part of any skill, and its rules are not applied. It is published with the repository so that disputed and unfinished material can be discussed in Issues.

| File | What it holds | When it changes |
| --- | --- | --- |
| `skills/nickture-interface/SKILL.md` | frontmatter, intro, how to read, sections, quick pass | when a rule gets or loses a star, a file is added to `rules/`, or the intro is edited |
| `skills/nickture-interface/rules/*.md` | interface rules, one file per section: principles, what to define, typography, color, space, hierarchy, icons, forms, states, navigation, onboarding, components, mobile, charts, documents, email, accessibility, scrolling, motion, performance, slop | on a new rule or source, when rules are refined |
| `skills/nickture-interface/sources.md`, `skills/nickture-text-ru/sources.md` | sources and their keys, a separate table for each skill | on a new source |
| `skills/nickture-text-ru/SKILL.md` | frontmatter, intro, sections and the intro paragraph of the slop section | when a file is added to `rules/` or the intro is edited |
| `skills/nickture-text-ru/rules/*.md` | writing rules, one file per section: headings, order, who speaks, consistency, claims, words, numbers, slop (rhetoric, noise, stop words, the text as a whole), typography, forms, interface labels, messages, correspondence, meta, how to check | on a new rule or when existing ones are refined |
| `working/interface/disputed.md`, `working/text/disputed.md` | disputed rules taken out for rework | when a rule is taken out for rework and when it comes back |
| `working/interface/disagreements.md`, `working/text/disagreements.md` | where sources disagree and what was chosen | when sources disagree |
| `working/interface/rejected.md` | what was deliberately left out of the sources, with the reason | when a source's advice is rejected |
| `working/interface/process.md` | how to review an interface, prepare and present work; waiting for a rewrite | on the rewrite |
| `working/interface/landing.md` | landing and pricing pages; once finished, it splits into scenarios | on a new rule or a rewrite |
| `working/interface/patterns.md`, `working/text/patterns.md` | persuasion techniques and dark patterns; unfinished | on a new pattern or source |
| `working/text/english.md` | rules and markers for English text only, the base for an English version | when a new source has a sign that holds for English only |
| `README.md` | what this is, installation, usage, updating, privacy, contributing, license | on a new skill or install method |
| `CHANGELOG.md` | what changed in each version and what the number means | on a release |
| `CONTRIBUTING.md` | where to send mistakes, rules and sources; the license of contributions | on a new way to contribute |
| `.github/ISSUE_TEMPLATE/*.yml` | issue forms: a mistake or dispute in a rule, a new rule, a new source | on a new skill, which goes into the dropdown |
| `.github/workflows/release.yml` | when a `vX.Y.Z` tag reaches GitHub, creates a GitHub release from the version's section in `CHANGELOG.md` and moves the `release` branch to the tag | when the format of version headings in `CHANGELOG.md` changes |
| `.claude-plugin/plugin.json` | the `nickture-skills` plugin for Claude Code and Anthropic's plugin directory: description, keywords, version number. It finds the skills in `skills/` by itself | when the description changes and on a release |
| `.claude-plugin/icon.png` | the plugin icon for Anthropic's directory, a square PNG of 512 to 2048 px made from the `nickture` organization avatar. The directory takes it only once, on the first save or submission | never: a new icon does not reach the listing |
| `.claude-plugin/marketplace.json` | the `nickture` plugin marketplace: one plugin from the root and `renames` for the old names `nickture-interface` and `nickture-text-ru` | when the plugin is renamed; old `renames` entries are never removed |
| `LICENSE` | the CC BY 4.0 text | never |
| `AGENTS.md` | a symlink to this file, so Codex, Cursor and other agents read the editing rules | never |

## How a project uses the skills

- **Universal rules, project Foundation.** A project can keep its own Foundation: answers to the What to define (Что желательно определить) section, such as typefaces, colors, scales, `z-index` and durations, plus exceptions with reasons. The Foundation does not repeat the general rules and refers to them by heading.
- **A rule can be broken for a reason.** The reason is written in the project's Foundation next to the exception.

## Editing rules

- **No projects, clients or products.** The skills never name projects, clients, products or people from reviews. Examples are generalized: «карточка товара» (a product card), «экран выбора тарифа» (a plan selection screen). Only the authors of sources are named, in the key table and in the text of a rule where the idea is theirs.
- **Rule format.** `` - **Heading.** ★ Statement. Why. Example or number. `[key]` ``. The heading names the rule in a few words, and the description after it says what to check and why. A Tailwind utility class in parentheses is optional and goes into a rule about code as an implementation hint. In `nickture-text-ru` the example sits under the rule line as a `>` blockquote of two paragraphs, «Плохо:» and «Хорошо:». A heading is unique within its skill and is changed only when needed, because projects reference it.
- **Filter before writing.** A rule is checkable, holds for any product of its type, has a reason, and does not duplicate a rule already written. A duplicate is merged into the existing rule, and their source keys are combined.
- **★ marks the quick pass, about forty rules.** A star goes to a rule that catches the most visible mistake on a screen. A new star is a reason to remove another one. The headings of starred rules are repeated as a list in the quick pass (Экспресс-проход) section of `skills/nickture-interface/SKILL.md`. A star is added or removed in both places at once.
- **A source is cited by key.** A new source first gets a row in the `sources.md` of its skill, and a source of both skills is in both tables. A key used in `working/interface/` or `working/text/` is also in the table of its skill. The author's own reviews and ideas use the key `nick`.
- **Disagreements between sources are settled explicitly.** When sources give different advice, the rule follows the chosen option, and the disagreement goes as a row into `working/interface/disagreements.md` or `working/text/disagreements.md`. A disagreement without a choice gets an empty «Выбрано» (chosen) column, and no rule is written from it. Advice left out entirely goes into `working/interface/rejected.md` with the reason.
- **Text rules with text, interface rules with interface.** Labels, errors, numbers and tone go into `skills/nickture-text-ru/rules/`. Layout, states and components go into `skills/nickture-interface/rules/`. The skills refer to each other and do not repeat each other.
- **A rule lives in the file of its section.** A new rule goes into the section file in `rules/`. A new section gets a new file and a row in the sections (Разделы) table of its `SKILL.md`. A rule from another file is named by its heading in guillemets, and the heading inside them links to that file: `по правилу «[Дай нажать](principles.md)»`. A rule of the other skill is named by its heading and the skill name, without a link: `` по правилу «Регистр как в предложении» скилла `nickture-text-ru` ``. Skills are installed one by one, and a path into the other skill may lead nowhere.
- **Unfinished work lives in `working/`.** A disputed rule moves to `working/interface/disputed.md` or `working/text/disputed.md` with a note on what is wrong with it. A finished rule or document goes back into the skill. A skill never links to `working/`.
- **The skills follow the `nickture-text-ru` rules.** They are in Russian, with terms as they are (`hover`, `focus-visible`, `ease-out`), no stop words in a figurative sense, «не X, а Y» at most once per 750 words, and one dash or colon per sentence.
- **Every text in the repository follows the skills too.** The changelog, release notes, commit messages, the README, CONTRIBUTING, the issue forms and this file are checked like a rule before they are committed. Russian text goes by `nickture-text-ru`. English text goes by those of its rules that hold for English and by the markers in `working/text/english.md`. Layout goes by `nickture-interface`: a common part is written once for its group (Общее для группы выносится за скобки), and a lone item is a sentence, not a one-item list.
- **This file and the GitHub pages are in English.** `CLAUDE.md`, `README.md`, `CONTRIBUTING.md`, `CHANGELOG.md` and the issue forms are in English, because people who don't know Russian read them too. The skills and `working/` stay in Russian, and the README says plainly that the skills are in Russian for now. The last sentence of `description` in each `SKILL.md` is also in English, because skill directories and search match the words of a query.

## Checks

Run every command from the repository root. Empty output is good.

```bash
I=skills/nickture-interface; T=skills/nickture-text-ru

# the quick pass matches the starred rules
diff <(grep -ohE '^- \*\*[^*]+\*\* ★' $I/rules/*.md | sed -E 's/^- \*\*(.+)\*\* ★$/\1/' | LC_ALL=C sort) \
     <(awk '/^## Экспресс-проход/{p=1; next} /^## /{p=0} p && /^- /' $I/SKILL.md | sed 's/^- //' | LC_ALL=C sort)

# rule headings are unique within their skill
grep -ohE '^- \*\*[^*]+\*\*' $I/rules/*.md | LC_ALL=C sort | LC_ALL=C uniq -d
grep -ohE '^- \*\*[^*]+\*\*' $T/rules/*.md | LC_ALL=C sort | LC_ALL=C uniq -d

# every interface rule has a source key
grep -hE '^- \*\*' $I/rules/*.md | grep -vE '`\[[a-z-]+(, [a-z-]+)*\]`$'

# «не X, а Y»: at most one per 750 words
echo "limit $(( $(cat $I/rules/*.md | wc -w) / 750 )), found $(cat $I/rules/*.md | grep -oE '(^|[ «(])не [^,.:;!?]{1,60}, а |, а не ' | wc -l)"

# three dashes or colons in one sentence
grep -nE '( — |: )[^.!?…]*( — |: )[^.!?…]*( — |: )' $I/rules/*.md

# stop words in a figurative sense (check every match by eye)
grep -noiE '(держит|держится|живёт|несёт|спорит| уходит|упирается|поверх[ .,:;]|тих[аиоуеыя]|раньше|жд[её]т|ждут|спеш|сто(ит|ят)[ .,:;])' $I/rules/*.md

# every key in use is in its skill's sources, keys in working/ too
for a in interface text; do s=$I; [ $a = text ] && s=$T
  comm -23 <(grep -ohE '`\[[a-z-]+(, [a-z-]+)*\]`' $s/SKILL.md $s/rules/*.md working/$a/*.md \
              | tr -d '`[]' | tr ',' '\n' | tr -d ' ' | LC_ALL=C sort -u) \
           <(grep -oE '^\| `[a-z-]+`' $s/sources.md | tr -d '| `' | LC_ALL=C sort -u) | sed "s|^|$a: |"
done

# frontmatter: first line ---, name matches the folder, description up to 1024 characters
for f in skills/*/SKILL.md; do n=${f#skills/}; n=${n%/SKILL.md}
  [ "$(head -1 $f)" = "---" ] || echo "$n: no frontmatter"
  grep -qx "name: $n" $f || echo "$n: name does not match the folder"
  l=$(sed -n 's/^description: //p' $f | head -1 | tr -d '\n' | wc -m); [ $l -gt 0 ] && [ $l -le 1024 ] || echo "$n: description has $l characters"
done

# every rules/ file is in the sections of its SKILL.md
for f in skills/*/rules/*.md; do grep -q "](rules/${f##*/})" ${f%/rules/*}/SKILL.md || echo "not in sections: $f"; done

# no link leaves its skill
grep -rnE '\]\((\.\./)+nickture-' skills

# guillemets stay outside a link, except in bad examples
grep -rnE '\[«|»\]\(' README.md CONTRIBUTING.md skills working | grep -v '> Плохо:'

# every skill is in the dropdowns of the issue forms
for d in skills/*/; do n=$(basename $d)
  for f in .github/ISSUE_TEMPLATE/0[12]-*.yml; do grep -qx "        - $n" $f || echo "missing in $f: $n"; done
done

# the version in plugin.json is in CHANGELOG.md
v=$(sed -n 's/^  "version": "\(.*\)",$/\1/p' .claude-plugin/plugin.json)
grep -q "^## $v " CHANGELOG.md || echo "no version $v in CHANGELOG.md"

# what is gone since the last version: rule headings and section files.
# Any output means the next release is breaking, and each name goes into Breaking
t=$(git describe --tags --abbrev=0 2>/dev/null) && {
  LC_ALL=C comm -23 <(git grep -hE '^- \*\*[^*]+\*\*' "$t" -- 'skills/*/rules/*.md' | sed -E 's/^- \*\*([^*]+)\*\*.*/\1/' | LC_ALL=C sort -u) \
                    <(grep -hE '^- \*\*[^*]+\*\*' skills/*/rules/*.md | sed -E 's/^- \*\*([^*]+)\*\*.*/\1/' | LC_ALL=C sort -u)
  git diff --name-status --diff-filter=DR "$t" -- 'skills/*/rules/*.md' 'skills/*/SKILL.md'
}

# every text rule has an example blockquote: exactly five rules on how to check should remain
awk 'FNR==1 { if (h != "" && !got) print h; h=""; got=0 }
     /^- \*\*/ { if (h != "" && !got) print h; h=$0; got=0; next }
     /^  > Хорошо:/ { got=1 }
     /^#/ { if (h != "" && !got) print h; h=""; got=0 }
     END { if (h != "" && !got) print h }' $T/rules/*.md | sed -E 's/^- \*\*([^*]+)\*\*.*/\1/'
```

```bash
# helper for the checks below: strip quoted material, which is code, links, standard numbers,
# «Плохо» lines and everything in guillemets. A bad example in a rule shows a violation on
# purpose, so it does not count. Line numbers are kept because sed blanks content and keeps lines
cite() { sed -E 's/`[^`]*`//g; s/\]\([^)]*\)//g; s/ГОСТ [0-9.]+-[0-9]+//g; s/«[^»]*»//g; s/„[^“]*“//g; s/^( *> Плохо:).*/\1/' "$1"; }
ADJ='настоящ|следующ|предыдущ|будущ|текущ|общ|недостающ|подходящ|соответствующ'

for f in README.md CONTRIBUTING.md skills/*/*.md skills/*/rules/*.md working/interface/process.md working/*/patterns.md working/*/disagreements.md working/interface/rejected.md; do
  # officialese: empty verb, verbal noun, bureaucratic function word
  cite "$f" | grep -noiE '(^|[^а-яё])(осуществл|производит(ся)?[ ,.]|имеет место|носит [а-яё]+ характер|данн(ый|ая|ое|ого|ому|ом)|указанн(ый|ая|ое)|в целях|в случае если|при наличии|не представляется возможным)' | sed "s|^|officialese $f:|"
  # chain of genitives: three nouns in a row
  cite "$f" | grep -noiE '[а-яё]+(ения|ания|ации) +[а-яё]+(ения|ания|ации|ов|ий) +[а-яё]+(ения|ания|ации|ов|ий)' | sed "s|^|genitives $f:|"
  # two participles in one sentence, except adjectives that look like participles
  cite "$f" | grep -noE '[а-яё]+(ущ|ющ|ащ|ящ|вш|ем|им)(ий|ая|ее|ие|его|ей|их)[^.!?…]*[а-яё]+(ущ|ющ|ащ|ящ|вш|ем|им)(ий|ая|ее|ие|его|ей|их)' | grep -viE "$ADJ" | sed "s|^|participles $f:|"
  # intensifiers: «ровно то» and «реально» as an adverb. «Ровно» before a number and «реальный»
  # as the opposite of made-up are legitimate, so the pattern leaves them out. «Именно» and «как раз»
  # are named in the rule and not searched for, because they sometimes tell things apart
  cite "$f" | grep -noiE '(^|[^а-яё])(ровно (то|тот|та|те|так|это|этот)([^а-яё]|$)|реально([^а-яё]|$))' | sed "s|^|intensifier $f:|"
  # «без» with a judgement, a feeling or someone else's tool. A good example teaches like the rule does,
  # so «Хорошо» lines are not stripped. «Без ручного X» and «без скрытых комиссий» can be legitimate and are not searched for
  sed -E '/^ *> Хорошо:/!s/«[^»]*»//g; s/`[^`]*`//g; s/^( *> Плохо:).*/\1/' "$f" | grep -noiE '(^|[^а-яё])без (лишн|ненужн|уловок|хлопот|головной боли|догад|рутин|суеты|усилий|сторонн)' | sed "s|^|без $f:|"
  # «поэтому» next to «это»: «поэтому» is built from «по этому», and the pair sounds like a repeat
  cite "$f" | grep -noiE '(^|[^а-яё])(поэтому эт|эт(о|а|и|от|у)( [а-яё]+){0,2},? поэтому)' | sed "s|^|поэтому $f:|"
  # a plural verb with no subject after an object pronoun, «его меняют», hides who acts. As in the «без» check,
  # «Хорошо» lines are kept. A subject placed after the verb («её задают паддинг») matches too, and such a sentence is reordered
  sed -E '/^ *> Хорошо:/!s/«[^»]*»//g; s/`[^`]*`//g; s/^( *> Плохо:).*/\1/' "$f" | grep -noiE '(^|[^а-яё])(его|её|их) [а-яё]+(ют|ят)([^а-яё]|$)' | sed "s|^|no subject $f:|"
  # chopped phrases: two sentences of one to three words in a row. As in the «без» check, «Хорошо» lines are kept.
  # A single tail cut off a short sentence matches too, and it is allowed once per 750 words
  sed -E '/^ *> Хорошо:/!s/«[^»]*»//g; s/`[^`]*`//g; s/^( *> Плохо:).*/\1/' "$f" | grep -noE '(^|[.!?] |«|\*\* )[А-ЯЁA-Z][а-яёa-z-]*(,? [а-яёa-z-]+){0,2}[.!?] [А-ЯЁA-Z][а-яёa-z-]*(,? [а-яёa-z-]+){0,2}[.!?]' | sed "s|^|chopped $f:|"
  # mechanical typography: three dots, straight quotes, a hyphen between digits, «стр.», «8-ми», «90-х гг.», a repeated №,
  # an arrow, «≈», a warning sign and a line of box-drawing characters in place of a word
  cite "$f" | grep -noE '(\.\.\.|"[^"]*"|[0-9]-[0-9]|[0-9]+-(ми|та|тил)|стр\. ?[0-9]|[0-9]{2,4}-х гг\.|№ ?[0-9]+, ?№|→|≈|⚠|─)' | sed "s|^|typography $f:|"
done
```

## Versions

The version number follows SemVer by meaning, not by how many rules changed. Project Foundations reference rules by heading, so every renamed or removed heading is listed under Breaking in `CHANGELOG.md`, and that section is what tells a project to fix its references.

| Change | From 1.0.0 | Before 1.0.0 |
| --- | --- | --- |
| A rule heading, a section file or a skill is renamed or removed | MAJOR | MINOR |
| A new rule or section; a rule now checks something else: a threshold, a number, a scope | MINOR | MINOR |
| Wording, an example, a source, a typo | PATCH | PATCH |

- **Only the skills and the plugin get releases.** A release is needed for changes in `skills/` and `.claude-plugin/`. The README, CONTRIBUTING, `working/`, this file and the issue forms change without a release, because the agent does not read them as rules.
- **The plugin gets only releases.** Claude Code updates a plugin installed from the `nickture` marketplace when `version` in `plugin.json` changes. Anthropic's directory ignores `version` and tracks the `release` branch, which only the release workflow moves. The skills CLI and a clone take the current `main`.
- **1.0.0 is the author's call.** It comes out once the structure settles.

Release steps, when asked to release a version («выпусти версию»):

1. `git log v<last>..HEAD -- skills .claude-plugin` and the check for what is gone since the last version show what went in and whether anything breaks.
2. The number follows the table.
3. A section for the version with its date goes at the top of `CHANGELOG.md`, in the order Breaking, Added, Changed, Fixed. Inside each part the entries are grouped under a `####` heading per skill and then by section, so neither name repeats from line to line. Breaking lists every removed heading with its replacement. A rule is named in English by its meaning, with the Russian heading in parentheses. The text is checked against the `nickture-text-ru` rules and the markers in `working/text/english.md`.
4. The number goes into `version` in `plugin.json`.
5. A `Release X.Y.Z` commit of these two files, with an annotated tag `vX.Y.Z` on it.
6. Only when asked separately, push the commit together with the tag: `git push --follow-tags`. `.github/workflows/release.yml` creates the GitHub release from the version's section in `CHANGELOG.md` when the tag reaches GitHub, and moves the `release` branch to it.

## Git

- Commit, push and version tags only when asked.
- Commit messages are in English, with a subject and a body. One commit is one change: a new rule separate from a rewording, design separate from text.
- Branch `main`; history is never rewritten.
