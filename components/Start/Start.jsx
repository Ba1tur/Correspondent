import React from 'react';
import s from './Start.module.scss'
import { start } from '@/constants/constants';

const Start = () => {
    return (
        <>
            <div className={s.container}>
                <div className={s.start}>
                    <div className={s.title}>
                        <div className={s.tag}>
                            <img src="/ico.png" alt="" />
                            <h1>Быстрый старт</h1>
                        </div>
                        <p>Больше 90% учеников прошли полный курс и смогли <br /> собрать свой первый компьютер</p>
                    </div>
                    <div className={s.content}>
                        {start.map((data) => (
                            <div id={data.id} className={s.blocks}>
                                <h1>{data.percentage}</h1>
                                <img src={data.img} alt="data" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Start;