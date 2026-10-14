// ponytail: a copy of nickture/nickture-website src/lib/copy.ts, where its tests live.
// Keep the two in step; move them into a shared package if they start to drift.

/**
 * Ported from truffle's App\Support\Copy::text, plus the last-word rule.
 *
 * Typography forbids leaving at a line end what is read together with the next
 * word: a preposition, a conjunction, a number before what it counts. A
 * non-breaking space is invisible, so any edit of a content file silently
 * drops it. Content files keep plain spaces, and the spaces are bound here,
 * on the way to the page.
 */

/**
 * Words that do not let go of the next one. Anything shorter than three
 * letters is a preposition, conjunction or particle in both languages; of the
 * three-letter words only the function words are listed, or «год» would stick
 * to its neighbour. Longer ones are prepositions named one by one: «вместо» at
 * a line end hangs just like «в», and the length of a word says nothing about it.
 * An ampersand is a conjunction too.
 */
const SHORT_WORDS =
	String.raw`\p{L}{1,2}|&|для|или|как|что|при|под|над|про|без|the|and|for|but|not|out|per|via|off|its` +
	String.raw`|вместо|внутри|вокруг|вдоль|возле|кроме|между|мимо|около|перед|после|против|сквозь|среди|через` +
	String.raw`|about|across|after|among|before|between|from|instead|into|onto|over|through|under|upon|with|without`;

const NBSP = '\u00A0';

// A preposition, conjunction or particle stays with what follows it.
const shortWord = new RegExp(String.raw`(?<=^|[\s(«"„])(${SHORT_WORDS})\s+`, 'giu');
// A number, «28+» included, stays with what it counts and with its sign.
const number = /(?<=\d\+?)\s+(?=[\p{L}\d%№$€₽])/gu;
// A dash stays on the line of the word before it.
const dash = /\s+(?=[—–])/gu;
// The last word of a block never stays alone on its line. After a dash the
// space stays plain: the dash holds on to the word before it, not after it.
// ponytail: binds the last two words whatever their length; a pair too wide
// for a 280px screen would overflow, check the length first if that happens.
const lastWord = /(?<![—–])\s+(?=\S+$)/u;

export const bind = (text: string): string =>
	text.replace(shortWord, `$1${NBSP}`).replace(number, NBSP).replace(dash, NBSP).replace(lastWord, NBSP);

/**
 * bind() for every run of text in an HTML string, rendered Markdown included.
 * Tags and attributes stay untouched, and so does code: a non-breaking space
 * in a copied command breaks it.
 */
export const bindHtml = (html: string): string =>
	html.replace(/<(code|pre)\b[\s\S]*?<\/\1>|(?<=^|>)[^<]+/g, (match, code) => (code ? match : bind(match)));
