import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Served by nickture.com's nginx at /skills/, straight from dist/skills.
export default defineConfig({
	site: 'https://nickture.com',
	base: '/skills',
	outDir: './dist/skills',
	trailingSlash: 'always',
	// nickture.com's dev server proxies /skills here.
	server: { port: 4322 },
	markdown: {
		// The rules already use «», real dashes and ellipses; quotes in examples stay as written.
		smartypants: false,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
