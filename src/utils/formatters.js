export function getRealHoursFromDecimalHours(decimal) {
  var n = new Date(0, 0)
  n.setMinutes(decimal * 60)
  return n.toTimeString().slice(0, 5).replace(':', 'h')
}
