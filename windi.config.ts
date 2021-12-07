import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	theme: {
		fontFamily: {
			sans: ['Anuphan', 'sans-serif'],
			serif: ['Kondolar Thai', 'serif']
		},
		colors: {
			black: 'black',
			white: 'white',
			ultramarine: '#3904E9',
			mint: '#A5EBD7'
		}
	},
	shortcuts: {
		'typo-h1': 'font-serif text-28px md:text-36px !leading-[140%]',
		'typo-h2': 'font-serif text-21px md:text-24px !leading-[140%]',
		'typo-p1': 'font-sans text-16px md:text-18px !leading-[140%]',
		'typo-p2': 'font-sans text-12px md:text-14px !leading-[140%]'
	}
});
