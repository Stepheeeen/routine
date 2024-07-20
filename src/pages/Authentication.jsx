import React from 'react'
import AuthImg from '../assets/images/AuthenticationImg.png'
import { DefaultInput } from '../components/reusable/Input/Input'
import PageContainer from './Index'

const Authentication = () => {
  return (
    <PageContainer
    navbarStyling={'hidden'}
    pageTitle={'Create Account'}
    topbarStyling={'flex justify-center items-center'}>
        <div className='p-2'>
        <img src={AuthImg} alt="alt" className='' />
        </div>

        <div className='w-full flex items-center justify-center'>
            <form action="" className='w-[95%] '>
              <DefaultInput label={'Username'} customStyling='w-full' />
              <DefaultInput label={'Email'} customStyling='w-full my-[20px]' />
            </form>


        </div>
    </PageContainer>
  )
}

export default Authentication
