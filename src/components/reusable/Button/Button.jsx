import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

export const Button = ({ButtonStyling, variant}) => {
  return (
    <Button colorScheme="customGreen" className={`${ButtonStyling}`} variant={variant}>{text}</Button>
  )
}
