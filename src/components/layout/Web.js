import React from 'react'
import styled from 'styled-components'

import useInteraction from 'hooks/useInteraction'
import Seo from './web/Seo'
import Header from './web/Header'
import Footer from './web/Footer'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const FullScreen = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 0 5rem;
`
export default function Web(props) {
  useInteraction()

  return (
    <>
      <Seo
        title={props.title}
        description={props.description}
        image={props.image}
      />
      <Wrapper>
        <Content>
          <FullScreen>
            <Header />
            {props.children}
          </FullScreen>
          <Footer />
        </Content>
      </Wrapper>
    </>
  )
}
