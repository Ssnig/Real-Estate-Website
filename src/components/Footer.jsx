import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 w-full bg-gray-900 overflow-hidden' id='footer'>
            <div className='container flex flex-auto mx-auto md:flex-row justify-between items-start'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <img src={assets.logo_dark} alt="" />
                    <p className='mt-4 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illo voluptatum nobis quia quos nulla accusamus perferendis explicabo at saepe possimus nesciunt commodi architecto eligendi asperiores laborum laboriosam cumque necessitatibus.
                    </p>
                </div>
                <div  className='w-full md:w-1/5 mb-8 md:mb-0' >
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className='flex flex-col text-gray-400 gap-2'>
                        <a href="#Header" className='text-gray-400 hover:text-white'>Home</a>
                        <a href="#About" className='text-gray-400 hover:text-white block mt-2'>About Us</a>
                        <a href="#Projects" className='text-gray-400 hover:text-white block mt-2'>Projects</a>
                        <a href="#Testimonials" className='text-gray-400 hover:text-white block mt-2'>Testimonials</a>
                        <a href="#Contact" className='text-gray-400 hover:text-white block mt-2'>Contact Us</a>
                        <a href="#" className='text-gray-400 hover:text-white block mt-2'>Privacy & Policy</a>
                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                    <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our Newsletter</h3>
                    <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles and resources delivered to your inbox.</p>
                    <div className='flex gap-2'>
                        <input type="email" placeholder="Enter your email" className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <button className="py-2 px-2 rounded text-white bg-blue-500">Subscribe</button>
                    </div>

                </div>
            </div>
            <div className='border-t py-4 mt-10 border-gray-700 text-center text-gray-500'>
                Copyright © 2026 Kyaw San Htun . All rights reserved.

            </div>
        </div>
    )
}

export default Footer