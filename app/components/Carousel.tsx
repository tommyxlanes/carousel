'use client'
import CarouselItem from './CarouselItem'
import Thumbnail from './Thumbnail'
import Arrows from './Arrows'

import { slides } from '@/lib/data'
import { useActiveSelection } from '@/context/slideContext'

const Carousel = () => {
  const { activeSelection } = useActiveSelection()

  return (
    // Carousel
    <div className='w-full h-full relative overflow-hidden'>
        
        {/* List */}
        <div>
            <Arrows />
            {/* Item */}
            {activeSelection.map((item, i) => (
                <CarouselItem key={item.url} slide={item} index={i}/>
            ))}
        </div>

        <Thumbnail />
    </div>
  )
}

export default Carousel