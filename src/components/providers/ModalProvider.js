import React, { useState } from 'react'

import Co2eModal from 'components/modals/Co2eModal'
import AdviceModal from 'components/modals/AdviceModal'

const ModalContext = React.createContext({})

export function ModalProvider(props) {
  const [co2e, setCo2e] = useState(false)
  const [advice, setAdvice] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        co2e,
        setCo2e: (value) => {
          window?._paq?.push(['trackEvent', 'Interaction', 'Modal', 'CO2e'])
          setCo2e(value)
        },
        advice,
        setAdvice: (value) => {
          window?._paq?.push(['trackEvent', 'Interaction', 'Modal', 'advice'])
          setAdvice(value)
        },
      }}
    >
      {props.children}
      <Co2eModal />
      <AdviceModal />
    </ModalContext.Provider>
  )
}

export default ModalContext
