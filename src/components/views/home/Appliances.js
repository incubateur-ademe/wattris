import React, { useContext } from 'react'
import styled from 'styled-components'

import DataContext from 'components/providers/DataProvider'
import Appliance from './appliances/Appliance'

const Wrapper = styled.div``
const MyAppliances = styled.div``
export default function Appliances() {
  const { appliances } = useContext(DataContext)

  return (
    <Wrapper>
      <MyAppliances>
        {appliances.map((appliance) => (
          <Appliance appliance={appliance} />
        ))}
      </MyAppliances>
    </Wrapper>
  )
}
