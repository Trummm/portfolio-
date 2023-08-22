import React, { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import Social from '../Social/Social'
import SoundBar from '../Soundbar/SoundBar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import * as loading from '../../9329-loading.json'
import Lottie from 'react-lottie'
import './skills.css'

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

function Skills() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
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
          className='Skills'
        >
          <SoundBar />
          <Logo />
          <Social />

          <div className='card'>
            {/* Skill Back-end */}
            <motion.div className='card__item-dash'>
              <div className='card__item'>
                <div className='card__item-icon'>
                  <svg
                    aria-hidden='true'
                    data-prefix='fas'
                    data-icon='palette'
                    class='prefix__svg-inline--fa prefix__fa-palette prefix__fa-w-16'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    width='80'
                    height='80'
                    style={{ backgroundColor: 'transparent' }}
                  >
                    <path d='M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z'></path>
                  </svg>
                </div>
                <h1 className='card__item-h1'>Back-end Developer</h1>
              </div>
              <div className='card__item2'>
                <h3 className='card__item2-h3'>
                  I'm a Back-End Developer with a passion for crafting efficient
                  digital solutions.
                </h3>
                <ul className='card__item2-list'>
                  {' '}
                  Skills
                  <li className='card__item2-list-item'>
                    Ruby, Ruby on Rails, MySQL, RestfulAPI, SQLServer
                  </li>
                </ul>
                <ul className='card__item2-list'>
                  {' '}
                  Tools
                  <li className='card__item2-list-item'>Postman, Ubuntu</li>
                </ul>
              </div>
            </motion.div>

            {/* Skill Front-end */}
            <motion.div className='card__item-dash'>
              <div className='card__item'>
                <div className='card__item-icon'>
                  <svg
                    aria-hidden='true'
                    data-prefix='fas'
                    data-icon='laptop-code'
                    class='prefix__svg-inline--fa prefix__fa-laptop-code prefix__fa-w-20'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 640 512'
                    width='80'
                    height='80'
                    style={{ backgroundColor: 'transparent' }}
                  >
                    <path d='M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z'></path>
                  </svg>
                </div>
                <h1 className='card__item-h1'>Front-end Developer</h1>
              </div>
              <div className='card__item2'>
                <h3 className='card__item2-h3'>
                  I value business or brand for which i'm creating, thus i enjoy
                  bringing new ideas to life.
                </h3>
                <ul className='card__item2-list'>
                  {' '}
                  Skills
                  <li className='card__item2-list-item'>
                    Html, Css, Javascript, React, Redux, Sass, Firebase, NextJs,
                    Material-UI, Bootstrap etc.
                  </li>
                </ul>
                <ul className='card__item2-list'>
                  {' '}
                  Tools
                  <li className='card__item2-list-item'>
                    VScode, Github, Codepen etc.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
          <h1 className='Skills-h1'>SKILLS</h1>
          <Link to='/'>
            <motion.span
              className='back-skills'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              Back
            </motion.span>
          </Link>
        </motion.div>
      )}
    </>
  )
}

export default Skills
