const holiday = [
  '1月5日', '1月6日', '1月12日', '1月13日', '1月19日', '1月20日', '1月26日', '1月27日',
  '2月4日', '2月5日', '2月6日', '2月7日', '2月8日', '2月9日', '2月10日', '2月16日', '2月17日', '2月23日', '2月24日',
  '3月2日', '3月3日', '3月9日', '3月10日', '3月16日', '3月17日', '3月23日', '3月24日', '3月30日', '3月31日',
  '4月5日', '4月6日', '4月7日', '4月13日', '4月14日', '4月20日', '4月21日', '4月27日', '4月28日',
  '5月1日', '5月4日', '5月5日', '5月11日', '5月12日', '5月18日', '5月19日', '5月25日', '5月26日',
  '6月1日', '6月2日', '6月7日', '6月8日', '6月9日', '6月15日', '6月16日', '6月22日', '6月23日', '6月29日', '6月30日',
  '7月6日', '7月7日', '7月13日', '7月14日', '7月20日', '7月21日', '7月27日', '7月28日',
  '8月3日', '8月4日', '8月10日', '8月11日', '8月17日', '8月18日', '8月24日', '8月25日', '8月31日',
  '9月1日', '9月7日', '9月8日', '9月13日', '9月14日', '9月15日', '9月21日', '9月22日', '9月28日',
  '10月1日', '10月2日', '10月3日', '10月4日', '10月5日', '10月6日', '10月7日', '10月12日', '10月13日', '10月19日', '10月20日', '10月26日', '10月27日',
  '11月2日', '11月3日', '11月9日', '11月10日', '11月16日', '11月17日', '11月23日', '11月24日', '11月30日',
  '12月1日', '12月2日', '12月8日', '12月9日', '12月15日', '12月16日', '12月22日', '12月23日', '12月30日', '12月31日', '1月1日'
]

const qianchuholiday = [
  '1月5日', '1月6日', '1月12日', '1月13日', '1月19日', '1月20日', '1月26日', '1月27日',
  '2月4日', '2月5日', '2月6日', '2月7日', '2月8日', '2月9日', '2月10日', '2月16日', '2月17日', '2月23日', '2月24日',
  '3月2日', '3月3日', '3月9日', '3月10日', '3月16日', '3月17日', '3月23日', '3月24日', '3月30日', '3月31日',
  '4月5日', '4月6日', '4月7日', '4月13日', '4月14日', '4月20日', '4月21日', '4月27日', '4月28日',
  '5月1日', '5月4日', '5月5日', '5月11日', '5月12日', '5月18日', '5月19日', '5月25日', '5月26日',
  '6月1日', '6月2日', '6月7日', '6月8日', '6月9日', '6月15日', '6月16日', '6月22日', '6月23日', '6月29日', '6月30日',
  '7月6日', '7月7日', '7月13日', '7月14日', '7月20日', '7月21日', '7月27日', '7月28日',
  '8月3日', '8月4日', '8月10日', '8月11日', '8月17日', '8月18日', '8月24日', '8月25日', '8月31日',
  '9月1日', '9月7日', '9月8日', '9月13日', '9月14日', '9月15日', '9月21日', '9月22日', '9月28日',
  '10月1日', '10月2日', '10月3日', '10月4日', '10月5日', '10月6日', '10月7日', '10月12日', '10月13日', '10月19日', '10月20日', '10月26日', '10月27日',
  '11月2日', '11月3日', '11月9日', '11月10日', '11月16日', '11月17日', '11月23日', '11月24日', '11月30日',
  '12月1日', '12月2日', '12月8日', '12月9日', '12月15日', '12月16日', '12月22日', '12月23日', '12月30日', '12月31日', '1月1日'
]

export function getSchedulDateGuohu () {
  let d = new Date()
  let year = d.getFullYear()
  let m = d.getMonth() + 1
  let date = d.getDate()
  let i = 0
  let result = []
  let flag = false
  while (i < 7) {
    if (!flag) {
      date = date + 1
    } else {
      flag = !flag
    }

    if (year % 4 === 0 && m === 2) {
      m = m + Math.floor((date / 29))
      if (m >= 13) { m = 1 }
      if (date === 1) { date = 2 }
      if (date === 29) {
        date = 1
        flag = true
      }
    } else if (year % 4 !== 0 && m === 2) {
      m = m + Math.floor((date / 30))
      if (m >= 13) { m = 1 }
      if (date === 1) { date = 2 }
      if (date === 30) {
        date = 1
        flag = true
      }
    } else if (m === 4 || m === 6 || m === 9 || m === 11) {
      if (date === 1) { date = 2 }
      m = m + Math.floor((date / 31))
      if (m >= 13) { m = 1 }
      if (date === 31) {
        date = 1
        flag = true
      }
    } else {
      // 12月 1月
      if (date === 1) { date = 2 }
      m = m + Math.floor((date / 32))
      if (m >= 13) { m = 1 }
      if (date === 32) {
        date = 1
        flag = true
      }
    }

    let dateStr = m + '月' + date + '日'
    if (holiday.indexOf(dateStr) === -1) {
      var tem = {
        date: dateStr,
        fullDate: year + '年' + dateStr
      }
      result.push(tem)
      i++
    }
    console.log(dateStr)
  }
  return result
}

export function getSchedulDateQianchu () {
  let d = new Date()
  let year = d.getFullYear()
  let m = d.getMonth() + 1
  let date = d.getDate()
  let i = 0
  let result = []
  let flag = false

  while (i < 9) {
    if (!flag) {
      date = date + 1
    } else {
      flag = !flag
    }

    if (year % 4 === 0 && m === 2) {
      m = m + Math.floor((date / 29))
      if (m >= 13) { m = 1 }
      if (date === 1) { date = 2 }
      if (date === 29) {
        date = 1
        flag = true
      }
    } else if (year % 4 !== 0 && m === 2) {
      m = m + Math.floor((date / 30))
      if (m >= 13) { m = 1 }
      if (date === 1) { date = 2 }
      if (date === 30) {
        date = 1
        flag = true
      }
    } else if (m === 4 || m === 6 || m === 9 || m === 11) {
      if (date === 1) { date = 2 }
      m = m + Math.floor((date / 31))
      if (m >= 13) { m = 1 }
      if (date === 31) {
        date = 1
        flag = true
      }
    } else {
      if (date === 1) { date = 2 }
      m = m + Math.floor((date / 32))
      if (m >= 13) { m = 1 }
      if (date === 32) {
        date = 1
        flag = true
      }
    }

    let dateStr = m + '月' + date + '日'
    console.log(dateStr)
    if (qianchuholiday.indexOf(dateStr) === -1) {
      var tem = {
        date: dateStr,
        fullDate: year + '年' + dateStr
      }
      if (i > 1) result.push(tem)
      i++
    }
  }
  console.log(result)
  return result
}
