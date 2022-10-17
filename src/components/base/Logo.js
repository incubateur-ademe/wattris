import React from 'react'
import styled from 'styled-components'

import MagicLink from 'components/base/MagicLink'

const Wrapper = styled(MagicLink)``
export default function Logo(props) {
  return (
    <Wrapper to='/' className={props.className}>
      Wattris
    </Wrapper>
  )
}
