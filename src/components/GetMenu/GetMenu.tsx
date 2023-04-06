import { Page } from '@/shared/types'
import { motion } from 'framer-motion'
import SharedHeader from '@/shared/SharedHeader'
import GetUserDetails from './GetUserDetails'

type Props = {
  setCurrentPage: (page: Page) => void
}

const GetMenu = ({ setCurrentPage }: Props) => {

  return (
    <section id='get-my-menu' className='w-full bg-p-100 py-40'>
      <motion.div onViewportEnter={() => setCurrentPage(Page.GetMenu)}>
        <motion.div
          className='mx-auto w-5/6'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
          }}
        >
          <div className='md:w-3/5'>
            <SharedHeader>GET A MENU</SharedHeader>
            <p className='py-5 '>
              Our recipes are carefully crafted to be both healthy and delicious, using only the freshest and most nutritious ingredients available. From flavorful steaks and hearty soups to mouthwatering entrees and delectable desserts, our menu has something for everyone. Whether you're looking for quick and easy weeknight meals, or want to impress your guests with a gourmet spread, our healthy menu has got you covered. So go ahead and explore our delicious recipes, and discover the many benefits of healthy eating for yourself.
            </p>
          </div>
          <div className={`items-center w-full z-30`}>
            <GetUserDetails />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default GetMenu
