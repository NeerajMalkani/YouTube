module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        printWidth: 400,
      },
    ],
    'max-len': [1, {code: 400}],
  },
};
