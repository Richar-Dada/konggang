/**
 * @author by Zicong
 * @date 2018-03-01
 * @description 校验用户名
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

/**
 * @author by Zicong
 * @date 2018-03-02
 * @description 校验身份证
 * @param {*} value
 */
export function checkUserID (value) {
  /* eslint-disable */
  const regStr = /\d{17}[\d|x]|\d{15}/
  if (!regStr.test(value)) {
    return {
      valid: true,
      msg: ''
    }
  } else {
    return {
      valid: false,
      msg: '身份证号不正确'
    }
  }
}

