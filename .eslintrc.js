const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react', 'jest'],

  rules: {
    'react/react-in-jsx-scope': RULES.OFF,
    'react/prop-types': RULES.OFF,
    'react/jsx-uses-react': RULES.ERROR,
    'react/jsx-uses-vars': RULES.ERROR,
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false
      }
    ]
  },
  settings: {
    react: {
      version: 'detectect'
    }
  }
}
