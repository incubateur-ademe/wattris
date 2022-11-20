import React, { useState } from 'react'

import Co2eModal from 'components/modals/Co2eModal'
import NewApplianceModal from 'components/modals/NewApplianceModal'
const ModalContext = React.createContext({})

export function ModalProvider(props) {
  const [co2e, setCo2e] = useState(false)
  const [newAppliance, setNewAppliance] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        co2e,
        setCo2e: (value) => {
          window?._paq?.push(['trackEvent', 'Interaction', 'Modal', 'CO2e'])
          setCo2e(value)
        },
        newAppliance,
        setNewAppliance: (value) => {
          window?._paq?.push([
            'trackEvent',
            'Interaction',
            'Modal',
            'newAppliance',
          ])
          setNewAppliance(value)
        },
      }}
    >
      {props.children}
      <Co2eModal />
      <NewApplianceModal />
    </ModalContext.Provider>
  )
}

export default ModalContext
