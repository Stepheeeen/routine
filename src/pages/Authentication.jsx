import React from 'react'
import AuthImg from '../assets/images/AuthenticationImg.png'
import { DefaultInput } from '../components/reusable/Input/Input'
import PageContainer from './Index'
import { DefaultButton } from '../components/reusable/Button/Button'
import { Button } from '@chakra-ui/react'

const Authentication = () => {
  return (
    <PageContainer
    navbarStyling={'hidden'}
    pageTitle={'Create Account'}
    topbarStyling={'flex justify-center items-center'}>
        <div className='p-2 mt-[-15px]'>
        <img src={AuthImg} alt="alt" className='' />
        </div>

        <div className='w-full flex items-center justify-center mt-[25px] pb-2 relative'>
            <form action="" className='w-[95%] '>
              <DefaultInput label={'Username'} customStyling='w-full' />
              <DefaultInput label={'Email'} customStyling='w-full my-[20px]' />

              <DefaultButton text={'Create Account'} variant={'solid'} ButtonStyling={'bg-[#028960] text-[#fff] p-3 rounded-lg absolute bottom-0 w-full mt-[90px]'}/>
            </form>
        </div>
    </PageContainer>
  )
}

export default Authentication
