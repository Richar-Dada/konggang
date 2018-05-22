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
  const regStr = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
  if (regStr.test(value)) {
    return {
      valid: true,
      msg: ''
    }
  } else {
    return {
      valid: false,
      msg: '请输入正确车牌号'
    }
  }
}

/**
 * @author by Zicong
 * @date 2018-05-22
 * @description 只能输入A-Z0-6
 * @param {string} 
 */
export function checkEngineNumber (value) {
  const regStr = /\w{4}/
  if (regStr.test(value)) {
    return {
      valid: true,
      msg: ''
    }
  } else {
    return {
      valid: false,
      msg: '只能输入字母和数字'
    }
  }
}

/**
 * @author by Zicong
 * @date 2018-05-22
 * @description 只能输入A-Z0-6
 * @param {string} 
 */
export function checkCarNumber (value) {
  const regStr = /\w{6}/
  if (regStr.test(value)) {
    return {
      valid: true,
      msg: ''
    }
  } else {
    return {
      valid: false,
      msg: '只能输入字母和数字'
    }
  }
}