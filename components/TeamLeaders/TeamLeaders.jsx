import Image from "next/image";
import { motion } from 'framer-motion'
import s from './TeamLeaders.module.scss'

const mogData = [
  {
    id: 1,
    profileImg: '/profile_1.png',
    fullname: 'Lorem, ipsum',
    spec: 'Lorem, ipsum dolor.'
  },
  {
    id: 2,
    profileImg: '/profile_2.png',
    fullname: 'Lorem, ipsum',
    spec: 'Lorem, ipsum dolor.'
  },
  {
    id: 3,
    profileImg: '/profile_3.png',
    fullname: 'Lorem, ipsum',
    spec: 'Lorem, ipsum dolor.'
  }
]

const TeamLeaders = () => {
  const variants = {
    init: {scale: 0},
    inView: {scale: 1, transition: {duration: 0.5}}
  } 
  return ( 
    <section id="teachers" className={s.team_lead}>
      <div className={s.container}>
        <motion.div 
          initial={{opacity: 0, x: -100}}
          whileInView={{opacity: 1, x: 0, transition: {duration: 1}}}
          className={s.heading}
        >
          <Image 
            src='/logo.png' 
            width={100} 
            height={100} 
            alt='logo' 
          />
          <h2>Lorem  ipsum</h2>
        </motion.div>
        <div className={s.users_cards}>
          {mogData.map(({spec, profileImg, id, fullname}) => (
            <div key={id} className={s.user_card}>
              <motion.div 
                initial={{rotate: 200, scale: 0.5}}
                whileInView={{rotate: 0, scale: 1, transition: {duration: 0.8}}}
                whileHover={{scale: 1.1}}
              >
                <Image 
                  src={profileImg} 
                  width={190} 
                  height={190} 
                  alt='profile'
                  style={{borderRadius: '50%'}} 
                />
              </motion.div>
              <motion.h6
                variants={variants}
                whileInView='inView'
                initial='init' 
                className={s.username}
              >
                {fullname}
              </motion.h6>
              <motion.span 
                variants={variants}
                whileInView='inView'
                initial='init'
                className={s.spec}
              >
                {spec}
              </motion.span>
              <motion.button 
                className={s.btn}
                whileHover={{scale: 1.1, transition: {duration: 0.3}}}
              >
                Lorem
              </motion.button>
            </div>
          ))}
        </div>
      </div>
    </section>
   );
}

export default TeamLeaders;