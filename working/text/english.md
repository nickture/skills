# Английские правила текста

Сюда собирается то, что верно только для английского текста и поэтому не входит в [скилл `nickture-text-ru`](../../skills/nickture-text-ru/SKILL.md). Из этого файла вырастут разделы английской версии скилла. Правила пишутся в формате скилла, примеры в них английские. Ключи источников расшифрованы в таблице «Источники» [скилла `nickture-text-ru`](../../skills/nickture-text-ru/sources.md).

## Правила без русской пары

- **Слова, которые модель пишет чаще людей.** Модели ставят эти слова намного чаще людей, особенно по нескольку в одном абзаце: additionally, align with, bolstered, comprehensive, crucial, delve, elevate, embark, endeavor, enduring, enhance, fostering, garner, highlight (глагол), interplay, intricate, journey (отвлечённо), key (прилагательное), landscape (отвлечённо), meticulous, navigate (отвлечённо), notably, pivotal, poignant, quietly, resilience, robust (в переносном смысле), seamless, seamlessly, showcase, tapestry (отвлечённо), testament, transformative, underscore (глагол), unleash, valuable, vibrant. Одно слово из списка признаком не считается, несколько в одном абзаце считаются. Слово меняется на простое или убирается вместе с оборотом. Список устаревает с каждой новой моделью, поэтому пополняется по разборам. По замеру quiron, в постах ассистентов 2026 года большинство слов-маркеров 2023 года встречается в 1% постов и реже. Частыми стали increasingly, significantly, consistently, meaningful, merely, remains и genuinely, а у Claude ещё through, across, substantially и mechanisms. Признаком считаются три разных слова из списка в одном тексте. `[wiki-ai, pangram, quiron]`
  > Плохо: «Additionally, an enduring testament to Italian influence is the widespread adoption of pasta in the local culinary landscape»
  >
  > Хорошо: «Pasta dishes, introduced during Italian colonization, remain common»
- **Дефис в составном определении только перед существительным.** Составное определение пишется через дефис перед существительным и раздельно после него. Модель ставит дефис везде. Признак слабый: он считается, только когда рядом есть другие. `[wiki-ai]`
  > Плохо: «The report is high-quality and the plan is long-term»
  >
  > Хорошо: «a high-quality report», «The report is high quality»; законно «The team is cross-functional»: такие слова словарь пишет через дефис всегда
- **Возвышенный синоним простого слова.** Модель ставит длинное книжное слово туда, где есть простое: utilize, leverage и showcase вместо use и show. Простое слово короче и понятнее. Обратная замена не нужна: very, get и lot ради «человечности» в текст не добавляются. `[quiron]`
  > Плохо: «We utilize the dashboard to showcase results»
  >
  > Хорошо: «We use the dashboard to show results»
- **Фразовый глагол вместо простого.** Spin up, reach out, dive into и kick off ставятся туда, где есть один точный глагол. Фразовый глагол многозначен, и читатель с неродным английским понимает его хуже. `[ste]`
  > Плохо: «Spin up a server and reach out to the team before you dive into the logs»
  >
  > Хорошо: «Start a server and contact the team before you read the logs»
- **Длина предложения.** В инструкции предложение до 20 слов, в описании до 25. Длинное предложение делится на два. Порог посчитан на английских словах, а русское предложение того же смысла короче, поэтому правило лежит здесь. `[ste]`
  > Плохо: «To configure the integration, open the settings page, which is located in the sidebar under the workspace menu, and then select the provider you want to connect»
  >
  > Хорошо: «Open the settings page from the workspace menu. Select the provider to connect»
- **Уровень чтения продающего текста.** Продающий текст читается на уровне 5–8 класса американской школы: каждое предложение с первого раза понимает двенадцатилетний. Уровень оценивается формулой удобочитаемости, и худшее предложение переписывается простыми словами. Шкала классов откалибрована для английского, поэтому правило лежит здесь. `[copy-machine]`
  > Плохо: «Our platform leverages advanced analytics to facilitate data-driven decision-making across organizational stakeholders»
  >
  > Хорошо: «The report shows which campaigns brought sales, so the team knows where to spend next month»

## Английские маркеры правил `nickture-text-ru`

Правила ниже уже есть в [скилле `nickture-text-ru`](../../skills/nickture-text-ru/SKILL.md), здесь только английские обороты, по которым их искать. `[wiki-ai, pangram, russell, stockton, no-ai-slop, vercel]`

| Правило | Английские маркеры |
| --- | --- |
| «Не X, а Y» | not X but Y; not just, not only, not merely X, but Y; it's not X, it's Y; X rather than Y; This isn't about X. It's about Y.; That's not X. That's Y.; хвост «X, not Y»; less about X than about Y |
| «Без» вместо факта | no more X, say goodbye to X, without the hassle, hassle-free, no guesswork, no fluff, zero friction, хвост «, no guessing»; законно no credit card required, no setup fee |
| Цепочка отрицаний | No X. No Y. No Z.; no X, no Y, no Z |
| Зеркальная пара с выдуманной половиной | I'm not saying, To be clear, Don't get me wrong, This is not to say, A tempting approach would be, You might think… but |
| Парцелляция и ударная концовка | That is the real win. Read that again. Let that sink in. every. single. day. |
| Рубленые фразы | Present tense. Subject, verb, object. No metaphors.; Fast. Simple. Reliable. |
| Прочистка горла | Let's dive in, let's break this down, here's what you need to know, without further ado, Here's the thing, The thing is, In today's fast-paced world, In the ever-evolving landscape of, When it comes to, The best part:, The detail that makes it work:, The solution is simple:; heads up, quick note, now let's look at, Buckle up, Here's what that means in practice, Spoiler:, Plot twist:, And here's the kicker:, In plain English: |
| Текст рассказывает о своём устройстве | As we explore, As we delve into |
| Пересказ вместо вывода в конце раздела | Overall, In conclusion, In summary; To sum up, All in all, Ultimately, Bottom line:, In short:, заголовки Final thoughts, Wrapping up, Key takeaways |
| Механический переход | Additionally, Moreover, Furthermore |
| Подсказка, что чувствовать | It's important to note, It's worth noting, Notably; it should be noted that, keep in mind that, importantly |
| Объявленная откровенность | Honestly? Look, Let's be honest, Real talk; honestly, genuinely, frankly, truly внутри фразы |
| Заявленная эмоция | I recently had the pleasure |
| Фраза-озарение | the real question is, at its core, what really matters, fundamentally, the heart of the matter, What nobody tells you, The part everyone misses, What most people get wrong; in reality, X is the Y of Z |
| Инфляция значимости | stands as a testament, a pivotal moment, plays a key role, marking the, reflects a broader, enduring legacy, setting the stage for, indelible mark, Despite these challenges… continues to thrive, paving the way, serves as a powerful reminder, a poignant reminder; underscores its importance, evolving landscape, cannot be overstated, cementing its status as, solidifying its role as |
| Деепричастный хвост с выводом | highlighting, underscoring, emphasizing, ensuring, reflecting, symbolizing, contributing to, fostering, showcasing |
| Связь без названного отношения | associated with, in connection with, connected to, linked to, tied to |
| Глагол вместо связки | serves as, stands as, functions as, represents, boasts, features, offers; operates as, acts as, holds the distinction of being |
| Оценочное прилагательное вместо факта | vibrant, rich, profound, nestled, in the heart of, groundbreaking, renowned, breathtaking, must-visit, stunning; cutting-edge, state-of-the-art, diverse array, seamlessly integrates |
| Расплывчатый авторитет | experts argue, observers have cited, industry reports, some critics; analysts suggest, widely regarded as, is described as |
| Имена для веса | featured in [список изданий], active social media presence, over N followers |
| Стек оговорок | could potentially, might arguably, it's also possible; to be fair, in some cases it may, seem to с глаголом |
| Общая концовка | the future looks bright, exciting times ahead, a step in the right direction |
| Реплика чат-бота | Great question! Certainly! Sure! Here's…, I'd be happy to, You're absolutely right, I hope this helps, Would you like…, let me know; Of course!, Want me to…?, Should I continue? |
| Следы генерации | as of my last training update, while specific details are limited, not widely documented, As an AI language model, I do not have personal; based on available information, not publicly available, in the provided search results, turn0search0, oaicite, [cite: N], utm_source=openai, referrer=grok.com |
| Корпоративное клише | game-changer, take X to the next level, paradigm shift, poised to reshape |
| Ложный диапазон | from startups to enterprises |
| Мнимая широта аудитории | Whether you're a beginner or a seasoned pro |
| Слово в переносном смысле | the language of, the currency of, earns its keep |
| Ротация синонимов | notes, observes, remarks, muses по кругу вместо повторяющегося says |
| Выдуманная конкретика | likely grew up, it is believed that, Emily и Sarah в выдуманных героях и цитатах |
| Заглавные в каждом слове заголовка | Title Case в заголовках |
| Пассив по привычке | проверка «by monkeys»: если после глагола можно дописать by monkeys, предложение в пассиве |

## Открытые вопросы

- **Сколько тире.** humanizer убирает все длинные и короткие тире, если их нет в образце автора. В `nickture-text-ru` одно тире или двоеточие на предложение, потому что в русском тире ставится по грамматике. В английском тире грамматикой не требуется, и норму нужно выбрать заново. По подсчёту Pangram на 10 тысяч слов люди ставят 2 длинных тире, модели в среднем 17: OpenAI 45, Anthropic 32, Gemini 3 Pro 3. no-ai-slop советует в коротком тексте ни одного длинного тире, в длинном одно-два. По замеру sepia на 1000 слов GPT-4.1 ставит 10,62 длинного тире, Claude Opus 4.6 9,09, GPT-5.4 1,43, люди в среднем 3,23. По quiron длинное тире есть в 27% человеческих постов на dev.to. По замеру yomiyasu на 70 тысячах статей Qiita после распространения ИИ длинных тире на 1000 знаков стало в 10 раз больше, с 0,043 до 0,426, хотя японскому тексту тире не свойственно. `[wiki-ai, pangram, no-ai-slop, sepia, quiron, yomiyasu]`
- **Какие кавычки.** По типографике английские кавычки фигурные. humanizer считает их слабым признаком, если автор пишет прямыми. Норма выбирается вместе с остальной английской типографикой. unslop считает следом чат-бота смесь фигурных и прямых кавычек в одном тексте. `[wiki-ai, unslop]`
