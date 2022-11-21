import React, { useContext } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import Appliance from './appliances/Appliance'

const Wrapper = styled.div`
  width: 16rem;
`
const Title = styled.h2``
const MyAppliances = styled.div``
export default function Appliances() {
  const { appliances } = useContext(DataContext)

  return (
    <Wrapper>
      <Title>Mes Appareils</Title>
      <MyAppliances>
        {appliances.map((appliance) => (
          <Appliance appliance={appliance} />
        ))}
      </MyAppliances>
    </Wrapper>
  )
}
