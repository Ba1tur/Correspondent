import Image from 'next/image'
import { motion } from 'framer-motion'
import s from './TrainingProgram.module.scss'

const mogData = [
  {
    label: 'Неделя №1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    label: 'Неделя №1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    label: 'Неделя №2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    label: 'Неделя №3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    label: 'Неделя №4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    label: 'Неделя №5',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    label: 'Неделя №6',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
]
const TrainingProgram = () => { 
  const variants = {
    init: {scale: 0},
    inView: {scale: 1, transition: {duration: 0.5}}
  } 
  return ( 
    <>
      <section id='raspisaniye' className={s.training_program}>
        <motion.div 
          whileInView={{scale: 1, transition: {duration: 0.5}}}
          initial={{scale: 0}}
        >
          <Image src='/rem_logo_gradient_png.png' width={520} height={150} alt='logo' />
        </motion.div>
        <motion.h2 
          variants={variants}
          whileInView='inView'
          initial='init' 
          className={s.heading}
        >
          Lorem, ipsum.
        </motion.h2>
        <motion.p 
          variants={variants}
          whileInView='inView'
          initial='init' 
          className={s.description}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Lorem ipsum dolor sit.
        </motion.p>
        <div className={s.timeline}>
          {mogData.map(({label, text}) => (
            <motion.div 
              whileInView={{ y: 0, opacity: 1, transition: {duration: 1, type: 'spring'} }}
              initial={{ y: 60, opacity: 0.5}}
              key={label} 
              className={s.timeline_item}
            >
              <div className={s.time_content}>
                <span className={s.time_label}>{label}</span>
                <p className={s.time_text}>{text}</p>
              </div>
              <span className={s.arrow}></span>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default TrainingProgram;