
import CarouselItem from './CarouselItem'
import Thumbnail from './Thumbnail'
import Arrows from './Arrows'

import { slides } from '@/lib/data'

const Carousel = () => {
  return (
    // Carousel
    <div className='w-full h-full relative overflow-hidden'>
        {/* List */}
        <div>
            {/* Item */}
            {slides.map((item, i) => (
                <CarouselItem slide={item} index={i}/>
            ))}

            <Arrows />
        </div>

        <Thumbnail />
    </div>
  )
}

export default Carousel