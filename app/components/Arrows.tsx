'use client'

import { useActiveSelection } from '@/context/ActiveContext'
import React from 'react'

import { FaArrowAltCircleLeft, FaArrowAltCircleRight  } from 'react-icons/fa'

const Arrows = () => {
    const {
        activeSelection, 
        setActiveSelection
    } = useActiveSelection() 

    console.log(activeSelection)

    const goPrevImage = () => {

    }

    const goNextImage = () => {
        setActiveSelection(prev => prev + 1)
    }

  return (
    <div className='absolute top-[80%] left-1/4 flex gap-2 text-3xl text-gray-600'>
        <FaArrowAltCircleLeft 
            className='hover:scale-110 hover:text-white/80
                cursor-pointer transition duration-200' />
        <FaArrowAltCircleRight 
            onClick={goNextImage}
            className='hover:scale-110 hover:text-white/80
                cursor-pointer transition duration-200' />
    </div>
  )
}

export default Arrows