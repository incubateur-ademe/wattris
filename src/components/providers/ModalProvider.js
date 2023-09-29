import React, { useState } from 'react'

import Co2eModal from 'components/modals/Co2eModal'
import IntroductionModal from 'components/modals/IntroductionModal'
import ContactModal from 'components/modals/ContactModal'

const ModalContext = React.createContext({})

export function ModalProvider(props) {
  const [co2e, setCo2e] = useState(false)
  const [contact, setContact] = useState(false)
  const [introduction, setIntroduction] = useState(true)

  return (
    <ModalContext.Provider
      value={{
        co2e,
        setCo2e: (value) => {
          window?._paq?.push(['trackEvent', 'Interaction', 'Modal', 'CO2e'])
          setCo2e(value)
        },
        introduction,
        setIntroduction: (value) => {
          window?._paq?.push([
            'trackEvent',
            'Interaction',
            'Modal',
            'introduction',
          ])
          setIntroduction(value)
        },
        contact,
        setContact: (value) => {
          window?._paq?.push(['trackEvent', 'Interaction', 'Modal', 'Contact'])
          setContact(value)
        },
      }}
    >
      {props.children}
      <Co2eModal />
      <IntroductionModal />
      <ContactModal />
    </ModalContext.Provider>
  )
}

export default ModalContext
