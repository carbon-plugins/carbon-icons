/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
		"./node_modules/@carbon/components/dist/**/*.{js,jsx,ts,tsx}",
    "./src/admin/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
			colors: {
				'blue': {
					50: "#F1F5FD",
					100: "#DFE9FA",
					200: "#9EC0F2",
					300: "#709FEA",
					400: "#4374E0",
					500: "#3A60D6",
					600: "#314EC4",
					700: "#2E409F",
					800: "#2A3A7E",
					900: "#151826",
				},
				"black": "#0A0D19",
				'grey': {
					900: "#151826",
				},
				"lightGrey": "#E4E5E9",
				"mediumGrey": "#A1A3AA",
				"grey": "#3E3E3E",
				"darkGrey": "#21242C",
				"darkGrey2": "#252A3E",
			}
		},
  },
  plugins: [

  ]
}
