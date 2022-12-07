import { defineConfig } from 'windicss/helpers'
import Color from 'color'
import formsPlugin from 'windicss/plugin/forms'
import typographyPlugin from 'windicss/plugin/typography'
import { processExpression } from '@vue/compiler-core'

const COLORS = () => ({
    'black': Color.rgb(35, 31, 32).hex(),
    'dark-slate-blue': Color.rgb(66, 104, 141).hex(),
    'dim-gray': Color.rgb(114, 114, 114).hex(),
    'gainsboro': Color.rgb(217, 225, 232).hex(),
	'midnight-blue': Color.rgb(0, 51, 102).hex(),
    'silver': Color.rgb(196, 196, 196).hex(),
    'white': Color.rgb(255, 255, 255).hex(),
    'midnight-blue-2': Color.rgb(2, 64, 125).hex(),
    'black-2': Color.rgb(0, 0, 0).hex(),
    'black-primary': Color.rgb(35, 35, 35).hex(),
    'black-secondary': Color.rgb(57, 64, 64).hex(),
    'fire-brick': Color.rgb(205, 24, 21).hex(),
    // 'gainsboro': Color.rgb(229, 229, 229).hex(),
    'grayscale-off-black': Color.rgb(20, 20, 43).hex(),
    'grayscale-off-white': Color.rgb(252, 252, 252).hex(),
    'grey-secondary': Color.rgb(157, 173, 173).hex(),
    'primary-default': Color.rgb(255, 0, 0).hex(),
    'transparent-black': Color.rgb(0, 0, 0).alpha(0.04).hex(),
    'transparent-black-2': Color.rgb(0, 0, 0).alpha(0.06).hex(),
    'transparent-black-3': Color.rgb(0, 0, 0).alpha(0.25).hex(),
    'transparent-silver': Color.rgb(196, 196, 196).alpha(0.25).hex(),
    'transparent-white-1': Color.rgb(255, 255, 255).alpha(0.4).hex(),
    'transparent-white-smoke': Color.rgb(239, 240, 246).alpha(.1).hex(),
    'white-smoke': Color.rgb(241, 241, 241).hex(),
    'white-smoke-1': Color.rgb(250, 243, 243).hex(),
})

const SCREENS = () => ({
	mc: { min: '250px', max: '360px'},
	xs: { max: '530px'},
	sm: { max: '640px'},
	md: { max: '768px'},
	lg: { max: '1024px'},
	xl: { max: '1280px'},
  '2xl':{ max: '1536px'},
	hd: { max: '1920px'},
  '2k': { max: '2048px'},
  '4k': { max: '3840px'},
})

export default defineConfig({
	preflight: true,
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	alias: {
		'hstack': 'flex flex-row',
		'vstack': 'flex flex-col',
	},
	theme: {
		screens: {
			...SCREENS()
		},
		extend: {
			fontFamily: {
				'abz': ['ABeeZee', 'sans-serif'],
				'acme': ['Acme', 'sans-serif'],
				'dsans': ['"DM Sans"', 'sans-serif'],
				'dserif': ['"DM Serif Text"', 'serif'],
				'hanu': ['Hanuman', 'serif'],
				'inter': ['Inter', 'sans-serif'],
				'roboto': ['Roboto', 'sans-serif'],
			},
			fontSize:{},
			colors: {
				...COLORS(),
			},
			transitionProperty: {
				width: 'width',
				// height: 'height',
				// spacing: 'margin, padding',
			},
			gridTemplateRows: {
				base: 'auto max-content auto',
			},
			gridRowStart: {
				last: '-1',
			},
		},
		backgroundColor: theme => ({
			...theme('colors'),
		}),
	},
	extract: {
		include: ['./src/**/*.{vue,html,jsx,tsx,astro}'],
		exclude: ['node_modules', '.git'],
	},
	plugins: [ 
		formsPlugin, 
		typographyPlugin,
		require('windicss/plugin/aspect-ratio'),
	 ],
})
