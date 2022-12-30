import { useContext, useMemo } from 'react'

import DataContext from 'components/providers/DataProvider'

const stepDurationInMinute = 5
const powerByBlocInKW = 10
const peakSteps = () => {
  const peaks = [8, 9, 10, 11, 12, 18, 19]
  const numStepsInAnHour = 60 / stepDurationInMinute
  return peaks
    .map((peak) =>
      Array.from(Array(numStepsInAnHour)).map(
        (step, index) => peak * numStepsInAnHour + index
      )
    )
    .reduce((acc, cur) => [...acc, ...cur], [])
}

export function useAllBlocsByStep() {
  const { appliances, occurences } = useContext(DataContext)
  const steps = useMemo(
    () =>
      Array.from(Array(24 * (60 / stepDurationInMinute))).map((step, index) =>
        getAllBlocsForStep({
          appliances,
          occurences,
          step: index,
          powerByBlocInKW,
        })
      ),
    [appliances, occurences]
  )

  return { steps, stepDurationInMinute, powerByBlocInKW }
}

export function useAllPowerOfPeaks() {
  const { appliances, occurences } = useContext(DataContext)
  const power = useMemo(
    () =>
      peakSteps()
        .map((hour) =>
          occurences
            .map(
              (occurence) =>
                Math.ceil(
                  getPowerForStep({
                    step: hour,
                    appliance: appliances.find(
                      (appliance) => appliance.slug === occurence.slug
                    ),
                    start: occurence.start,
                    duration: occurence.duration,
                  }) / powerByBlocInKW
                ) * powerByBlocInKW
            )
            .map((occurence) => occurence / (60 / stepDurationInMinute))
            .reduce((acc, cur) => acc + cur, 0)
        )
        .reduce((acc, cur) => acc + cur, 0),
    [appliances, occurences]
  )
  return power
}

export function getAllBlocsForStep({
  appliances,
  occurences,
  step,
  powerByBlocInKW,
}) {
  return occurences
    .map((occurence, index) => {
      const appliance = appliances.find(
        (appliance) => appliance.slug === occurence.slug
      )

      return {
        appliance,
        power: getPowerForStep({
          step,
          appliance,
          start: occurence.start,
          duration: occurence.duration,
        }),
        index,
      }
    })
    .filter((bloc) => bloc.power)
    .sort((a, b) => a.appliance.power - b.appliance.power)
}

export function getPowerForStep({ step, appliance, start, duration }) {
  if (start === 0 && duration === 24) {
    return appliance.power
  }

  let end = start + duration
  end = end > 24 ? end - (24 + stepDurationInMinute / 60) : end

  let initialPowerEnd = start + appliance.initialPowerLength / 60
  initialPowerEnd =
    initialPowerEnd > 24
      ? initialPowerEnd - (24 + stepDurationInMinute / 60)
      : initialPowerEnd

  const startInStep = Math.floor(start * (60 / stepDurationInMinute))
  const endInStep = Math.ceil(end * (60 / stepDurationInMinute))
  const initialPowerEndInStep = Math.ceil(
    initialPowerEnd * (60 / stepDurationInMinute)
  )
  const runAtNight = endInStep < startInStep
  const initialPowerAtNight = initialPowerEndInStep < startInStep

  if (
    step >= startInStep &&
    (step < initialPowerEndInStep || initialPowerAtNight) &&
    (step < endInStep || runAtNight)
  ) {
    return appliance.initialPower || appliance.power
  }

  if (initialPowerAtNight && step <= initialPowerEndInStep) {
    return appliance.initialPower || appliance.power
  }

  if (step >= startInStep && step < endInStep) {
    return appliance.power
  }

  if (runAtNight && (step >= startInStep || step <= endInStep)) {
    return appliance.power
  }

  return 0
}
