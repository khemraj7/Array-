function timeConversion(s) {
  const isPM = s.indexOf('PM') !== -1
  let [hours, minutes, seconds] = s.replace(isPM ? 'PM' : 'AM', '').split(':')

  if (isPM) {
    hours = parseInt(hours, 10) + 12
    hours = hours === 24 ? 12 : hours
  } else {
    hours = parseInt(hours, 10)
    hours = hours === 12 ? 0 : hours
    if (String(hours).length === 1) hours = '0' + hours
  }

  const time = [hours, minutes, seconds].join(':')

  return time
}
const date = new Date().getTime()
timeConversion(date)
