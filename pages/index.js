import React, { useState } from 'react'

import Web from 'components/layout/Web'
import Home from 'components/views/Home'
import Configurator from 'components/misc/Configurator'

export default function Index() {
  const [hoverIframe, setHoverIframe] = useState(false)
  return (
    <Web>
      <Home hoverIframe={hoverIframe} />
      <Configurator setHoverIframe={setHoverIframe} />
    </Web>
  )
}
