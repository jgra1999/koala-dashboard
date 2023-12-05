/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				center: true
			},
			colors: {
				primary: '#F57C00',
				secondary: '#6c02be'
			}
		}
	},
	plugins: []
}
