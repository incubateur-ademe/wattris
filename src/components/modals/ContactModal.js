import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import ModalContext from 'components/providers/ModalProvider'
import Modal from 'components/base/Modal'

const StyledModal = styled(Modal)`
  padding: 0;
`
export default function ContactModal() {
  const { contact: open, setContact: setOpen } = useContext(ModalContext)

  const { occurences } = useContext(DataContext)

  const [iframe, setIframe] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setIframe(true), 2500)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <StyledModal open={open} setOpen={setOpen}>
      {open || iframe ? (
        <iframe
          src={`https://airtable.com/embed/shrp4omaHLOXGZ2mu?prefill_simulation=${JSON.stringify(
            occurences
          )}&hide_simulation=true`}
          frameborder='0'
          onmousewheel=''
          width='100%'
          height='533'
        ></iframe>
      ) : null}
    </StyledModal>
  )
}
