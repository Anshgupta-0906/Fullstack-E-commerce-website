import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quo amet placeat facilis. Aliquam laborum odio quasi atque ratione perferendis laboriosam velit maiores facere omnis molestias consectetur, suscipit ipsum facilis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur cupiditate, odit, consequatur nostrum sint sequi deleniti, deserunt dolor aut cum ut quaerat eum laudantium quisquam incidunt repellendus ab culpa.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque accusantium deleniti molestiae eos reiciendis est dolor praesentium. Quam ex cupiditate itaque, quisquam velit ut maiores vero ipsa inventore molestiae!</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col sm:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam repudiandae sequi pariatur voluptate iusto cupiditate, expedita corporis ducimus id nemo dolore adipisci dignissimos itaque dicta eius doloribus quo nihil provident.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam repudiandae sequi pariatur voluptate iusto cupiditate, expedita corporis ducimus id nemo dolore adipisci dignissimos itaque dicta eius doloribus quo nihil provident.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam repudiandae sequi pariatur voluptate iusto cupiditate, expedita corporis ducimus id nemo dolore adipisci dignissimos itaque dicta eius doloribus quo nihil provident.</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About
