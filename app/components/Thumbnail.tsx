import { animals } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import ThumbnailItem from './ThumbnailItem'

import { slides } from '@/lib/data'

const Thumbnail = () => {
  return (
    <div className='absolute bottom-12 left-1/2 max-w-max z-30 
        flex gap-4'>
        {
            slides.map(item => (
                <ThumbnailItem slide={item}/>
            ))
        }
    </div>
  )
}

export default Thumbnail