'use client'

import { useActiveSelection } from '@/context/slideContext'
import { Slide } from '@/typings'
import React, { useState } from 'react'

import { FaArrowAltCircleLeft, FaArrowAltCircleRight  } from 'react-icons/fa'

const Arrows = () => {
    const {activeSelection, setActiveSelection } = useActiveSelection()

    console.log(activeSelection)

    const goNext = () => {
        const firstSlide = activeSelection[0]
        activeSelection.shift()
        const updateSlide = [...activeSelection, firstSlide]

        setActiveSelection(updateSlide)
    }

  return (
    <div className='absolute top-[80%] left-1/4 flex gap-2 text-3xl text-gray-200/50 z-30'>
        <FaArrowAltCircleLeft 
            className='hover:scale-110 hover:text-white/80
                cursor-pointer transition duration-200' />
        <FaArrowAltCircleRight 
            onClick={goNext}
            className='hover:scale-110 hover:text-white/80
                cursor-pointer transition duration-200' />
    </div>
  )
}

export default Arrows