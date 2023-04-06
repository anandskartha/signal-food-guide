import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import Home from '@/components/Home'
import WhyEatClean from '@/components/WhyEatClean'
import GetMenu from '@/components/GetMenu'
import Footer from './components/Footer'

import { Page } from './shared/types'

function App() {
  const [isTop, setIsTop] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true)
        setCurrentPage(Page.Home)
      } else {
        setIsTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div className='app bg-g-20'>
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isTop={isTop} />
      <Home setCurrentPage={setCurrentPage} />
      <WhyEatClean setCurrentPage={setCurrentPage} />
      <GetMenu setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  )
}

export default App
