import React, { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import Social from '../Social/Social'
import SoundBar from '../Soundbar/SoundBar'
import './about.css'
import { Dark } from '../../Theme'
import { motion } from 'framer-motion'
import image from '../../assets/image/zyro-image.png'
import image2 from '../../assets/image/zyro-image2.png'
import { Link } from 'react-router-dom'
import * as loading from '../../9329-loading.json'
import Lottie from 'react-lottie'

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

function About() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  })
  return (
    <>
      {loading ? (
        <div className='loading__icon'>
          <Lottie options={defaultOptions1} height={300} width={300} />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='About'
        >
          <Logo theme={Dark.text} color={Dark.text} />
          <SoundBar theme={Dark.text} color={Dark.backGround} />
          <Social fill={Dark.fillColor} />

          <h1 className='about-text'>ABOUT</h1>
          <div className='rectangle-about'>
            <h3 className='rectangle_title'>
              I am a versatile Full Stack Developer, specializing in both
              Front-End and Back-End development. With a keen eye for detail and
              a commitment to delivering high-quality results, I thrive on
              creating user-centric applications that seamlessly bridge the gap
              between design and functionality.My experience encompasses
              crafting intuitive user interfaces, optimizing server-side
              performance, and collaborating closely with cross-functional
              teams.I am dedicated to staying updated with the latest industry
              trends and technologies to ensure that my work consistently meets
              the evolving demands of the digital landscape.
            </h3>
          </div>
          <div className='small-image'>
            <img src={image2} alt='' className='image-item2' />
          </div>
          <div className='natilus'>
            <img src={image} alt='' className='image_item' />
          </div>
          <Link to='/'>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className='back'
            >
              Back
            </motion.div>
          </Link>
        </motion.div>
      )}
    </>
  )
}

export default About
