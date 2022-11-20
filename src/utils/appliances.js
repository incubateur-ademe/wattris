export function getPowerForHour(hour, { appliance, start, duration }) {
  const end = start + duration
  const runAtNight = end < start
  if ((hour < start && !runAtNight) || hour >= end) {
    return 0
  } else {
    return hour === start
      ? appliance.initialPower || appliance.power
      : appliance.power
  }
}
export function getBlocsForHour(hour, { appliance, index, start, duration }) {
  const bloc = 200
  const power = getPowerForHour(hour, { appliance, start, duration })

  return Array.from(Array(Math.ceil(power / bloc) || 0)).map(() => ({
    appliance,
    index,
  }))
}

export function getAllBlocsForHour(appliances, hour) {
  return appliances
    .map((appliance) =>
      appliance.occurences
        .map((occurence, index) =>
          getBlocsForHour(hour, {
            appliance,
            index,
            start: occurence.start,
            duration: occurence.duration,
          })
        )
        .reduce((acc, cur) => [...acc, ...cur], [])
    )
    .reduce((acc, cur) => [...acc, ...cur], [])
}
