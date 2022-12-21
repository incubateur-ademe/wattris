import { useState, useEffect } from 'react'

export default function useExpandOccurence() {
  const [expand, setExpand] = useState(false)

  useEffect(() => {
    function handleExpand(e) {
      setExpand(false)
    }
    if (expand) {
      document.addEventListener('click', handleExpand)
      return () => document.removeEventListener('click', handleExpand)
    }
  }, [expand])

  return [expand, setExpand]
}
