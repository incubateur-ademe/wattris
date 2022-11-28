import React, { useState } from 'react'

import appliances from 'data/appliances.json'

const DataContext = React.createContext({})

export function DataProvider(props) {
  const [occurences, setOccurences] = useState([
    {
      slug: 'lavelinge',
      start: 14,
      duration: 1.5,
    },
    {
      slug: 'plaques',
      start: 12,
      duration: 0.5,
    },
  ])

  const [hover, setHover] = useState(null)
  const [active, setActive] = useState(null)

  return (
    <DataContext.Provider
      value={{
        appliances,
        occurences,
        setOccurences,
        hover,
        setHover,
        active,
        setActive,
        addOccurence: () => {
          const appliance = appliances[0]
          setOccurences((prevOccurences) => [
            ...prevOccurences,
            {
              slug: appliance.slug,
              start: appliance.defaultOccurence.start,
              duration: appliance.defaultOccurence.duration,
            },
          ])
          setActive(occurences.length)
        },
        editOccurence: ({ occurenceIndex, newOccurence }) => {
          setOccurences((prevOccurences) =>
            prevOccurences.map((occurence, index) =>
              index === occurenceIndex ? newOccurence : occurence
            )
          )
        },
        deleteOccurence: ({ occurenceIndex }) => {
          setOccurences((prevOccurences) =>
            prevOccurences.filter(
              (occurence, index) => index !== occurenceIndex
            )
          )
        },
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}

export default DataContext
