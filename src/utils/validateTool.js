/**
 * author by Zicong
 * date 2018-03-01
 * func 校验用户名
 * @param {*} value
 */
export function checkUsername (value) {
  /* eslint-disable */
  const regStr = /[@#,.\?\'\"\!\/\$%\^&\*]+/g
  if (!regStr.test(value)) {
    return {
      valid: true,
      msg: ''
    }
  } else {
    return {
      valid: false,
      msg: '用户名不能使用符号'
    }
  }
}
