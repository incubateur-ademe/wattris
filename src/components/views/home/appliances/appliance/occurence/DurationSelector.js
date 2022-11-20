import React from 'react'

import Select from 'components/base/Select'

export default function DurationSelector(props) {
  return (
    <Select
      name={props.slug + props.index}
      value={props.duration}
      onChange={({ value }) => props.onChange(Number(value))}
    >
      {Array.from(Array(24)).map((hour, index) => (
        <option value={index}>{index}h</option>
      ))}
    </Select>
  )
}
