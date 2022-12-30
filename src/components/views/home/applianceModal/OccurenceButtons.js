import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.25rem;
  padding: 0 0 0.25rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 0 0 0.5rem 0.5rem;
  cursor: pointer;

  path {
    fill: ${(props) => props.theme.colors.background};
  }
`
export default function OccurenceButtons(props) {
  return (
    <Wrapper>
      <Button
        onClick={() =>
          props.deleteOccurence({
            occurenceIndex: props.lastIndex,
          })
        }
      >
        <svg
          width='9'
          height='2'
          viewBox='0 0 9 2'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8.5 2V0H5.57356H3.44235H0.5V2H3.44235H5.57356H8.5Z'
            fill='#476C9B'
          />
        </svg>
      </Button>
      <Button
        onClick={() =>
          props.addOccurence({
            slug: props.appliance.slug,
            start: props.appliance.defaultOccurence.start,
            duration: props.appliance.defaultOccurence.duration,
          })
        }
      >
        <svg
          width='9'
          height='8'
          viewBox='0 0 9 8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8.5 5.06349V2.93651H5.57356V0H3.44235V2.93651H0.5V5.06349H3.44235V8H5.57356V5.06349H8.5Z'
            fill='#476C9B'
          />
        </svg>
      </Button>
    </Wrapper>
  )
}
