module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: ['plugin:@typescript-eslint/recommended'],
   	rules: {
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/semi': ['off'],
		'semi': ['off'],
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/member-delimiter-style": "off"
	}
}
