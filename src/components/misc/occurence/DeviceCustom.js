import React from 'react'

import DefaultCustom from './DefaultCustom'
import HeaterCustom from './HeaterCustom'

export default function DeviceCustom(props) {
  return props.appliance.slug === 'radiateur' ? (
    <HeaterCustom
      occurence={props.occurence}
      appliance={props.appliance}
      peak={props.peak}
      active={props.active}
      editOccurence={props.editOccurence}
    />
  ) : (
    <DefaultCustom
      occurence={props.occurence}
      appliance={props.appliance}
      peak={props.peak}
      active={props.active}
      editOccurence={props.editOccurence}
    />
  )
}
