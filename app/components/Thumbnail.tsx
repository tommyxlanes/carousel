import { animals } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import ThumbnailItem from './ThumbnailItem'

import { slides } from '@/lib/data'
import { useActiveSelection } from '@/context/slideContext'

const Thumbnail = () => {
  const { activeSelection } = useActiveSelection()

  return (
    <div className='absolute bottom-12 left-1/2 max-w-max z-30 
        flex gap-4'>
        {
            activeSelection.map((item, i) => (
                <ThumbnailItem key={item.url} slide={item} index={i}/>
            ))
        }
    </div>
  )
}

export default Thumbnail