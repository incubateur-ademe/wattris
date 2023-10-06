import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.background};
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
  path {
    fill: ${(props) => props.theme.colors.background};
  }
`
export default function OccurenceButtons(props) {
  return (
    <Wrapper>
      <Button
        onClick={() => {
          props.addOccurence({
            slug: props.appliance.slug,
            start: props.appliance.defaultOccurence.start,
            duration: props.appliance.defaultOccurence.duration,
          })
          window?._paq?.push([
            'trackEvent',
            'Interaction',
            'Ajouter occurence',
            props.appliance.slug,
          ])
        }}
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
        </svg>{' '}
        Ajouter un appareil / une utilisation
      </Button>
    </Wrapper>
  )
}
