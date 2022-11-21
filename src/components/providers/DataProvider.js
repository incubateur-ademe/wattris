import React, { useState } from 'react'

import appliancesData from 'data/appliances.json'

const DataContext = React.createContext({})

export function DataProvider(props) {
  const [appliances, setAppliances] = useState(appliancesData)

  return (
    <DataContext.Provider
      value={{
        appliances,
        editApplianceOccurence: ({ slug, occurenceIndex, newOccurence }) => {
          setAppliances((prevAppliances) =>
            prevAppliances.map((appliance) =>
              appliance.slug === slug
                ? {
                    ...appliance,
                    occurences: appliance.occurences.map((occurence, index) =>
                      index === occurenceIndex ? newOccurence : occurence
                    ),
                  }
                : appliance
            )
          )
        },
        addApplianceOccurence: ({ slug }) => {
          setAppliances((prevAppliances) =>
            prevAppliances.map((appliance) =>
              appliance.slug === slug
                ? {
                    ...appliance,
                    occurences: [
                      ...appliance.occurences,
                      { ...appliance.defaultOccurence },
                    ],
                  }
                : appliance
            )
          )
        },
        deleteApplianceOccurence: ({ slug, occurenceIndex }) => {
          setAppliances((prevAppliances) =>
            prevAppliances.map((appliance) =>
              appliance.slug === slug
                ? {
                    ...appliance,
                    occurences: appliance.occurences.filter(
                      (occurence, index) => index !== occurenceIndex
                    ),
                  }
                : appliance
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
