'use client'
import { Project, Slide } from '@/typings'
import Image from 'next/image'

import { motion, useAnimate } from 'framer-motion'
import { clsx } from 'clsx'
import { useActiveSelection } from '@/context/slideContext'

import styles from '@/styles/curousel.module.css'
import { useEffect, useState } from 'react'

type Props = {
    slide: Slide,
    index: number
}

const showContent = {
    initial: {
        y: 50,
        opacity: 0,
        filter: 'blur(20px)' 
    },
    animate: (i: number) => ({
        y: 0,
        opacity: 1,
        filter: 'blur(0)',
        transition: {
            duration: .4,
            delay: .2 * i
        }
    })
}

const CarouselItem = ({ slide, index }: Props) => {
    const {activeSelection} = useActiveSelection()
    const [animation, setAnimation] = useState<Slide | null>(null);

    const {
        title, aurthor, url, description, topic
    } = slide

    useEffect(() => {
      setAnimation(activeSelection[0])
    }, [activeSelection, animation])

  return (
    <div className='absolute inset-0 transition duration-500 h-full'>
        <Image 
            src={url}
            alt={aurthor}
            priority
            fill
            className={`${styles.next} object-cover relative`}
        />
        <div className='w-[60%] h-[100dvh] bg-gradient-to-r from-slate-900/80
            absolute top-0 bottom-0'></div>
        {/* Info */}
        <div className='absolute top-[20%] w-[1140px] text-white
            max-w-[80%] left-1/2 -translate-x-1/2 pr-[30%]'>
            <motion.div 
                key={Math.floor(1 + Math.random() * 10000)}
                variants={showContent}
                initial='initial'
                custom={1}
                whileInView='animate'
                className='font-bold uppercase tracking-widest'>
                    {aurthor}
            </motion.div>
            <motion.div
                key={Math.floor(1 + Math.random() * 10000)}
                variants={showContent}
                initial='initial'
                custom={2.2} 
                whileInView='animate'
                className='uppercase font-bold text-[4rem]'>
                    {title}
            </motion.div>
            <motion.div 
                key={Math.floor(1 + Math.random() * 10000)}
                variants={showContent}
                initial='initial'
                custom={3}
                whileInView='animate'
                className='uppercase font-bold text-[2rem] text-orange-600'>
                    {topic}
            </motion.div>
            <motion.div 
                key={Math.floor(1 + Math.random() * 10000)}
                variants={showContent}
                initial='initial'
                custom={4.2}
                whileInView='animate'
                className='max-w-[75%]'>
                    {description}
            </motion.div>
            <motion.div 
                key={Math.floor(1 + Math.random() * 10000)}
                variants={showContent}
                initial='initial'
                custom={5}
                whileInView='animate'
                className='flex gap-2 mt-6'>
                <button className='border-2 border-white bg-white px-8 
                py-2 font-medium text-gray-900 shadow-sm shadow-black/40'>See More</button>
                <button className='border-2 border-white 
                px-8 py-2'>Subscribe</button>
            </motion.div>
            
        </div>
        
    </div>
  )
}

export default CarouselItem