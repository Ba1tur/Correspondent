import Image from "next/image";
import s from './TeamLeaders.module.scss'

const mogData = [
  {
    id: 1,
    profileImg: '/profile_1.png',
    fullname: 'Дмитрий Иванов',
    spec: 'Специалист по видеокартам'
  },
  {
    id: 2,
    profileImg: '/profile_2.png',
    fullname: 'Дмитрий Иванов',
    spec: 'Специалист по видеокартам'
  },
  {
    id: 3,
    profileImg: '/profile_3.png',
    fullname: 'Дмитрий Иванов',
    spec: 'Специалист по видеокартам'
  }
]

const TeamLeaders = () => {
  return ( 
    <section className={s.team_lead}>
      <div className={s.container}>
        <div className={s.heading}>
          <Image 
            src='/logo.svg' 
            width={90} 
            height={45} 
            alt='logo' 
            style={{rotate: '180deg'}} 
          />
          <h2>Ваши преподаватели</h2>
        </div>
        <div className={s.users_cards}>
          {mogData.map(({spec, profileImg, id, fullname}) => (
            <div key={id} className={s.user_card}>
              <Image 
                src={profileImg} 
                width={190} 
                height={190} 
                alt='profile'
                style={{borderRadius: '50%'}} 
                />
              <h6 className={s.username}>{fullname}</h6>
              <span className={s.spec}>{spec}</span>
              <button className={s.btn}>Биография</button>
            </div>
          ))}
        </div>
      </div>
    </section>
   );
}

export default TeamLeaders;