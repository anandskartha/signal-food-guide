import React from 'react'
import { motion } from 'framer-motion'

import Advantage from './Advantage'

type Props = {
    advList: {
        id: number,
        icon: React.ReactNode,
        title: string,
        description: string
    }[]
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

const Advantages = ({ advList }: Props) => {
  return (
    <motion.div
      className='md:flex items-center justify-between gap-8 mt-5'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
      variants={container}
    >
    {
        advList.map((adv) => <Advantage {...adv} key={adv.id} />)
    }
    </motion.div>
  )
}

export default Advantages
