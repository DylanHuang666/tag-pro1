module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //添加自定义规则
    'prettier/prettier': [
      //eslint校验不成功后，error或2则报错，warn或1则警告，off或0则无显示
      'error',
      {
        semi: false, //结尾不用分号
        singleQuote: true, //用单引号
        printWidth: 160
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
