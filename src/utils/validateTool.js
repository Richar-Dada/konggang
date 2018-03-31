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
  const regStr = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  if (regStr.test(value)) {
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

/**
 * @author by Zicong
 * @date 2018-03-02
 * @description 校验身份证
 * @param {*} value
 */
export function checkPassword (value) {
  /* eslint-disable */
  const regStr = /^[A-Za-z0-9]+$/
  if (regStr.test(value)) {
    return {
      valid: true,
      msg: ''
    }
  } else {
    return {
      valid: false,
      msg: '密码只支持英文和数字'
    }
  }
}

/**
 * @author by Zicong
 * @date 2018-03-02
 * @description 校验身份证
 * @param {*} value
 */
export function checkPhone (value) {
  /* eslint-disable */
  const regStr = /^[1][3,4,5,7,8][0-9]{9}$/
  if (regStr.test(value)) {
    return {
      valid: true,
      msg: ''
    }
  } else {
    return {
      valid: false,
      msg: '请输入正确手机号码'
    }
  }
}

/**
 * @author by Zicong
 * @date 2018-03-31
 * @description 校验车牌
 * @param {string} 
 */
export function checkCarId (value) {
  if (value.length > 2) {
    return {
      valid: true,
      msg: ''
    }
  } else {
    return {
      valid: false,
      msg: '请输入车牌号'
    }
  }
}