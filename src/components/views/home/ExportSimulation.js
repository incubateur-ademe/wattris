import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

import DataContext from 'components/providers/DataProvider'
import Button from 'components/base/Button'

export default function ExportSimulation() {
  const { occurences } = useContext(DataContext)
  const router = useRouter()
  const [display, setDisplay] = useState(false)
  useEffect(() => {
    setDisplay(router.asPath.includes('export'))
  }, [router])

  return display ? (
    <Button.Wrapper>
      <Button
        onClick={() => {
          var element = document.createElement('a')
          element.setAttribute(
            'href',
            'data:text/plain;charset=utf-8,' + JSON.stringify(occurences)
          )
          element.setAttribute('download', 'simulation-wattris.json')
          element.style.display = 'none'
          document.body.appendChild(element)
          element.click()
          document.body.removeChild(element)
        }}
      >
        Exporter ma simulation
      </Button>
    </Button.Wrapper>
  ) : null
}
