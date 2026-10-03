# Changelog

Projects reference rules by their headings, for example in a Foundation file. The version number follows SemVer and tells you whether those references still work.

| Change | From 1.0.0 | Before 1.0.0 |
| --- | --- | --- |
| A rule heading, a section file or a skill is renamed or removed | major | minor |
| A new rule or section, or a rule now checks something else: a threshold, a number, a scope | minor | patch |
| Wording, an example, a source, a typo | patch | patch |

Before 1.0.0 each kind of change bumps one digit lower, the usual convention for 0.x versions. A version covers changes to `skills/` and the plugin manifest. Changes to the README, `working/` and the issue forms come out without a version.

A version lists its changes under Breaking, Added, Changed and Fixed. Breaking names every renamed or removed heading with its replacement, so you know what to change in your Foundation. A rule is named in English by its meaning, with the Russian heading in parentheses to search for.

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
