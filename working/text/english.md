# Английские правила текста

Сюда собирается то, что верно только для английского текста и поэтому не входит в [скилл `nickture-text-ru`](../../skills/nickture-text-ru/SKILL.md). Из этого файла вырастут разделы английской версии скилла. Правила пишутся в формате скилла, примеры в них английские. Ключи источников расшифрованы в таблице «Источники» [скилла `nickture-text-ru`](../../skills/nickture-text-ru/sources.md).

## Правила без русской пары

- **Слова, которые модель пишет чаще людей.** Модели ставят эти слова намного чаще людей, особенно по нескольку в одном абзаце: additionally, align with, bolstered, comprehensive, crucial, delve, elevate, embark, endeavor, enduring, enhance, fostering, garner, highlight (глагол), interplay, intricate, journey (отвлечённо), key (прилагательное), landscape (отвлечённо), meticulous, navigate (отвлечённо), notably, pivotal, poignant, quietly, resilience, robust (в переносном смысле), seamless, seamlessly, showcase, tapestry (отвлечённо), testament, transformative, underscore (глагол), unleash, valuable, vibrant. Одно слово из списка признаком не считается, несколько в одном абзаце считаются. Слово меняется на простое или убирается вместе с оборотом. Список устаревает с каждой новой моделью, поэтому пополняется по разборам. `[wiki-ai, pangram]`
  > Плохо: «Additionally, an enduring testament to Italian influence is the widespread adoption of pasta in the local culinary landscape»
  >
  > Хорошо: «Pasta dishes, introduced during Italian colonization, remain common»
- **Дефис в составном определении только перед существительным.** Составное определение пишется через дефис перед существительным и раздельно после него. Модель ставит дефис везде. Признак слабый: он считается, только когда рядом есть другие. `[wiki-ai]`
  > Плохо: «The team is cross-functional and the report is high-quality»
  >
  > Хорошо: «a cross-functional team», «The report is high quality»
- **Уровень чтения продающего текста.** Продающий текст читается на уровне 5–8 класса американской школы: каждое предложение с первого раза понимает двенадцатилетний. Уровень оценивается формулой удобочитаемости, и худшее предложение переписывается простыми словами. Шкала классов откалибрована для английского, поэтому правило лежит здесь. `[copy-machine]`
  > Плохо: «Our platform leverages advanced analytics to facilitate data-driven decision-making across organizational stakeholders»
  >
  > Хорошо: «The report shows which campaigns brought sales, so the team knows where to spend next month»

## Английские маркеры правил `nickture-text-ru`

Правила ниже уже есть в [скилле `nickture-text-ru`](../../skills/nickture-text-ru/SKILL.md), здесь только английские обороты, по которым их искать. `[wiki-ai, pangram, russell, stockton, no-ai-slop]`

| Правило | Английские маркеры |
| --- | --- |
| «Не X, а Y» | not X but Y; not just, not only, not merely X, but Y; it's not X, it's Y; X rather than Y |
| «Без» вместо факта | no more X, say goodbye to X, without the hassle, hassle-free, no guesswork, no fluff, zero friction, хвост «, no guessing»; законно no credit card required, no setup fee |
| Цепочка отрицаний | No X. No Y. No Z.; no X, no Y, no Z |
| Зеркальная пара с выдуманной половиной | I'm not saying, To be clear, Don't get me wrong, This is not to say, A tempting approach would be, You might think… but |
| Парцелляция и ударная концовка | That is the real win. Read that again. Let that sink in. every. single. day. |
| Прочистка горла | Let's dive in, let's break this down, here's what you need to know, without further ado, Here's the thing, The thing is, In today's fast-paced world, In the ever-evolving landscape of, When it comes to, The best part:, The detail that makes it work:, The solution is simple: |
| Текст рассказывает о своём устройстве | As we explore, As we delve into |
| Пересказ вместо вывода в конце раздела | Overall, In conclusion, In summary |
| Механический переход | Additionally, Moreover, Furthermore |
| Подсказка, что чувствовать | It's important to note, It's worth noting, Notably |
| Объявленная откровенность | Honestly? Look, Let's be honest, Real talk |
| Заявленная эмоция | I recently had the pleasure |
| Фраза-озарение | the real question is, at its core, what really matters, fundamentally, the heart of the matter, What nobody tells you, The part everyone misses, What most people get wrong |
| Инфляция значимости | stands as a testament, a pivotal moment, plays a key role, marking the, reflects a broader, enduring legacy, setting the stage for, indelible mark, Despite these challenges… continues to thrive, paving the way, serves as a powerful reminder, a poignant reminder |
| Деепричастный хвост с выводом | highlighting, underscoring, emphasizing, ensuring, reflecting, symbolizing, contributing to, fostering, showcasing |
| Связь без названного отношения | associated with, in connection with, connected to, linked to, tied to |
| Глагол вместо связки | serves as, stands as, functions as, represents, boasts, features, offers |
| Оценочное прилагательное вместо факта | vibrant, rich, profound, nestled, in the heart of, groundbreaking, renowned, breathtaking, must-visit, stunning |
| Расплывчатый авторитет | experts argue, observers have cited, industry reports, some critics |
| Имена для веса | featured in [список изданий], active social media presence, over N followers |
| Стек оговорок | could potentially, might arguably, it's also possible |
| Общая концовка | the future looks bright, exciting times ahead, a step in the right direction |
| Реплика чат-бота | Great question! Certainly! Sure! Here's…, I'd be happy to, You're absolutely right, I hope this helps, Would you like…, let me know |
| Следы генерации | as of my last training update, while specific details are limited, not widely documented, As an AI language model, I do not have personal |
| Выдуманная конкретика | likely grew up, it is believed that, Emily и Sarah в выдуманных героях и цитатах |
| Заглавные в каждом слове заголовка | Title Case в заголовках |

## Открытые вопросы

- **Сколько тире.** humanizer убирает все длинные и короткие тире, если их нет в образце автора. В `nickture-text-ru` одно тире или двоеточие на предложение, потому что в русском тире ставится по грамматике. В английском тире грамматикой не требуется, и норму нужно выбрать заново. По подсчёту Pangram на 10 тысяч слов люди ставят 2 длинных тире, модели в среднем 17: OpenAI 45, Anthropic 32, Gemini 3 Pro 3. no-ai-slop советует в коротком тексте ни одного длинного тире, в длинном одно-два. `[wiki-ai, pangram, no-ai-slop]`
- **Какие кавычки.** По типографике английские кавычки фигурные. humanizer считает их слабым признаком, если автор пишет прямыми. Норма выбирается вместе с остальной английской типографикой. `[wiki-ai]`
