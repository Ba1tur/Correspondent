import s from './Status.module.scss'

const Status = () => {
  return (  
    <>
      <section className={s.container}>
        <div className={s.content}>
          <div className={s.left_block}>
            <button className={s.btn}>Заказать курс</button>
            <div className={s.status_data}>
              <div>
                <p className={s.text}>Учеников всего:</p>
                <p className={s.text}>Успешно закончили курс:</p>
              </div>
              <div>
                <span className={s.number}>200</span>
                <span className={s.number}>190</span>
              </div>
            </div>
          </div>
          <div className={s.rigth_block}>
            <div className={s.heading}>
              <p className={s.text}>Заработано учениками:</p>
              <span className={s.number}>400 000₽</span>
            </div>
            <div className={s.range}>
              <span className={s.range_num}></span>
            </div>
            <div className={s.range_inteval}>
              <p className={s.text}>0</p>
              <p className={s.text}>1 000 000₽</p>
            </div>
          </div>
        </div>
      </section>
    </>
   );
}

export default Status;