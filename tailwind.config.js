module.exports = {
	theme: {
		screens: {
	      'sm': '576px',
	      'md': '768px',
	      'lg': '992px',
	      'xl': '1200px'
	    }
	},
	variants: {},
	purge: [
	  	'./resources/js/app.js',
	  	'./resources/**/*.vue',
	  	'./resources/views/**/*.php',
	  	'./app/**/*.php'
	],
	plugins: [
	
	],
}