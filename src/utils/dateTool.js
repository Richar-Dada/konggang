const holiday = [
  '4月1日', '4月5日', '4月6日', '4月7日', '4月14日', '4月15日', '4月21日', '4月22日', '4月29日', '4月30日',
  '5月1日', '5月5日', '5月6日', '5月12日', '5月13日', '5月19日', '5月20日', '5月26日', '5月27日',
  '6月2日', '6月3日', '6月9日', '6月10日', '6月16日', '6月17日', '6月18日', '6月23日', '6月24日', '6月30日',
  '7月1日', '7月2日', '7月3日', '7月4日', '7月5日', '7月7日', '7月8日', '7月14日', '7月15日', '7月21日', '7月22日', '7月28日', '7月29日',
  '8月4日', '8月5日', '8月11日', '8月12日', '8月18日', '8月19日', '8月25日', '8月26日',
  '9月1日', '9月2日', '9月8日', '9月9日', '9月15日', '9月16日', '9月22日', '9月23日', '9月24日',
  '10月1日', '10月2日', '10月3日', '10月4日', '10月5日', '10月6日', '10月7日', '10月13日', '10月14日', '10月20日', '10月21日', '10月27日', '10月28日',
  '11月3日', '11月4日', '11月10日', '11月11日', '11月17日', '11月18日', '11月24日', '11月25日',
  '12月1日', '12月2日', '12月8日', '12月9日', '12月15日', '12月16日', '12月22日', '12月23日', '12月29日', '12月30日'
]

const qianchuholiday = [
  '4月1日', '4月5日', '4月6日', '4月7日', '4月14日', '4月15日', '4月21日', '4月22日', '4月29日', '4月30日',
  '5月1日', '5月5日', '5月6日', '5月12日', '5月13日', '5月19日', '5月20日', '5月26日', '5月27日',
  '6月2日', '6月3日', '6月9日', '6月10日', '6月16日', '6月17日', '6月18日', '6月23日', '6月24日', '6月30日',
  '7月1日', '7月2日', '7月3日', '7月4日', '7月7日', '7月8日', '7月14日', '7月15日', '7月21日', '7月22日', '7月28日', '7月29日',
  '8月4日', '8月5日', '8月11日', '8月12日', '8月18日', '8月19日', '8月25日', '8月26日',
  '9月1日', '9月2日', '9月8日', '9月9日', '9月15日', '9月16日', '9月22日', '9月23日', '9月24日',
  '10月1日', '10月2日', '10月3日', '10月4日', '10月5日', '10月6日', '10月7日', '10月13日', '10月14日', '10月20日', '10月21日', '10月27日', '10月28日',
  '11月3日', '11月4日', '11月10日', '11月11日', '11月17日', '11月18日', '11月24日', '11月25日',
  '12月1日', '12月2日', '12月8日', '12月9日', '12月15日', '12月16日', '12月22日', '12月23日', '12月29日', '12月30日'
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
      if (date === 29) {
        date = 1
        flag = true
      }
    } else if (year % 4 !== 0 && m === 2) {
      m = m + Math.floor((date / 30))
      if (date === 30) {
        date = 1
        flag = true
      }
    } else if (m === 4 || m === 6 || m === 9 || m === 11) {
      m = m + Math.floor((date / 31))
      if (date === 31) {
        date = 1
        flag = true
      }
    } else {
      m = m + Math.floor((date / 32))
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
      if (date === 29) {
        date = 1
        flag = true
      }
    } else if (year % 4 !== 0 && m === 2) {
      m = m + Math.floor((date / 30))
      if (date === 30) {
        date = 1
        flag = true
      }
    } else if (m === 4 || m === 6 || m === 9 || m === 11) {
      m = m + Math.floor((date / 31))
      if (date === 31) {
        date = 1
        flag = true
      }
    } else {
      m = m + Math.floor((date / 32))
      if (date === 32) {
        date = 1
        flag = true
      }
    }

    let dateStr = m + '月' + date + '日'
    if (qianchuholiday.indexOf(dateStr) === -1) {
      var tem = {
        date: dateStr,
        fullDate: year + '年' + dateStr
      }
      if (i > 1) result.push(tem)
      i++
    }
  }
  return result
}
