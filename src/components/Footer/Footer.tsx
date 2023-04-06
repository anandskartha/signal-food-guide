import useMediaQuery from '@/hooks/useMediaQuery'
import FooterText from '@/assets/HomePageText.png'

const Footer = () => {
    const isDesktop = useMediaQuery('(min-width: 1060px)')
        
    return (
        <footer
            id='footer'
            className="py-8"
        >  
            <div className='justify-content mx-auto w-5/6 gap-16 md:flex text-xs'>
                <div className='mt-16 basis-1/2 md:mt-0'>
                    <img alt='Smart Plate' src={FooterText} />
                    <p className='my-5'>
                        Thank you for visiting our website, and we look forward to helping you achieve your health and wellness goals!
                    </p>
                    <p>©2023 13176061 Canada Inc. All rights reserved.</p>
                </div>
                <div className='mt-16 basis-1/4 md:mt-0'>
                    <h4 className='font-bold'>Links</h4>
                    <a href='#'><p className='mt-5'>Home</p></a>
                    <a href='#why-should-i-eat-clean'><p  className='mt-5'>Why Should I Eat Clean</p></a>
                    <a href='#get-my-menu'><p className='mt-5'>Get My Menu</p></a>
                    <a href="https://food-guide.canada.ca/en/" target="_blank" rel="noreferrer">
                        <p className='mt-5'>Canada Food Guide</p>
                    </a>
                </div>
                <div className='mt-16 basis-1/4 md:mt-0'>
                    <h4 className='font-bold'>Contact Us</h4>
                    <p className='mt-5'>13176061 Canada Inc.</p>
                    <p>(548)349-7469</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
