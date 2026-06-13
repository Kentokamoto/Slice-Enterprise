import js from '@eslint/js';
import { includeIgnoreFile } from '@eslint/compat';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default ts.config(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	prettier,
	{
		plugins: {
			'react-hooks': reactHooks
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'no-undef': 'off'
		},
		languageOptions: {
			globals: { ...globals.browser, ...globals.node }
		}
	}
);
