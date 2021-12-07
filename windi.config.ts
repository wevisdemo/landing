import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	theme: {
		fontFamily: {
			sans: ['Anuphan', 'sans-serif'],
			serif: ['Kondolar Thai', 'serif']
		}
	},
	shortcuts: {
		'typo-h1': 'font-serif text-28px md:text-36px',
		'typo-h2': 'font-serif text-21px md:text-24px',
		'typo-p1': 'font-sans text-16px md:text-18px',
		'typo-p2': 'font-sans text-12px md:text-14px'
	}
});
