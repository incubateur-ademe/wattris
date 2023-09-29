import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import copy from 'copy-to-clipboard'

const flash = (props) => keyframes`
  from,
  to {
    background-color: ${props.theme.colors.textLight};
  }

  35%,
  55% {
    background-color: ${props.theme.colors.secondDark};
  }
`

const Wrapper = styled.div`
  position: relative;
`
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`
const Text = styled.code`
  position: relative;
  display: block;
  padding: 1rem 1rem 2rem;
  font-size: 0.875rem;
  word-break: break-word;
  background-color: ${(props) => props.theme.colors.textLight};
  border-radius: 0.5rem;
  animation: ${(props) => (props.copied ? flash : 'none')} 400ms 1;
`

const Copy = styled.button`
  color: ${(props) => props.theme.colors.text};
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 0.5rem;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
`

const Copied = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 0.5rem;
  background: none;
  border: none;
`

export default function Code() {
  const [script, setScript] = useState(null)

  useEffect(() => {
    setScript(
      `<script id="wattris-ademe" src="${window?.location.origin}/iframe.js"></script>`
    )
  }, [])

  const [copied, setCopied] = useState(false)

  const unsetCopied = () => setCopied(false)
  useEffect(() => {
    setTimeout(unsetCopied, 5000)
    return () => clearTimeout(unsetCopied)
  }, [copied])

  return (
    <Wrapper>
      <Label htmlFor='code'>
        Copiez le code ci-dessous où vous souhaitez afficher l&apos;iframe sur
        votre site.
      </Label>
      <Text name='code' copied={copied}>
        {script}
      </Text>
      {!copied ? (
        <Copy
          onClick={() => {
            if (!copied && copy(script)) {
              setCopied(true)
            }
          }}
        >
          Copier
        </Copy>
      ) : (
        <Copied>Copié ✅</Copied>
      )}
    </Wrapper>
  )
}
