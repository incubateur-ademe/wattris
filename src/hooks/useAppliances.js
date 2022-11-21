import { useContext, useMemo } from 'react'

import DataContext from 'components/providers/DataProvider'

const stepDurationInMinute = 30
const powerByBlocInKW = 100
const peakHalfhours = [
  16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 36, 37, 38, 39, 40,
]

export function useAllBlocsByStep() {
  const { appliances } = useContext(DataContext)
  const steps = useMemo(
    () =>
      Array.from(Array(24 * (60 / stepDurationInMinute))).map((step, index) =>
        getAllBlocsForStep({
          appliances,
          step: index,
          powerByBlocInKW,
        })
      ),
    [appliances]
  )

  return { steps, stepDurationInMinute, powerByBlocInKW }
}

export function useAllPowerOfPeaks() {
  const { appliances } = useContext(DataContext)
  const power = useMemo(
    () =>
      peakHalfhours
        .map((hour) =>
          appliances
            .map((appliance) =>
              appliance.occurences
                .map(
                  (occurence) =>
                    Math.ceil(
                      getPowerForStep({
                        step: hour,
                        appliance,
                        start: occurence.start,
                        duration: occurence.duration,
                      }) / powerByBlocInKW
                    ) * powerByBlocInKW
                )
                .reduce((acc, cur) => acc + cur, 0)
            )
            .reduce((acc, cur) => acc + cur, 0)
        )
        .reduce((acc, cur) => acc + cur, 0),
    [appliances]
  )

  return power
}

export function getAllBlocsForStep({ appliances, step, powerByBlocInKW }) {
  return appliances
    .map((appliance) =>
      appliance.occurences
        .map((occurence, index) => {
          const power = getPowerForStep({
            step,
            appliance,
            start: occurence.start,
            duration: occurence.duration,
          })

          return Array.from(Array(Math.ceil(power / powerByBlocInKW) || 0)).map(
            () => ({
              appliance,
              index,
            })
          )
        })
        .reduce((acc, cur) => [...acc, ...cur], [])
    )
    .reduce((acc, cur) => [...acc, ...cur], [])
}

export function getPowerForStep({ step, appliance, start, duration }) {
  let end = start + duration
  end = end > 24 ? end - 24 : end

  const startInStep = Math.floor(start * (60 / stepDurationInMinute))
  const endInStep = Math.ceil(end * (60 / stepDurationInMinute))

  const runAtNight = endInStep < startInStep

  if ((step < startInStep && !runAtNight) || step >= endInStep) {
    return 0
  } else {
    return step === startInStep
      ? appliance.initialPower || appliance.power
      : appliance.power
  }
}
