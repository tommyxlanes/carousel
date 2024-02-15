import { Project, Slide } from '@/typings'
import Image from 'next/image'
import React from 'react'

type Props = {
    slide: Slide,
    index: number
}

const ThumbnailItem = ({ slide, index }: Props) => {
  const {
        title, aurthor, url, description, topic
    } = slide

  return (
    <div className='w-36 h-56 rounded-lg flex-shrink-0 relative'>
        <Image 
            src={url}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className='object-cover rounded-lg'
        />
        {/* Content */}
        <div className='absolute bottom-2 left-2 text-white'>
            <div className='font-bold'>
                slider: {index + 1}
            </div>
            <div className='font-normal'>
                Description
            </div>
        </div>
    </div>
  )
}

export default ThumbnailItem