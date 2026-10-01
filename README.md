# Nickture Skills

Two agent skills with checkable rules, one for interface design and one for Russian text. They work in Claude Code, Codex, Cursor and other agents that support Agent Skills. The rules are written in Russian. The interface rules apply to any interface. The text rules apply to Russian text only for now, with an English version planned, and also cover the signs of AI-generated writing.

Автор: [Nickture](https://nickture.com).

Скиллы с проверяемыми правилами для ИИ-агентов. Агент применяет их, когда правит интерфейс или текст, и по ним же принимает готовую работу.

| Скилл | Для чего |
| --- | --- |
| [`nickture-interface`](skills/nickture-interface/SKILL.md) | вёрстка, стили, компоненты и анимация любого интерфейса: веб-приложения, сайта, лендинга, мобильной версии, письма, презентации |
| [`nickture-text-ru`](skills/nickture-text-ru/SKILL.md) | любой текст на русском: страница, документ, подпись кнопки, ошибка, письмо, ответ клиенту |

По `nickture-text-ru` агент ещё и вычищает признаки сгенерированного текста. В разделе [«Слоп»](skills/nickture-text-ru/SKILL.md#слоп) их несколько десятков, в том числе штампы, конструкции вроде «не X, а Y», канцелярит, усилители, оговорки одна за другой, лишние списки и заголовки, жирный посреди абзаца и предложения одной длины подряд.

Правила собраны из собственных разборов и мыслей автора, а также из открытых каталогов, книг и статей. Ключ в конце правила ведёт в таблицу источников `sources.md`. В `nickture-interface` звёздочкой ★ отмечены правила о самых заметных ошибках, и когда времени мало, их проверяют первыми. Правило можно нарушить, если для этого есть причина.

## Установка

### Утилитой skills

Она ставит скиллы в Claude Code, Codex, Cursor и другие агенты и работает на Node.js или Bun. Документация на [skills.sh](https://skills.sh).

```bash
npx skills add nickture/skills    # Node.js
bunx skills add nickture/skills   # Bun
```

Команда спросит, какие скиллы и в какие агенты поставить. Один скилл ставится флагом `--skill`, а для всех проектов сразу добавляется `-g`.

```bash
npx skills add nickture/skills --skill nickture-interface -g
bunx skills add nickture/skills --skill nickture-interface -g
```

### Плагином Claude Code

```text
/plugin marketplace add nickture/skills
/plugin install nickture-interface@nickture
/plugin install nickture-text-ru@nickture
```

Первая команда добавляет каталог плагинов, следующие ставят скиллы. Можно поставить один из двух.

### Вручную

Папка скилла кладётся туда, где агент ищет скиллы.

| Агент | Для всех проектов | Для одного проекта |
| --- | --- | --- |
| Claude Code | `~/.claude/skills/` | `.claude/skills/` |
| Codex, Cursor | `~/.agents/skills/` | `.agents/skills/` |

Если вместо копии поставить симлинк на клон репозитория, скилл будет обновляться через `git pull`.

```bash
git clone https://github.com/nickture/skills.git ~/nickture-skills
mkdir -p ~/.claude/skills
ln -s ~/nickture-skills/skills/nickture-interface ~/.claude/skills/nickture-interface
```

## Как запускать

Скилл подключается сам, когда задача подходит под его описание. Вызвать его явно можно командой `/nickture-interface` в Claude Code и Cursor или `$nickture-interface` в Codex.

Примеры запросов:

- «Проверь экран оформления заказа по nickture-interface»
- «Перепиши тексты ошибок в форме регистрации по nickture-text-ru»
- «Пройди страницу тарифов по экспресс-проходу nickture-interface»

Проверку лучше запускать в режиме плана. В нём агент читает разделы по теме, выписывает нарушенные правила и предлагает правки. Файлы он меняет только после того, как вы одобрите план. Правку, с которой вы не согласны, можно убрать из плана до того, как она попадёт в код.

| Агент | Как включить |
| --- | --- |
| Claude Code | `Shift+Tab` или `/plan` перед запросом |
| Codex | `/plan` |
| Cursor | `Shift+Tab` в поле чата |

Правил много, и на приёмке агент читает все разделы. На слабой модели или низком уровне рассуждения он читает выборочно и пропускает правила. Поэтому берите сильную модель из доступных. В Claude Code это Opus или Sonnet с уровнем `high` или `max`, а у некоторых из них по умолчанию стоит `medium`.

```text
/effort high
```

Уровень `max` действует до конца сессии, `high` сохраняется и для следующих. В Codex модель и уровень рассуждения выбираются командой `/model`.

Правила общие для любого продукта. Решения конкретного проекта записываются в его Foundation: гарнитуры, цвета, шкалы отступов, длительности анимации и исключения из правил с причиной. Вопросы, на которые он отвечает, перечислены в разделе [«Что желательно определить»](skills/nickture-interface/rules/what-to-define.md). Foundation лежит в репозитории проекта обычным файлом. Чтобы агент его читал, сошлитесь на него в `CLAUDE.md` или `AGENTS.md` проекта.

## Обновление

Номеров версий нет, поэтому ставится всегда текущее состояние ветки `main`.

| Как поставлен скилл | Как обновить |
| --- | --- |
| утилита skills | `npx skills update` или `bunx skills update` |
| плагин Claude Code | `/plugin marketplace update nickture`, затем `/reload-plugins` |
| симлинк на клон | `git pull` в папке клона |
| копия папки | скопировать заново |

Сам обновляется только плагин, и то если включить автообновление. У сторонних каталогов плагинов оно выключено по умолчанию. Включается оно в `/plugin` на вкладке Marketplaces пунктом Enable auto-update.

## Что в репозитории

```text
skills/
  nickture-interface/   SKILL.md, rules/, sources.md
  nickture-text-ru/     SKILL.md, rules/, sources.md
working/
  interface/            записи редакции и черновики по интерфейсу
  text/                 записи редакции и черновики по тексту
```

В `working/` лежат спорные правила, черновики разделов, расхождения источников и то, что из них сознательно не взято, с причиной. Папка не входит в скиллы, и её правила агент не применяет. Она открыта, чтобы её можно было обсуждать.

## Участие

Ошибку в правиле, спорное правило или новый источник присылайте в [issues](https://github.com/nickture/skills/issues). Новое правило сначала обсуждается там. Опечатки и мелкие правки можно сразу присылать через pull request. Формат правила и проверки перед коммитом описаны в [`CLAUDE.md`](CLAUDE.md).

## Лицензия

[CC BY 4.0](LICENSE). Правила можно копировать и менять, в том числе в коммерческих проектах. При этом укажите автора, [Nickture](https://nickture.com), и дайте ссылку на этот репозиторий.
