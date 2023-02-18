import React from 'react'
import './styles/LandingPage.css'
import { Button, Input } from '@material-tailwind/react'
import logo from './images/Chef-logo.png'
import heroPic from './images/Recipe-book.png'
import buttered from './images/buttered_image.jpg'

const LandingPage = () => {
  return (
    <div className='h-full'>
      <div className='flex flex-col items-center mt-5'>
        <div className='flex items-center'>
          <img src={logo} alt="" className='w-20 h-20' />
          <h1 className='text-4xl font-bold text-white'>Recipe <span className='logoColor'>App</span> </h1>
        </div>
        <form action="" className='w-1/3'>
          <Input
            color="blue-gray"
            variant="outlined"
            label="I want to make..."
            className='h-10 w-full'
            style={{ backgroundColor: 'white', color: '#FF725E' }}
          />
          <section className='mt-2'>
            <Button variant='gradient' className=' bg-blue-700 text-white h-10 text-center'>Chicken</Button>
            <Button variant='gradient' className='ml-5 bg-blue-700 text-white h-10 text-center'>Pork</Button>
            <Button variant='gradient' className='ml-5 bg-blue-700 text-white h-10 text-center'>Seafood</Button>
            <Button variant='gradient' className='ml-5 bg-blue-700 text-white h-10 text-center'>Beef</Button>
          </section>
        </form>
        <div className='flex justify-evenly'>
          <div className=''>
            <img src={heroPic} alt="" />
          </div>
          <div className='flex flex-col w-full bg-white items-center'>
            <div>
              <h1>Buttered Chicken</h1>
              <h2>Description</h2>
              <div className='flex'>
                <div>
                  <img src={buttered} alt="chicken" />
                </div>
                <div className='flex'>
                  <Button variant='outlined' className=' bg-blue-700 text-white h-10 text-center'>Chicken</Button>
                  <Button variant='outlined' className=' bg-blue-700 text-white h-10 text-center'>Fried</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage