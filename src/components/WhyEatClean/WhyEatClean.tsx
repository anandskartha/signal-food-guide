import { Page } from '@/shared/types'
import { AcademicCapIcon, HomeModernIcon, HeartIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import SharedHeader from '@/shared/SharedHeader'
import Advantages from './Advantages'

type Props = {
    setCurrentPage: (page: Page) => void
}

const advantages = [
  {
    id: 1,
    icon: <HeartIcon className='h-6 w-6' />,
    title: 'Improved Physical Health',
    description: 'By choosing nutrient-dense foods and avoiding processed and junk foods, you can improve your heart health and reduce your risk of chronic diseases'
  },
  {
    id: 2,
    icon: <AcademicCapIcon className='h-6 w-6' />,
    title: 'Better Mental Health',
    description: 'By prioritizing a healthy diet, you can improve your mood, increase your focus, and feel better both physically and mentally.'
  },
  {
    id: 3,
    icon: <HomeModernIcon className='h-6 w-6' />,
    title: 'Environmental Sustainability',
    description: 'An animal-based nutrient dense diet that emphasizes local foods can reduce our environmental footprint and promote sustainability.'
  }
]

const WhyEatClean = ({ setCurrentPage }: Props) => {
  return (
    <section id='why-should-i-eat-clean' className='mx-auto min-h-full w-5/6 py-20'>
      <motion.div
        onViewportEnter={() => setCurrentPage(Page.Why)}
      >
        <motion.div
          className='md:my-5 md:w-4/5'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
          }}
        >
          <SharedHeader>Overall Physical and Mental Well-being</SharedHeader>
          <p className='my-5 text-sm'>
            This is your go-to resource for nutritious recipes, healthy menus, and the latest information on nutrition and wellness. Whether you are looking to lose weight, manage a health condition, or simply improve your overall well-being, we are here to support you every step of the way. So take a look around and discover the many benefits of healthy eating for yourself!
          </p>
        </motion.div>

        <Advantages advList={advantages} />
      </motion.div>
    </section>
  )
}

export default WhyEatClean