import React from 'react'
import { motion } from 'framer-motion'

import SharedLearnLink from '@/shared/SharedLearnLink'

type Props = {
    id?: number,
    icon: React.ReactNode,
    title: string,
    description: string
}

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

const Advantage = ({ id, icon, title, description }: Props) => {
  return (
    <motion.div
      key={id}
      className='mt-5 rounded-md border-2 border-g-100 px-5 py-16 text-center'
      variants={childVariant}
    >
        <div className='mb-4 flex justify-center'>
            <div className='rounded-full border-2 border-g-100 bg-p-100 p-f'>
                { icon }
            </div>
        </div>
        <h4 className='font-bold'>{ title }</h4>
        <p className='my-3'>{ description }</p>
        <SharedLearnLink>Learn More</SharedLearnLink>
    </motion.div>
  )
}

export default Advantage
