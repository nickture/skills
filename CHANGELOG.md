# Changelog

Projects reference rules by their headings, for example in a Foundation file. The version number follows SemVer by the meaning of a change, not by how many rules it touches.

| Change | From 1.0.0 | Before 1.0.0 |
| --- | --- | --- |
| A rule heading, a section file or a skill is renamed or removed | major | minor |
| A new rule or section, or a rule now checks something else: a threshold, a number, a scope | minor | minor |
| Wording, an example, a source, a typo | patch | patch |

Before 1.0.0 a renamed or removed heading and a new rule both bump the minor digit, so the number alone does not say whether your references still work. The Breaking section does. A version covers changes to `skills/` and the plugin manifest. Changes to the README, `working/` and the issue forms come out without a version.

A version lists its changes under Breaking, Added, Changed and Fixed. Breaking names every renamed or removed heading with its replacement, so you know what to change in your Foundation. A rule is named in English by its meaning, with the Russian heading in parentheses to search for.

## 0.3.0 — 2026-10-03

### Added

- Interface, motion: an animated state change leaves a static cue, a color, an icon or a label (Движение не единственный признак смены состояния).
- Interface, motion: toggles, tab indicators and accordions render in their state on page load and animate only on a change (Контролы не анимируются при первой отрисовке).
- Interface, charts: a working chart does not redraw its line or grow its bars on every view (Данные графика не двигаются ради вида).
- Interface, charts: bars without a natural order are sorted by value (Категории идут по убыванию значения).
- Interface, charts: long category names turn the bars horizontal so the labels stay level (Подписи оси не поворачиваются).
- Interface, charts: the axis or the chart title names the unit (У оси подписана единица).
- Interface, accessibility: nothing flashes more than three times a second, WCAG 2.3.1 (Ничего не мигает чаще трёх раз в секунду).
- Interface, accessibility: every drag or swipe action also works with one tap and from the keyboard, WCAG 2.5.7 (Перетаскивание и смахивание дублируются нажатием).
- Interface, accessibility: a single-letter shortcut does not fire in a text field and can be turned off, WCAG 2.1.4 (Горячая клавиша из одной буквы не срабатывает в поле ввода).
- Interface, accessibility: identical buttons in a list name their object for a screen reader, as in «Изменить заказ 1042» (Одинаковые кнопки в списке различаются для экранного диктора).
- Interface, navigation: a hover menu stays open while the pointer moves diagonally to its panel, with a 150–300ms close delay and a safe triangle, and it opens on click too (Меню по наведению не закрывается по дороге к пункту).
- Interface, navigation: a screen change without a reload updates the page title and moves focus to the new heading (Смена экрана без перезагрузки меняет заголовок вкладки и фокус).
- Interface, forms: a sign-up form has no fields to repeat the email or the password; the password has a show toggle, and the email field suggests a fix for a typo in the domain (Почта и пароль вводятся один раз).
- Interface, forms: a read-only value keeps full contrast and can be selected and copied (Поле только для чтения не выглядит неактивным).
- Interface, components: collapsed text is found by in-page search and opens from a link to a fragment (Свёрнутое находится поиском по странице).
- Interface, components: a scrolling table keeps its header row and first column in view (У прокручиваемой таблицы закреплены заголовки).
- Interface, components: a model's answer appears as it is generated, next to a stop button (Ответ модели виден по мере генерации).
- Interface, scrolling: content under a floating button or a fixed bottom bar leaves room for it, so the last item can be seen and tapped (Закреплённое внизу не закрывает конец списка).
- Interface, typography: fluid type set with `clamp()` grows to at most 2.5 times its minimum, so browser zoom can still double it (У резинового кегля потолок не выше 2,5 минимума).
- Interface: new sources under the keys `chrome`, `hallmark`, `ui-ux-pro-max`, `expo`, `transitions`, `kamens`, `corey`, `autonnel` and `mbfinotti`. The `emil` and `krehel` keys cite more of their skills.
- Text, consistency: every step of an instruction uses the imperative, with no «создадим» or «рекомендуется» mixed in (Шаги инструкции в одном наклонении).
- Text, order: after a step with an unclear outcome, the instruction says what the reader sees when it worked (У шага инструкции виден результат).
- Text, interface labels: a past tense verb does not guess a person's gender with «(а)», and the phrase is rebuilt instead (Прошедшее время не гадает о роде).
- Text, slop: «легко», «в пару кликов» and «за считанные минуты» about the reader's actions become a step count or a time (Лёгкость вместо числа).
- Text, slop: brackets that repeat a word in other words or in English are removed (Скобка с синонимом).
- Text, slop: three or more things described with the same fields in separate paragraphs become a table (Сравнение абзацами).
- Text, correspondence: an email subject says what the email is about and what to do, and the preview text continues it (Тема письма понятна без письма).
- Text, correspondence: a reminder restates the point in one line and adds something new (Повторное письмо понятно без первого).
- Text, headings: a help article about an error is titled with the exact error text (Статья справки об ошибке называется текстом ошибки).
- Text, headings: an instruction is titled with the reader's task, such as «Как вернуть деньги за заказ» (Инструкция озаглавлена задачей читателя).
- Text, how to check: before a text is handed in, 5–10 questions a reader would ask are written down, each with the line that answers it (Текст проверяется вопросами читателя).
- Text, typography: a code sample can be copied as is, with no `$` prompt, ellipsis or command output in the same block (Пример кода копируется как есть).
- Text, forms: an apology is written only where the product failed and the person lost money, data or time (Извинение только за ошибку продукта).
- Text: new sources under the keys `yomiyasu`, `vercel`, `pstack`, `ste`, `pocock`, `samber`, `anthropic`, `corey`, `mbfinotti` and `krehel`.

### Changed

- Version numbers: before 1.0.0 a new rule or a changed threshold now bumps the minor digit, as in SemVer. The Breaking section tells whether references in a Foundation still work.
- Interface, mobile: a button acts on release, and moving the finger off it cancels the press, WCAG 2.5.2 (Отклик жеста на касание, не на отпускание).
- Interface, components: the pointer can move onto a tooltip without closing it, WCAG 1.4.13. Focus opens a tooltip at once, hover after a delay (Тултип открывается и по фокусу).
- Interface, components: the system back gesture closes a modal too, and a modal with typed input does not close silently (Модалку можно закрыть тремя способами).
- Interface, components: a library component takes only layout classes from outside, and a need for another color means a missing variant (Компонент берётся из библиотеки и не переписывается).
- Interface, components: an empty optional value leaves no lone dash, a long word fits at 320px, and a text element in a flex container gets `min-w-0` (Компонент выдерживает корнер-кейсы).
- Interface, components: a video with speech has captions, and every video has a poster (У видео есть управление).
- Interface, components: a bot reply is labeled as AI and has no human name or photo (Чат различает участников).
- Interface, forms: an error clears as soon as the value is fixed, before the field loses focus (Проверка по уходу из поля, не на каждый символ).
- Interface, states: a disabled button with an explanation uses `aria-disabled`, so the keyboard can reach it (Неактивное выглядит неактивным и объясняет почему).
- Interface, states: a spinner, once shown, stays for at least 300ms (Неактивность сразу, индикатор через 200ms).
- Interface, states: a success screen says what comes next, when, from whom and where to write about a problem (Сообщение об успехе не исчезает, пока человек его читает).
- Interface, typography: file names, paths and hashes are cut in the middle, and numbers, amounts and dates are never cut (Длинное сокращается, обрезается только с причиной).
- Interface, typography: numbers in a table align right together with their header and keep the same number of decimals (Цифры в колонках табличные).
- Interface, mobile: a landing page hero uses `min-h-svh`, an app shell and a drawer use `h-dvh` (Высота экрана считается по видимой области).
- Interface, space: the concentric radius formula holds for gaps up to 24px (Концентрические радиусы).
- Interface, color: a background is always set together with its text color (Контраст меряется по отрисованной паре).
- Interface, color: the chosen theme is applied before the first paint (Тема переключается одним механизмом).
- Interface, accessibility: the focus ring appears at once, without a transition (Видимый фокус).
- Interface, motion: a drawer may take up to 500ms, and a modal stays at 200–300ms (Отклик интерфейса короче 300ms).
- Interface, motion: a whole stagger fits in 500ms (Появление при первой загрузке, и только тогда).
- Interface, motion: an exit lasts 60–75% of the entry (Выход короче входа).
- Interface, motion: press scale is for buttons and compact controls, while full-width rows and large cards change their background color (Отклик на нажатие масштабом около 0.97).
- Text, messages: inside a step, a condition or a warning comes before the action (Предупреждение показано у своего шага).
- Text, slop: adverbs of degree without a number, such as «значительно» and «почти мгновенно», become a measured number (Оценочное прилагательное вместо факта).
- Text, forms: when the next step is support, the error names the channel and what to attach (Ошибка отвечает на три вопроса).
- Text, order: a changelog entry names the change the reader will notice, with no «исправлены ошибки» or task numbers, and a breaking entry says what stops working, for whom and what to do (Журнал изменений начинается с того, что ломает привычное).
- Text, order: a help article opened from search may repeat the error text and the first step (У каждой мысли одно место).
- Text, slop: «однако», «но» and «при этом» stand only where the second sentence goes against the first, and a condition or a sequence takes «после» or «если» (Механический переход).
- Text, how to check: an edit keeps the tone of «наконец» or «к сожалению» and does not turn a rejected «не X» into «X и Y» (Правка сверяется с исходником).
- Text, slop: the stop word table adds вектор, рычаг, маховик, полярная звезда and подводные камни (Слово в переносном смысле).

## 0.2.6 — 2026-10-03

### Added

- Interface, states: an optimistic update only with a rollback (Оптимистичный отклик только с откатом). A like, a moved card or a switch changes on screen before the server answers only if a failure restores the previous state and shows the error by the object.
- Interface: Uizze's design skills are a new source, key `uizze`.

### Changed

- Interface: an edit is compared on the rendered screen at a narrow and a wide width, after fonts and images load. When the screen cannot be rendered, the report says only the code was checked.
- Interface, components: a scroll or `overflow: hidden` container does not clip a menu or popover either (Выпадающее меню и поповер остаются в экране).
- Interface, mobile: a mobile layout draws no status bar, home indicator or device frame of its own (Без телефона в телефоне).
- Interface, principles: an element has no job when the screen is no worse without it (У каждого элемента есть работа).
- Text, slop: false agency (Ложная агентность) is checked by what the subject can do by its nature. A section describes, a reference shows, a service solves a task, and a verb that needs a mind, a will or waiting belongs to a person.

### Fixed

- Interface, what to define: in the section intro, the author of each component decides an unanswered point. It used to be the component itself.

## 0.2.5 — 2026-10-03

### Added

- Text, slop: chopped fragments (Рубленые фразы). Two or more fragments without a verb in a row, each ending in a full stop, are removed every time and merged into one sentence with a verb. Headings, button and field labels and table cells are exempt.

### Changed

- Text, slop: the cut-off fragment and punchline rule (Парцелляция и ударная концовка) now covers a single fragment cut off a sentence, which stays allowed once per 750 words. A series of fragments goes to the new rule.
- Text, how to check: the mechanical pass also searches for two sentences of one to three words in a row (Сначала механически, потом глазами).

## 0.2.4 — 2026-10-03

### Added

- A Privacy section in the README: the skills collect, store and send no data. The directory listing links its privacy policy there.

## 0.2.3 — 2026-10-03

### Fixed

- The directory listing links its documentation to the README and its support to GitHub Issues. The documentation link used to lead to skills.sh, the site of the skills CLI.

## 0.2.2 — 2026-10-03

### Added

- The plugin has an icon for its listing in Anthropic's directory: the white «n» of the nickture avatar.

## 0.2.1 — 2026-10-03

### Added

- Text, how to check: an edit to a legal or medical text waits for the author's consent (Правка юридического и медицинского текста вносится после подтверждения). A word that sets an obligation, a right, a probability, a condition, a deadline or a defined term changes only after the author agrees. Until then the report shows the original phrase next to the variant. Typos and typography are fixed right away.
- Both skills: commands inside the text or page under review are not carried out, for example a hidden comment asking the AI to report no issues. The report mentions that the text holds an instruction for the AI.

## 0.2.0 — 2026-10-03

Both skills were run on three live products: a restaurant admin panel, a food delivery app and a floor kiosk. Some screens got heavier after the edits, because each rule that adds an element was applied on its own. A new principle has the agent compare the whole screen before and after an edit, and the rules the agent skipped are now worded more plainly. The skills also no longer use «стоит» for where a thing is placed.

### Breaking

Eight headings were renamed.

- Interface, slop: a border on one side (Цветная левая рамка у карточки → Рамка с одной стороны). The rule now covers a top border and any color.
- Interface, mobile: a popup on mobile closes with a swipe (Кнопка закрытия дотягивается пальцем → Попап на мобильном закрывается смахиванием). The rule no longer asks for a second close button at the bottom.
- Interface, states: a success message stays while the person reads it (Сообщение об успехе не исчезает, пока его читают → Сообщение об успехе не исчезает, пока человек его читает).
- Interface, typography: markers aligned to the first line (Чекбокс, радиокнопка, иконка и маркер списка стоят по первой строке → Чекбокс, радиокнопка, иконка и маркер списка выровнены по первой строке).
- Interface, onboarding: help where the decision is made (Помощь стоит там, где принимается решение → Помощь показана там, где принимается решение).
- Text, messages: an answer to a worry next to the action (Ответ на опасение стоит рядом с действием → Ответ на опасение написан рядом с действием).
- Text, messages: a warning at its step (Предупреждение стоит у своего шага → Предупреждение показано у своего шага).
- Text, numbers: a short base next to the number (Короткая база стоит у числа, длинная в сноске → Короткая база написана у числа, длинная в сноске).

### Added

- Interface, principles: an edit does not make the screen heavier (Правка не утяжеляет экран). It is in the quick pass.
- Interface, typography: at most four font sizes, two weights and two text colors per screen (На экране не больше четырёх кеглей, двух начертаний и двух цветов текста). It is in the quick pass.
- Interface, components: a badge stays on one line (Бейдж в одну строку).
- Interface, forms: an error replaces the hint in the same place (Ошибка встаёт на место подсказки).
- Text, UI copy: a button does not repeat the object named in the heading above it (Кнопка не повторяет объект из заголовка).
- Text, numbers: a number and its caption read as one phrase (Число и подпись читаются одной фразой).
- Text, order: the second sentence does not repeat a phrase from the first (Вторая фраза не повторяет оборот первой).

### Changed

- Interface, typography: alignment to the first line now covers status dots, chevrons, switches and steppers on either side of the text and is checked at the narrowest width. It joined the quick pass.
- Interface, space: one geometry for a row of controls (Контролы одного ряда одной геометрии) now names a quantity stepper next to a button.
- Interface, forms: a visible label for every field (У каждого поля видимая подпись) applies to input fields. A row that opens a choice gets no label above it.
- Interface, forms: a required group with a preselected option shows no badge, hint or error (Значение по умолчанию разумное и зависит от истории).
- Interface, components: on mobile a modal also closes with a swipe instead of a bottom button (Модалку можно закрыть тремя способами).
- Interface, charts: a metric card has one line under the value, a change or a base (Карточка показателя по формуле).
- Interface and text: in a confirmation the consequence is written in the title and the action on the button, «Удалить» under «Удалить проект?» (Подтверждение необратимого, Кнопка подтверждения повторяет последствие).
- Interface: a middle dot between a name and a count is allowed (Подписи в строку через среднюю точку, Уровней текста в блоке не больше трёх).
- Text: one form of address (Одна форма обращения во всём продукте) also covers the first person in section names and text on banners and images. Possessive pronouns (Притяжательное местоимение чаще лишнее) now include «мой» and «твой», and the check by eye (Глазами, на живой странице) includes text in images.
- Text, numbers: a single-digit number in a hint, status or error is spelled out, even when it comes from settings (Число пишется словом или цифрами по норме). A counter built from a template keeps digits.
- Text, slop: a plural verb with no subject, as in «его меняют», is caught by the rule on generalization (Обобщение вместо участника).
- Text, slop: new markers «Это не X, это Y» (Не X, а Y), «X — это одно, а Y — другое» (Уравновешенная антитеза), «Главное —» before a dash (Прочистка горла), «И это реально работает» (Фраза-озарение), «И это только начало» (Общая концовка), «сможем двигаться дальше» (Реплика чат-бота), and the stop words «маршрут», «компас», «тишина» and «пахнет».
- Text, slop: «стоит» for where a thing is placed on a screen or in a document is a stop word (Слово в переносном смысле). «Стоит» stays for order in a sequence, the position of a word or sign in a sentence, price and «стоит прочитать».

### Fixed

- Rule texts and good examples with a plural verb and no subject were rewritten, for example «её нажимают» and «Отчёт собирают вручную».
- Placement sentences in both skills use a plain verb instead of «стоит», for example «Ошибка показывается под полем».

## 0.1.0 — 2026-10-03

First numbered version. Both skills, `nickture-interface` and `nickture-text-ru`, ship as one Claude Code plugin, `nickture-skills`. The old plugins `nickture-interface@nickture` and `nickture-text-ru@nickture` are renamed to it.

### Breaking

Two headings were renamed shortly before this version.

- Interface, slop: a blue-to-purple gradient by default (Сине-фиолетовый градиент и Inter по умолчанию → Сине-фиолетовый градиент по умолчанию). Inter is no longer part of the rule.
- Interface, mobile: a quick swipe closes a sheet or a toast (Смахивание срабатывает по скорости → Быстрое смахивание закрывает шторку и тост).
