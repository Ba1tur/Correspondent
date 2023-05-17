import Image from 'next/image'
import s from './TrainingProgram.module.scss'

const mogData = [
  {
    label: 'Неделя №1',
    text: 'Красивая часть курса, которая помогает в успехе',
  },
  {
    label: 'Неделя №1',
    text: 'Красивая часть курса, которая помогает в успехе',
  },
  {
    label: 'Неделя №2',
    text: 'Красивая часть курса, которая помогает в успехе',
  },
  {
    label: 'Неделя №3',
    text: 'Красивая часть курса, которая помогает в успехе',
  },
  {
    label: 'Неделя №4',
    text: 'Красивая часть курса, которая помогает в успехе',
  },
  {
    label: 'Неделя №5',
    text: 'Красивая часть курса, которая помогает в успехе',
  },
  {
    label: 'Неделя №6',
    text: 'Красивая часть курса, которая помогает в успехе',
  },
]
const TrainingProgram = () => {
  return ( 
    <>
      <section className={s.training_program}>
        <Image src='/logo.svg' width={90} height={45} alt='logo' />
        <h2 className={s.heading}>Программа обучения</h2>
        <p className={s.description}>
          Больше 90% учеников прошли полный курс и смогли <br /> собрать свой первый компьютер
        </p>
        <div className={s.timeline}>
          {mogData.map(({label, text}) => (
            <div key={label} className={s.timeline_item}>
              <div className={s.time_content}>
                <span className={s.time_label}>{label}</span>
                <p className={s.time_text}>{text}</p>
              </div>
              <span className={s.arrow}></span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default TrainingProgram;