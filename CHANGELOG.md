# Changelog

Projects reference rules by their headings, for example in a Foundation file. The version number follows SemVer by the meaning of a change, not by how many rules it touches.

| Change | From 1.0.0 | Before 1.0.0 |
| --- | --- | --- |
| A rule heading, a section file or a skill is renamed or removed | major | minor |
| A new rule or section, or a rule now checks something else: a threshold, a number, a scope | minor | minor |
| Wording, an example, a source, a typo | patch | patch |

Before 1.0.0 a renamed or removed heading and a new rule both bump the minor digit, so the number alone does not say whether your references still work. The Breaking section does. A version covers changes to `skills/` and the plugin manifest. Changes to the README, `working/` and the issue forms come out without a version.

A version opens with a short summary of what it brings, then lists its changes under Breaking, Added, Changed and Fixed. Inside each part the changes are grouped by skill and then by section, so each name is written once. Breaking names every renamed or removed heading with its replacement, so you know what to change in your Foundation. A rule is named in English by its meaning, with the Russian heading in parentheses to search for.

## 0.7.2 — 2026-10-07

A page given by address is checked in a browser first. A downloaded copy lacks the text that scripts, animations and clicks bring in, so it serves the search only when no browser is at hand. The rules check the same things, so the patch digit goes up. No heading was renamed or removed.

### Changed

#### Interface

- Intro: a page given by address opens in a browser, and its code is downloaded for the search. A browser counts as missing only when none of the agent's tools can open a page, even one it has to load first.

#### Text

- Intro: a page given by address opens in a browser before the search, and the text for the search comes from there.
- How to check
  - The page is downloaded with `curl` only when none of the agent's tools can open it in a browser. The search runs first, and then the whole text is read on the live page (Сначала механически, потом глазами).
  - Downloaded code, images and screenshots do not replace the browser. The agent scrolls to the end, watches the animations, switches tabs and slides, opens answers and tooltips, and repeats the pass at phone width (Глазами, на живой странице).

## 0.7.1 — 2026-10-07

Both skills already asked for a rendered screen or a live page. This release says how the agent gets one. The rules check the same things, so the patch digit goes up. No heading was renamed or removed.

### Changed

#### Interface

- Intro: the agent checks layout on the running dev server. If none is running, it works out how to start one from the project files, runs it in the background and stops it afterwards. A browser is not added to the project's dependencies without asking. A report that covers the code only states the reason, such as a missing browser.

#### Text

- How to check: an unpublished page is read on the project's dev server. If the server is not running, the agent works out how to start it and stops it after the check. A browser is not added to the project's dependencies without asking. A report that checks the text without the layout states the reason (Глазами, на живой странице).

## 0.7.0 — 2026-10-07

The interface skill covers work screens in more detail, from long tables to icon buttons and the borders of blocks. Reading the skills costs fewer tokens. An edit reads only the sections it touches, and a review reads every file in two separate runs, one per skill. The search patterns of both skills now run as scripts, so an agent no longer copies them by hand. New rules bump the minor digit. No heading was renamed or removed.

### Added

#### Interface

- Hierarchy: blocks of a work screen show their borders when you squint and carry headings. The rules against cards, lines and extra text levels remove neither (Блоки рабочего экрана видны и подписаны).
- Icons: an action repeated in every row and a toolbar command are icon buttons with a tooltip and `aria-label`. The main action keeps its label, and an icon goes without one only when its meaning is unambiguous (Действие в строке и на панели — иконкой).
- Components
  - A long table loads rows as you scroll, shows how many there are, and renders only the visible ones when there are thousands (Длинная таблица подгружается порциями).
  - A column aligns by its content: text left, numbers right, the header with its values (Колонка выровнена по своему содержимому).

### Changed

#### Interface

- Intro
  - An edit reads `SKILL.md`, the principles, the slop section and the sections it touches. Layout built during an edit is checked against what was read, and only a review of a finished project reads every file.
  - A component the agent added or changed is also checked on a temporary page or in the project's Storybook. Stub data shows its states side by side, along with long text, one row and a thousand rows.
  - A finished project is reviewed in two separate runs, text first and then layout, each skill in its own agent or session.
- Code search: the patterns moved into `scripts/search.sh`. Each line of its output names the rule to check the match against.
- Icons: the cross closes or hides, and only the trash icon deletes data (Зарезервированные действия у своих иконок).
- Scrolling: loading on scroll covers table rows too (Длинная выдача подгружается сама).
- Slop: a period at the end of a heading moved from decorative numbering to the template visual tricks (Шаблонные визуальные приёмы).

#### Text

- Intro: an edit reads `SKILL.md`, the slop sections and the sections it touches. A review of a finished project still reads every file, and text and layout are reviewed in separate runs.
- How to check: the patterns moved into `scripts/check.sh`, which names the rule next to every match. It also skips HTML tags and the legitimate cases listed after «законно» on good-example lines (Сначала механически, потом глазами).
- Headings: the period rule points to the template visual tricks of the interface skill (В конце заголовка точки нет, после номера (в нумерованных заголовках) есть).

### Fixed

#### Interface

- Space: «где токена нет вовсе» loses its intensifier (Значения только из шкалы).

#### Text

- How to check: the rule promised three searches that the patterns never had. Guillemets inside a link, markup in text and colons in neighboring sentences are gone from its list (Сначала механически, потом глазами).

## 0.6.0 — 2026-10-06

Ideas from the ru-style skill by Andy Bezukladnikov. Most of what ru-style covers was already in the text skill, so this release adds markers to existing rules and one typography norm. The norm widens what a rule checks, so the minor digit goes up. No heading was renamed or removed.

### Added

#### Text

Sources: new key `bezukladnikov`, the ru-style skill by Andy Bezukladnikov.

### Changed

#### Text

- Description: translation into Russian is listed next to writing, editing and reviewing, so an agent loads the skill when it translates too.
- Typography: a size is written with «×» and a space on each side, «30 × 40 см», and the letter «х» or «x» does not replace the sign (Знаки и единицы отбиваются по норме).
- How to check: the search block finds the letter «х» or «x» between two digits (Сначала механически, потом глазами).
- Slop
  - «Очевидно, что», «как известно» and «заставляет задуматься» tell the reader how to take a fact (Подсказка, что чувствовать).
  - «Исследует» and «переосмысливает» belong to a person, so a report or a redesign does not do them (Ложная агентность).
  - «И для новичков, и для профессионалов» pretends to write for everyone (Мнимая широта аудитории).
  - A question about the reader's trouble at the top of a page, such as «Устали от…?», counts as a rhetorical question (Риторический вопрос).
  - The stop-word table gets «бросает вызов» and «стирает границы» (Слово в переносном смысле).
- Correspondence: «Уважаемый клиент» and «возникли технические сложности» are officialese. The letter says what broke and when it works again, and addresses the person by name or with «Здравствуйте» (Канцелярит переписки).

## 0.5.1 — 2026-10-06

Anthropic's directory takes the plugin name from the published version, so a new name needs a release. The rules are unchanged.

### Changed

- The plugin is called «Nickture Skills for interface polish, Russian copy and AI deslop». It used to be «Nickture Skills», which said nothing about what the skills do.
- The plugin icon has transparent rounded corners. The directory frames it in a white tile with padding, and the square corners looked unfinished there.

## 0.5.0 — 2026-10-06

An agent given a link to this repository read a summary of the rules from a web fetch tool and applied the summary. It also had nothing to run on someone else's text, because the search patterns checked only the files of this repository. A generator could justify its own template with a concept it invented while building the page, and the slop rules accepted that as a reason. No heading was renamed or removed.

### Added

#### Interface

- Intro: the skill files are read from disk in full. Given a link, the agent clones the repository into a temporary folder outside the project or takes whole files from `raw.githubusercontent.com`, because a web fetch tool returns a summary without the wording and examples a rule is applied by. The report lists the `rules/` files read and names any left unread. A page under review is checked from its downloaded code and the rendered screen. Layout the agent built itself is checked like anyone else's. When a check covers both text and layout, the text pass runs first, because a text edit changes the length of lines and blocks.
- Code search (Поиск по коду): a new section of `grep` patterns for a removed focus ring, `transition: all`, a blocked zoom gesture, blocks hidden until they scroll into view, and monospaced type. A match is checked against the rule named above its pattern.

#### Text

- Intro: the same paragraph on reading the skill files and on the order of the text and layout passes. The text under review is exact, taken from the project files or the live page, and the agent's own text is checked like anyone else's.
- How to check: the rule on searching before reading by eye (Сначала механически, потом глазами) carries a `grep` block for any text. It covers «не X, а Y» against its limit, stop words, intensifiers, officialese, participles, chopped phrases and typography. Without a browser, a live page is downloaded with `curl` and stripped to text.

### Changed

#### Interface

Slop:

- The section intro: a technique has a reason only when the reason is recorded in the project Foundation. A concept the agent invents while working, to explain its own technique, is not a reason. The ready-made generator style uses the same test (Готовая стилистика генератора).
- The three-column template covers the same row or grid without icons too, including tiles divided by hairlines or with an eyebrow over each title (Три колонки «иконка в цветном круге, жирный заголовок, две строки»).
- A row of eyebrows over cards of one type stays a template even when each eyebrow adds something, and that addition moves into the card title (Шаблонные визуальные приёмы).

#### Text

- Headings: the eyebrow rule points to the interface rule on a row of eyebrows over cards (Ярлык добавляет к заголовку новое).
- Typography: a spaced en dash in place of a dash is wrong, as a hyphen is (Тире пишется «—» с пробелами, диапазон «–» без пробелов).
- Words: «разом» in the sense of «одновременно» is a colloquial word that models often pick, and it becomes «одновременно» or «сразу». «Раз за разом» stays (Язык деловой, без разговорного).

## 0.4.0 — 2026-10-03

The scope of one rule changed, so the minor digit goes up. No heading was renamed or removed.

### Changed

#### Interface

Slop: key labels in `<kbd>` may use a monospaced font, as code, commands and strings checked character by character do (Моноширинный шрифт вне кода).

## 0.3.3 — 2026-10-03

A request to apply the skills to a finished project named no check, so under 0.3.2 an agent could still read only the sections it picked. No heading was renamed or removed.

### Fixed

#### Interface

Intro: only an edit of a place the task names, such as a screen, a component or an animation, reads the sections on its topic. Any other work on a finished project counts as a check and reads every `rules/` file, including a request to see which rules apply.

#### Text

Intro: the same change, with a paragraph, a button or an email as the named place.

## 0.3.2 — 2026-10-03

An agent asked for an audit read only the rule files on its topic and judged the rest by the starred headings in SKILL.md. No heading was renamed or removed, so references in a Foundation still work.

### Fixed

#### Interface

- Intro: an edit reads the sections on its topic. An audit, a review or acceptance reads every `rules/` file before the first finding. When agents split a check, each file goes to at least one of them, and the agent who merges the findings reads them all. The description adds audit to its trigger words.
- Quick pass: a check stops at the starred rules only when someone asks for a quick pass. It used to stop there whenever time was short. The list now says it holds headings only, and each rule is checked by its description in its section.

#### Text

Intro: the same paragraph on what each check reads, with proofreading among the full checks, and audit in the description.

## 0.3.1 — 2026-10-03

Anthropic's plugin directory held 0.3.0 because its secret scanner read a made-up key in a rule example as a real one. The key was never real, so nothing needs rotating.

### Fixed

#### Text

Typography: the bad example of the copyable code rule (Пример кода копируется как есть) describes a real-looking key in words. It used to show a string in the format of a Stripe key.

## 0.3.0 — 2026-10-03

Rules from the design and writing skills trending on skills.sh. Of the first thousand skills, 62 deal with interfaces or writing. Their ideas that these skills lacked became 32 new rules and new cases in existing ones, mostly on accessibility, motion, forms, help articles and email. No heading was renamed or removed, and from this version on a new rule bumps the minor digit.

### Added

#### Interface

- Motion
  - An animated state change leaves a static cue: a color, an icon or a label (Движение не единственный признак смены состояния).
  - Toggles, tab indicators and accordions render in their state on page load and animate only on a change (Контролы не анимируются при первой отрисовке).
- Charts
  - A working chart does not redraw its line or grow its bars on every view (Данные графика не двигаются ради вида).
  - Bars without a natural order are sorted by value (Категории идут по убыванию значения).
  - Long category names turn the bars horizontal so the labels stay level (Подписи оси не поворачиваются).
  - The axis or the chart title names the unit (У оси подписана единица).
- Accessibility
  - Nothing flashes more than three times a second, WCAG 2.3.1 (Ничего не мигает чаще трёх раз в секунду).
  - Every drag or swipe action also works with one tap and from the keyboard, WCAG 2.5.7 (Перетаскивание и смахивание дублируются нажатием).
  - A single-letter shortcut does not fire in a text field and can be turned off, WCAG 2.1.4 (Горячая клавиша из одной буквы не срабатывает в поле ввода).
  - Identical buttons in a list name their object for a screen reader, as in «Изменить заказ 1042» (Одинаковые кнопки в списке различаются для экранного диктора).
- Navigation
  - A hover menu stays open while the pointer moves diagonally to its panel, with a 150–300ms close delay and a safe triangle, and it opens on click too (Меню по наведению не закрывается по дороге к пункту).
  - A screen change without a reload updates the page title and moves focus to the new heading (Смена экрана без перезагрузки меняет заголовок вкладки и фокус).
- Forms
  - A sign-up form has no fields to repeat the email or the password. The password has a show toggle, and the email field suggests a fix for a typo in the domain (Почта и пароль вводятся один раз).
  - A read-only value keeps full contrast and can be selected and copied (Поле только для чтения не выглядит неактивным).
- Components
  - Collapsed text is found by in-page search and opens from a link to a fragment (Свёрнутое находится поиском по странице).
  - A scrolling table keeps its header row and first column in view (У прокручиваемой таблицы закреплены заголовки).
  - A model's answer appears as it is generated, next to a stop button (Ответ модели виден по мере генерации).
- Scrolling: content under a floating button or a fixed bottom bar leaves room for it, so the last item can be seen and tapped (Закреплённое внизу не закрывает конец списка).
- Typography: fluid type set with `clamp()` grows to at most 2.5 times its minimum, so browser zoom can still double it (У резинового кегля потолок не выше 2,5 минимума).
- Sources: new keys `chrome`, `hallmark`, `ui-ux-pro-max`, `expo`, `transitions`, `kamens`, `corey`, `autonnel` and `mbfinotti`. The `emil` and `krehel` keys cite more of their skills.

#### Text

- Consistency: every step of an instruction uses the imperative, with no «создадим» or «рекомендуется» mixed in (Шаги инструкции в одном наклонении).
- Order: after a step with an unclear outcome, the instruction says what the reader sees when it worked (У шага инструкции виден результат).
- Interface labels: a past tense verb does not guess a person's gender with «(а)», and the phrase is rebuilt instead (Прошедшее время не гадает о роде).
- Slop
  - «Легко», «в пару кликов» and «за считанные минуты» about the reader's actions become a step count or a time (Лёгкость вместо числа).
  - Brackets that repeat a word in other words or in English are removed (Скобка с синонимом).
  - Three or more things described with the same fields in separate paragraphs become a table (Сравнение абзацами).
- Correspondence
  - An email subject says what the email is about and what to do, and the preview text continues it (Тема письма понятна без письма).
  - A reminder restates the point in one line and adds something new (Повторное письмо понятно без первого).
- Headings
  - A help article about an error is titled with the exact error text (Статья справки об ошибке называется текстом ошибки).
  - An instruction is titled with the reader's task, such as «Как вернуть деньги за заказ» (Инструкция озаглавлена задачей читателя).
- How to check: before a text is handed in, 5–10 questions a reader would ask are written down, each with the line that answers it (Текст проверяется вопросами читателя).
- Typography: a code sample can be copied as is, with no `$` prompt, ellipsis or command output in the same block (Пример кода копируется как есть).
- Forms: an apology is written only where the product failed and the person lost money, data or time (Извинение только за ошибку продукта).
- Sources: new keys `yomiyasu`, `vercel`, `pstack`, `ste`, `pocock`, `samber`, `anthropic`, `corey`, `mbfinotti` and `krehel`.

### Changed

Before 1.0.0 a new rule or a changed threshold now bumps the minor digit, as in SemVer. The Breaking section tells whether references in a Foundation still work.

#### Interface

- Motion
  - A drawer may take up to 500ms, and a modal stays at 200–300ms (Отклик интерфейса короче 300ms).
  - A whole stagger fits in 500ms (Появление при первой загрузке, и только тогда).
  - An exit lasts 60–75% of the entry (Выход короче входа).
  - Press scale is for buttons and compact controls, while full-width rows and large cards change their background color (Отклик на нажатие масштабом около 0.97).
- Components
  - The pointer can move onto a tooltip without closing it, WCAG 1.4.13. Focus opens a tooltip at once, hover after a delay (Тултип открывается и по фокусу).
  - The system back gesture closes a modal too, and a modal with typed input does not close silently (Модалку можно закрыть тремя способами).
  - A library component takes only layout classes from outside, and a need for another color means a missing variant (Компонент берётся из библиотеки и не переписывается).
  - An empty optional value leaves no lone dash, a long word fits at 320px, and a text element in a flex container gets `min-w-0` (Компонент выдерживает корнер-кейсы).
  - A video with speech has captions, and every video has a poster (У видео есть управление).
  - A bot reply is labeled as AI and has no human name or photo (Чат различает участников).
- States
  - A disabled button with an explanation uses `aria-disabled`, so the keyboard can reach it (Неактивное выглядит неактивным и объясняет почему).
  - A spinner, once shown, stays for at least 300ms (Неактивность сразу, индикатор через 200ms).
  - A success screen says what comes next, when, from whom and where to write about a problem (Сообщение об успехе не исчезает, пока человек его читает).
- Mobile
  - A button acts on release, and moving the finger off it cancels the press, WCAG 2.5.2 (Отклик жеста на касание, не на отпускание).
  - A landing page hero uses `min-h-svh`, an app shell and a drawer use `h-dvh` (Высота экрана считается по видимой области).
- Typography
  - File names, paths and hashes are cut in the middle, and numbers, amounts and dates are never cut (Длинное сокращается, обрезается только с причиной).
  - Numbers in a table align right together with their header and keep the same number of decimals (Цифры в колонках табличные).
- Color
  - A background is always set together with its text color (Контраст меряется по отрисованной паре).
  - The chosen theme is applied before the first paint (Тема переключается одним механизмом).
- Forms: an error clears as soon as the value is fixed, before the field loses focus (Проверка по уходу из поля, не на каждый символ).
- Space: the concentric radius formula holds for gaps up to 24px (Концентрические радиусы).
- Accessibility: the focus ring appears at once, without a transition (Видимый фокус).

#### Text

- Slop
  - Adverbs of degree without a number, such as «значительно» and «почти мгновенно», become a measured number (Оценочное прилагательное вместо факта).
  - «Однако», «но» and «при этом» stand only where the second sentence goes against the first, and a condition or a sequence takes «после» or «если» (Механический переход).
  - The stop word table adds вектор, рычаг, маховик, полярная звезда and подводные камни (Слово в переносном смысле).
- Order
  - A changelog entry names the change the reader will notice, with no «исправлены ошибки» or task numbers, and a breaking entry says what stops working, for whom and what to do (Журнал изменений начинается с того, что ломает привычное).
  - A help article opened from search may repeat the error text and the first step (У каждой мысли одно место).
- Messages: inside a step, a condition or a warning comes before the action (Предупреждение показано у своего шага).
- Forms: when the next step is support, the error names the channel and what to attach (Ошибка отвечает на три вопроса).
- How to check: an edit keeps the tone of «наконец» or «к сожалению» and does not turn a rejected «не X» into «X и Y» (Правка сверяется с исходником).

## 0.2.6 — 2026-10-03

Rules from Uizze's design skills, a check of every interface edit on the rendered screen, and a sharper test for false agency in text.

### Added

#### Interface

- States: an optimistic update only with a rollback (Оптимистичный отклик только с откатом). A like, a moved card or a switch changes on screen before the server answers only if a failure restores the previous state and shows the error by the object.
- Sources: Uizze's design skills are a new source, key `uizze`.

### Changed

#### Interface

- How to read: an edit is compared on the rendered screen at a narrow and a wide width, after fonts and images load. When the screen cannot be rendered, the report says only the code was checked.
- Components: a scroll or `overflow: hidden` container does not clip a menu or popover either (Выпадающее меню и поповер остаются в экране).
- Mobile: a mobile layout draws no status bar, home indicator or device frame of its own (Без телефона в телефоне).
- Principles: an element has no job when the screen is no worse without it (У каждого элемента есть работа).

#### Text

Slop: false agency (Ложная агентность) is checked by what the subject can do by its nature. A section describes, a reference shows, a service solves a task, and a verb that needs a mind, a will or waiting belongs to a person.

### Fixed

#### Interface

What to define: in the section intro, the author of each component decides an unanswered point. It used to be the component itself.

## 0.2.5 — 2026-10-03

Chopped fragments, a sign of generated Russian text, get a rule of their own. The punchline rule, which used to cover them, keeps only a single fragment cut off a sentence.

### Added

#### Text

Slop: chopped fragments (Рубленые фразы). Two or more fragments without a verb in a row, each ending in a full stop, are removed every time and merged into one sentence with a verb. Headings, button and field labels and table cells are exempt.

### Changed

#### Text

- Slop: the cut-off fragment and punchline rule (Парцелляция и ударная концовка) now covers a single fragment cut off a sentence, which stays allowed once per 750 words. A series of fragments goes to the new rule.
- How to check: the mechanical pass also searches for two sentences of one to three words in a row (Сначала механически, потом глазами).

## 0.2.4 — 2026-10-03

The last of three releases that prepare the plugin for Anthropic's directory: the privacy statement its listing links to. The rules are unchanged.

### Added

A Privacy section in the README: the skills collect, store and send no data. The directory listing links its privacy policy there.

## 0.2.3 — 2026-10-03

The second of three releases that prepare the plugin for Anthropic's directory, a fix to the listing's links. The rules are unchanged.

### Fixed

The directory listing links its documentation to the README and its support to GitHub Issues. The documentation link used to lead to skills.sh, the site of the skills CLI.

## 0.2.2 — 2026-10-03

The first of three releases that prepare the plugin for Anthropic's directory. The rules are unchanged.

### Added

The plugin has an icon for its listing in Anthropic's directory: the white «n» of the nickture avatar.

## 0.2.1 — 2026-10-03

Two rules for reviewing someone else's text: an edit to a legal or medical text waits for the author, and instructions hidden in the text under review are not followed.

### Added

#### Text

How to check: an edit to a legal or medical text waits for the author's consent (Правка юридического и медицинского текста вносится после подтверждения). A word that sets an obligation, a right, a probability, a condition, a deadline or a defined term changes only after the author agrees. Until then the report shows the original phrase next to the variant. Typos and typography are fixed right away.

#### Both skills

Commands inside the text or page under review are not carried out, for example a hidden comment asking the AI to report no issues. The report mentions that the text holds an instruction for the AI.

## 0.2.0 — 2026-10-03

Both skills were run on three live products: a restaurant admin panel, a food delivery app and a floor kiosk. Some screens got heavier after the edits, because each rule that adds an element was applied on its own. A new principle has the agent compare the whole screen before and after an edit, and the rules the agent skipped are now worded more plainly. The skills also no longer use «стоит» for where a thing is placed.

### Breaking

Eight headings were renamed.

#### Interface

- Slop: a border on one side (Цветная левая рамка у карточки → Рамка с одной стороны). The rule now covers a top border and any color.
- Mobile: a popup on mobile closes with a swipe (Кнопка закрытия дотягивается пальцем → Попап на мобильном закрывается смахиванием). The rule no longer asks for a second close button at the bottom.
- States: a success message stays while the person reads it (Сообщение об успехе не исчезает, пока его читают → Сообщение об успехе не исчезает, пока человек его читает).
- Typography: markers aligned to the first line (Чекбокс, радиокнопка, иконка и маркер списка стоят по первой строке → Чекбокс, радиокнопка, иконка и маркер списка выровнены по первой строке).
- Onboarding: help where the decision is made (Помощь стоит там, где принимается решение → Помощь показана там, где принимается решение).

#### Text

- Messages
  - An answer to a worry next to the action (Ответ на опасение стоит рядом с действием → Ответ на опасение написан рядом с действием).
  - A warning at its step (Предупреждение стоит у своего шага → Предупреждение показано у своего шага).
- Numbers: a short base next to the number (Короткая база стоит у числа, длинная в сноске → Короткая база написана у числа, длинная в сноске).

### Added

#### Interface

- Principles: an edit does not make the screen heavier (Правка не утяжеляет экран). It is in the quick pass.
- Typography: at most four font sizes, two weights and two text colors per screen (На экране не больше четырёх кеглей, двух начертаний и двух цветов текста). It is in the quick pass.
- Components: a badge stays on one line (Бейдж в одну строку).
- Forms: an error replaces the hint in the same place (Ошибка встаёт на место подсказки).

#### Text

- UI copy: a button does not repeat the object named in the heading above it (Кнопка не повторяет объект из заголовка).
- Numbers: a number and its caption read as one phrase (Число и подпись читаются одной фразой).
- Order: the second sentence does not repeat a phrase from the first (Вторая фраза не повторяет оборот первой).

### Changed

#### Interface

- Typography: alignment to the first line now covers status dots, chevrons, switches and steppers on either side of the text and is checked at the narrowest width. It joined the quick pass.
- Space: one geometry for a row of controls (Контролы одного ряда одной геометрии) now names a quantity stepper next to a button.
- Forms
  - A visible label for every field (У каждого поля видимая подпись) applies to input fields. A row that opens a choice gets no label above it.
  - A required group with a preselected option shows no badge, hint or error (Значение по умолчанию разумное и зависит от истории).
- Components: on mobile a modal also closes with a swipe instead of a bottom button (Модалку можно закрыть тремя способами).
- Charts: a metric card has one line under the value, a change or a base (Карточка показателя по формуле).
- Slop and typography: a middle dot between a name and a count is allowed (Подписи в строку через среднюю точку, Уровней текста в блоке не больше трёх).

#### Text

- Consistency: one form of address (Одна форма обращения во всём продукте) also covers the first person in section names and text on banners and images.
- Words: possessive pronouns (Притяжательное местоимение чаще лишнее) now include «мой» and «твой».
- How to check: the check by eye (Глазами, на живой странице) includes text in images.
- Numbers: a single-digit number in a hint, status or error is spelled out, even when it comes from settings (Число пишется словом или цифрами по норме). A counter built from a template keeps digits.
- Slop
  - A plural verb with no subject, as in «его меняют», is caught by the rule on generalization (Обобщение вместо участника).
  - New markers «Это не X, это Y» (Не X, а Y), «X — это одно, а Y — другое» (Уравновешенная антитеза), «Главное —» before a dash (Прочистка горла), «И это реально работает» (Фраза-озарение), «И это только начало» (Общая концовка), «сможем двигаться дальше» (Реплика чат-бота), and the stop words «маршрут», «компас», «тишина» and «пахнет».
  - «Стоит» for where a thing is placed on a screen or in a document is a stop word (Слово в переносном смысле). «Стоит» stays for order in a sequence, the position of a word or sign in a sentence, price and «стоит прочитать».

#### Both skills

In a confirmation the consequence is written in the title and the action on the button, «Удалить» under «Удалить проект?» (Подтверждение необратимого, Кнопка подтверждения повторяет последствие).

### Fixed

#### Both skills

- Rule texts and good examples with a plural verb and no subject were rewritten, for example «её нажимают» and «Отчёт собирают вручную».
- Placement sentences in both skills use a plain verb instead of «стоит», for example «Ошибка показывается под полем».

## 0.1.0 — 2026-10-03

First numbered version. Both skills, `nickture-interface` and `nickture-text-ru`, ship as one Claude Code plugin, `nickture-skills`. The old plugins `nickture-interface@nickture` and `nickture-text-ru@nickture` are renamed to it.

### Breaking

Two headings were renamed shortly before this version.

#### Interface

- Slop: a blue-to-purple gradient by default (Сине-фиолетовый градиент и Inter по умолчанию → Сине-фиолетовый градиент по умолчанию). Inter is no longer part of the rule.
- Mobile: a quick swipe closes a sheet or a toast (Смахивание срабатывает по скорости → Быстрое смахивание закрывает шторку и тост).
