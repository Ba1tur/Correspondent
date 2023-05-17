import React from 'react';
import s from './Partner.module.scss'
import Image from 'next/image';
import icon from '../../public/icon-Partner.png'
import card from '../../public/Partner.png'

const Partner = () => {



    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.name}>
                    <Image src={icon} alt="icon_partner" />
                    <h1>Партнеры - топовые бренды</h1>
                </div>
                <div className={s.cards}>
                    <div className={s.card}>
                        <Image src={card} alt="card" />
                    </div>
                    <div className={s.card}>
                        <Image src={card} alt="card" />
                    </div>
                    <div className={s.card}>
                        <Image src={card} alt="card" />
                    </div>
                    <div className={s.card}>
                        <Image src={card} alt="card" />
                    </div>
                    <div className={s.card}>
                        <Image src={card} alt="card" />
                    </div> <div className={s.card}>
                        <Image src={card} alt="card" />
                    </div> <div className={s.card}>
                        <Image src={card} alt="card" />
                    </div> <div className={s.card}>
                        <Image src={card} alt="card" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;