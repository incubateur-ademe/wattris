import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from 'utils/styles'

const StyleContext = React.createContext({})

export function StyleProvider(props) {
  const [theme, setTheme] = useState('default')

  return (
    <StyleContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <ThemeProvider theme={{ ...themes[theme] }}>
        {props.children}
      </ThemeProvider>
    </StyleContext.Provider>
  )
}

export default StyleContext
