module.exports = {
  extends: ['@commitlint/config-conventional', '@commitlint/config-nx-scopes'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert']],
    'header-max-length': [1, 'always', 120],
    'body-max-length': [0, 'always', 120],
    'body-max-line-length': [0, 'always', 120],
  },
};
