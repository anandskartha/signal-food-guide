import React from 'react'
import { Page } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import SharedButton from '@/shared/SharedButton'
import HomePageImg from '@/assets/HomePageImg.png'
import HomePageText from '@/assets/HomePageText.png'
import { motion } from 'framer-motion'
import SharedLearnLink from '@/shared/SharedLearnLink'

type Props = {
    setCurrentPage: (page: Page) => void
}

const Home = ({ setCurrentPage }: Props) => {
    const isDesktop = useMediaQuery('(min-width: 1060px)')
        
    return (
        <section id='home'
        className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            <motion.div
                className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
                onViewportEnter={() => setCurrentPage(Page.Home)}
            >
                <div className="z-10 mt-32 md:basis-3/5">
                    <motion.div 
                        className='md:-mt-20'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <div className='relative'>
                            <div>
                                <img alt='home-page-text' src={HomePageText} />
                            </div>
                        </div>
                        <p className='mt-8 text-sm'>We believe that healthy eating is the foundation of a healthy life, and we are committed to helping you make informed choices about the foods you consume. Our site features a wide range of delicious and nutritious recipes, as well as expert advice on how to create healthy menus that fit your unique needs and preferences.</p>
                    </motion.div>
                    <motion.div
                        className='mt-8 flex items-center gap-8'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <SharedButton setCurrentPage={setCurrentPage} toPage={Page.GetMenu}>
                            Get Healthy Now
                        </SharedButton>
                        <SharedLearnLink>Learn More</SharedLearnLink>
                    </motion.div>
                </div>
                <div className='flex basis-3/5 justify-center md:ml-40 md:mt-16 md:justify-items-end'>
                    <img alt='home-page-img' src={HomePageImg} />
                </div>
            </motion.div>

        </section>
    )
}

export default Home
