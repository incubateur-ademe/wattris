export function getRealHoursFromDecimalHours(duration) {
  var minutes = Math.floor((duration * 60) % 60),
    hours = Math.floor(duration % 60)
  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes
  return hours + 'h' + minutes
}
