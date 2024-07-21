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
    topbarStyling={'flex justify-center items-center md:justify-start md:pl-[18%]'}
    className='md:flex md:justify-between md:items-center md:flex-row-reverse'>
        <div className='p-2 mt-[-15px] md:w-1/2 md:mt-[-85px]'>
        <img src={AuthImg} alt="alt" className='md:w-[85%]' />
        </div>

        <div className='w-full flex items-center justify-center mt-[25px] pb-2 relative md:w-1/2'>
            <form action="" className='w-[95%] md:w-[60%]'>
              <DefaultInput label={'Username'} customStyling='w-full' />
              <DefaultInput label={'Email'} customStyling='w-full my-[20px]' />

              <DefaultButton text={'Create Account'} variant={'solid'} ButtonStyling={'bg-[#028960] text-[#fff] p-3 rounded-lg absolute bottom-0 w-full mt-[90px] md:mt-[50px]'}/>
            </form>
        </div>
    </PageContainer>
  )
}

export default Authentication
