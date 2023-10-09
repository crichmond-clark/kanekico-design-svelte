/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#641ae6',
					secondary: '#d926a9',
					accent: '#1fb2a6',
					neutral: '#e5e7eb',
					'base-100': '#f3f4f6',
					info: '#3abff8',
					success: '#36d399',
					warning: '#fbbd23',
					error: '#f87272'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
