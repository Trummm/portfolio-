import React, { useEffect, useState } from 'react'
import Logo from '../components/Logo/Logo'
import SoundBar from '../components/Soundbar/SoundBar'
import './home.css'
import { motion } from 'framer-motion'
import Social from '../components/Social/Social'
import { Dark } from '../Theme'
import { Light } from '../Theme'
import Rectangle from '../components/rectangle/Rectangle'
import { Link } from 'react-router-dom'
import * as loading from '../9329-loading.json'
import Lottie from 'react-lottie'

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

function Home() {
  const [click, setClick] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  })

  const handleClick = () => {
    setClick(!click)
  }
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
          transition={{ duration: 1, delay: 0.5 }}
          className='Home'
        >
          <Logo theme={click ? Dark.text : Light.text} />
          <SoundBar
            theme={click ? Dark.text : Light.text}
            color={click ? Dark.backGround : Light.backGround}
          />
          <Social fill={click ? Dark.fillColor : Light.fillColor} />

          {click ? <Rectangle /> : null}

          <div
            className='dark_div'
            style={{
              width: click ? '50%' : '0%',
              height: click ? '100%' : '0%',
              transition: 'height 0.5s ease, width 1s ease 0.5s',
            }}
          ></div>

          <div
            className='center'
            onClick={handleClick}
            style={{ top: click ? '85%' : '50%', left: click ? '92%' : '50%' }}
            fill='currentcolor'
          >
            <svg
              style={{ width: click ? 120 : 200 }}
              aria-hidden='true'
              data-prefix='fas'
              data-icon='yin-yang'
              className='prefix__svg-inline--fa prefix__fa-yin-yang prefix__fa-w-16 center_item'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 496 512'
            >
              <path d='M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z' />
            </svg>
            <span style={{ display: click ? 'none' : 'block' }}>
              click here
            </span>
          </div>

          <div className='Fe'>
            <motion.h2
              initial={{
                y: -200,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='fe_item'
            >
              FullStack Developer
            </motion.h2>
          </div>

          <div className='work'>
            <motion.h2
              initial={{
                y: -200,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='work_item'
            >
              <Link
                to='/project'
                className='Link'
                style={{ color: click ? 'white' : 'rgb(0, 0, 0)' }}
              >
                Project
              </Link>
            </motion.h2>
          </div>

          <div className='skills'>
            <motion.h2
              initial={{
                y: -200,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='skills_item'
            >
              <Link to='/skills' className='Link'>
                Skills
              </Link>
            </motion.h2>
          </div>

          <div className='bottom'>
            <div className='about'>
              <motion.h2
                initial={{
                  y: 200,
                  transition: { type: 'spring', duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: 'spring', duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='skills_item'
                style={{ color: click ? 'white' : 'rgb(0, 0, 0)' }}
              >
                <Link
                  to='/about'
                  className='Link'
                  style={{ color: click ? 'white' : 'rgb(0, 0, 0)' }}
                >
                  About
                </Link>
              </motion.h2>
            </div>
            <div className='Contact'>
              <motion.h2
                initial={{
                  y: 200,
                  transition: { type: 'spring', duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: 'spring', duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='skills_item'
              >
                <Link to='/contact' className='Link'>
                  Contact
                </Link>
              </motion.h2>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Home
