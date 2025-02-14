import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import astroParser from 'astro-eslint-parser';
import astroPlugin from 'eslint-plugin-astro';
import solidPlugin from 'eslint-plugin-solid';
import tailwindPlugin from 'eslint-plugin-tailwindcss';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,astro}'],
    ignores: ['node_modules/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true,
        node: true,
      },
      parser: tsparser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      tailwindcss: tailwindPlugin,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs['recommended-type-checked'].rules,
      ...tseslint.configs['stylistic-type-checked'].rules,
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false,
        },
      ],
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsparser,
        extraFileExtensions: ['.astro'],
      },
    },
    plugins: {
      astro: astroPlugin,
    },
    rules: {
      ...astroPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unsafe-return': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      solid: solidPlugin,
    },
    rules: {
      ...solidPlugin.configs.recommended.rules,
    },
  },
];
