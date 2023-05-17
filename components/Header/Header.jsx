import React, { useState } from 'react';
import s from './Header.module.scss'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import cn from "classnames";

const Header = () => {

	const [nav, setNav] = useState(false);

	return (
		<>
			<div className={s.container}>
				<header className={s.header} style={{ position: nav ? 'fixed' : 'static' }} >
					<div className={s.header_content}>
						<a href="/"><img src="./logo.png" alt="logo" /></a>

						<ul className={nav ? cn(s.header_nav, s.active) : s.header_nav}>
							<li><a href="#">Главная</a></li>
							<li><a href="#">Курсы</a></li>
							<li><a href="#">Расписание</a></li>
							<li><a href="#">Преподаватели</a></li>
							<li><a href="#">Рассылка</a></li>
							<li><a href="#">Контакты</a></li>
						</ul>
						<button className={s.header_btn}>Зайти в кабинет</button>
						<div onClick={() => setNav(!nav)} className={s.mobile_btn}>
							{nav ? <AiOutlineClose size={30} color='white' /> : <AiOutlineMenu size={30} color='white' />}
						</div>
					</div>
				</header>

			</div>
		</>

	);
};

export default Header;