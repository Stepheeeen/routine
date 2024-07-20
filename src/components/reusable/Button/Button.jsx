import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

export const DefaultButton = ({ButtonStyling, variant, text}) => {
  return (
    <Button className={`${ButtonStyling} text-[18px] font-[500]`} variant={variant}>{text}</Button>
  )
}
