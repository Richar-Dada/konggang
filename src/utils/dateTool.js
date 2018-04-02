import { getHoliday } from '../service'
const moment = require('moment')
moment.locale('zh-cn')

export function getSchedulDate () {
  let i = 0
  let dayCalc = 1
  let result = []
  while (i < 7) {
    if (moment().add(dayCalc, 'days').format('dddd') !== '星期六' && moment().add(dayCalc, 'days').format('dddd') !== '星期日') {
      var tem = {
        date: moment().add(dayCalc, 'days').format('MMM Do'),
        fullDate: moment().add(dayCalc, 'days').format('LL')
      }
      result.push(tem)
      i++
    }
    dayCalc++
  }
  return result
}

export function holidayCache () {
  let holidayData = localStorage.getItem('holidayData')
  if (!holidayData) {
    getHoliday(new Date().getFullYear())
      .then((res) => {
        console.log(res)
      })
  }
}
