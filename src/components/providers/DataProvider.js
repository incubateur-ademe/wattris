import React from 'react'

const DataContext = React.createContext({})

export function DataProvider(props) {
  return (
    <DataContext.Provider value={{}}>{props.children}</DataContext.Provider>
  )
}

export default DataContext
