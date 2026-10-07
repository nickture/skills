#!/usr/bin/env bash
# Поиск по коду из раздела «Поиск по коду».
# Запуск: bash <папка скилла>/scripts/search.sh [ПАПКА ПРОЕКТА], без папки поиск идёт в текущей.
# Строка вывода: правило | файл:строка:найденное. Совпадение ещё не нарушение,
# каждое сверяется с правилом, названным в начале строки.

dir=${1:-.}
g() { grep -rnE --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=dist -- "$2" "$dir" | sed "s#^#$1 | #"; }

g 'Видимый фокус' 'outline: ?(none|0)([; }]|$)|outline-none'
g 'Переход перечисляет свойства' 'transition(-property)?: ?all|transition-all'
g 'Жест масштаба не запрещён' 'user-scalable=no|maximum-scale=1'
# блок скрыт до появления при прокрутке
g 'Содержимое видно без анимации, Анимация на каждом блоке' 'opacity: ?0([; }]|$)|IntersectionObserver'
g 'Моноширинный шрифт вне кода' 'font-mono|monospace'
