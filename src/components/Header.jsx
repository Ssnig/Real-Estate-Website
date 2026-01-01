import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
                style={{ backgroundImage: "url(/header_img.png)" }}
                id='Header'>
               <div>
                <h2>Explore Home That Fits Your Dream</h2>
                <div>
                    <a href="">Projects</a>
                    <a href="">contact Us</a>
                </div>
               </div>
                
            </div>

        </div>

    )
}

export default Header