import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

export const DefaultButton = ({ButtonStyling, variant, text}) => {
  return (
    <Button className={`${ButtonStyling} text-[20px]`} variant={variant}>{text}</Button>
  )
}
