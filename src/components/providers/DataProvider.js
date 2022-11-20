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
          console.log(slug, occurenceIndex)
          console.log(newOccurence)
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
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}

export default DataContext
