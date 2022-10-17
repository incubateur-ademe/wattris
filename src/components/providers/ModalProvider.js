import React, { useState } from 'react'

import Co2eModal from 'components/modals/Co2eModal'
const ModalContext = React.createContext({})

export function ModalProvider(props) {
  const [Co2e, setCo2e] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        Co2e,
        setCo2e: (value) => {
          window?._paq?.push(['trackEvent', 'Interaction', 'Modal', 'CO2e'])
          setCo2e(value)
        },
      }}
    >
      {props.children}
      <Co2eModal />
    </ModalContext.Provider>
  )
}

export default ModalContext
