import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import { getAllBlocsForHour } from 'utils/appliances'
import DataContext from 'components/providers/DataProvider'
import Hour from './timeline/Hour'

const Wrapper = styled.div`
  display: flex;
  gap: 0.25rem;
`
export default function Timeline() {
  const { appliances } = useContext(DataContext)

  const [hours, setHours] = useState([])
  useEffect(() => {
    setHours(
      Array.from(Array(24)).map((hour, index) =>
        getAllBlocsForHour(appliances, index)
      )
    )
  }, [appliances])

  return (
    <Wrapper>
      {hours.map((hour) => (
        <Hour hour={hour} />
      ))}
    </Wrapper>
  )
}
