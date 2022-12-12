import React from 'react'
import styled from 'styled-components'
import IframeResizer from 'iframe-resizer-react'

const Wrapper = styled.div`
  max-width: 1270px;
  margin: 3rem auto;
`
const StyledIframeResizer = styled(IframeResizer)`
  flex: 1;
  width: 100%;
  border: none;
  border-radius: 1rem;
`
export default function integration() {
  return (
    <Wrapper>
      <h1>Exemple d'intégration iframe</h1>
      <p>
        Il fait froid dehors et nos besoins d’électricité sont trop importants
        surtout entre 8 h et 13 h puis entre 18 h et 20 h. Pour éviter les
        coupures, il faut changer ses habitudes et décaler le fonctionnement de
        quelques appareils. A vous d’évaluer les gestes qui vous correspondent
        le mieux et qui auront le plus d’impacts. C’est parti !
      </p>

      <StyledIframeResizer
        src={`/iframe`}
        allowfullscreen='true'
        webkitallowfullscreen='true'
        mozallowfullscreen='true'
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        dignissim viverra magna porta vulputate. Nulla porta sollicitudin felis,
        et semper tortor blandit vitae. Cras accumsan vulputate neque, non
        egestas ligula pellentesque quis. Vivamus id nibh dui.
      </p>
      <p>
        Morbi eu nisi at massa mattis ultricies. Sed molestie suscipit eros
        vitae condimentum. Suspendisse sollicitudin imperdiet erat, nec
        condimentum justo tempus eu. Vivamus iaculis nisl vitae erat feugiat
        laoreet et a erat. Pellentesque sagittis lacus eleifend, mattis tortor
        ac, tincidunt elit. Nulla facilisi.
      </p>
    </Wrapper>
  )
}
