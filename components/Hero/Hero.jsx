import React from 'react';
import s from './Hero.module.scss'
import { time } from '@/constants/constants';

const Hero = () => {
    return (
        <>
            <div className={s.hero}>
                <div className={s.container}>
                    <div className={s.content}>
                        <h1>Первый курс <br />
                            по компьютерной сборке
                        </h1>
                        <div className={s.time}>
                            {time.map((data) => (
                                <div id={data.id} className={s.block}>
                                    <h1>{data.day}</h1>
                                    <h2>{data.name}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;