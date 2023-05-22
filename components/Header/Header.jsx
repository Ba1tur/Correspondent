import React, { useEffect, useState } from 'react';
import s from './Header.module.scss'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import cn from "classnames";
import Image from 'next/image';
import logo from '../../public/logo.png'
import { motion } from 'framer-motion';

const Header = () => {

	const useBodyScrollLock = () => {
		const [isLocked, setIsLocked] = useState(null);

		useEffect(() => {
			const bodyStyle = document.body.style;

			bodyStyle.overflow = isLocked ? "hidden" : null;
		}, [isLocked]);

		return [isLocked, setIsLocked];
	};

	const [nav, setNav] = useState(false);

	const [isLocked, setIsLocked] = useBodyScrollLock();


	return (
		<>
			<div className={s.container}>
				<header className={s.header} style={{ position: nav ? 'fixed' : 'static' }} >
					<div className={s.header_content}>
						<motion.a

							initial="hidden"
							transition={{ duration: 0.7 }}
							whileInView="visible"
							variants={{
								hidden: { scale: 0 },
								visible: { scale: 1 },
							}}

							href="#"><Image src={logo} alt="logo" /></motion.a>
						<ul className={nav ? cn(s.header_nav, s.active) : s.header_nav}>
							<motion.li
								initial="hidden"
								transition={{ duration: 0.7 }}
								whileInView="visible"
								variants={{
									hidden: { scale: 0 },
									visible: { scale: 1 },
								}}

							><a href="#">Lorem</a></motion.li>
							<motion.li
								initial="hidden"
								transition={{ duration: 0.7 }}
								whileInView="visible"
								variants={{
									hidden: { scale: 0 },
									visible: { scale: 1 },
								}}

							><a href="#">Lorem</a></motion.li>
							<motion.li

								initial="hidden"
								transition={{ duration: 0.7 }}
								whileInView="visible"
								variants={{
									hidden: { scale: 0 },
									visible: { scale: 1 },
								}}

							><a href="#">Lorem</a></motion.li>
							<motion.li

								initial="hidden"
								transition={{ duration: 0.7 }}
								whileInView="visible"
								variants={{
									hidden: { scale: 0 },
									visible: { scale: 1 },
								}}

							><a href="#">Lorem</a></motion.li>
							<motion.li

								initial="hidden"
								transition={{ duration: 0.7 }}
								whileInView="visible"
								variants={{
									hidden: { scale: 0 },
									visible: { scale: 1 },
								}}

							><a href="#">Lorem</a></motion.li>
							<motion.li

								initial="hidden"
								transition={{ duration: 0.7 }}
								whileInView="visible"
								variants={{
									hidden: { scale: 0 },
									visible: { scale: 1 },
								}}

							><a href="#">Lorem</a></motion.li>
						</ul>
						<motion.button
							initial="hidden"
							transition={{ duration: 0.7 }}
							whileInView="visible"
							variants={{
								hidden: { scale: 0 },
								visible: { scale: 1 },
							}}
							className={s.header_btn}> Lorem, ipsum </motion.button>
						<motion.div
							initial="hidden"
							transition={{ duration: 0.7 }}
							whileInView="visible"
							variants={{
								hidden: { scale: 0 },
								visible: { scale: 1 },
							}}
							onClick={() => { setNav(!nav), setIsLocked(!isLocked) }} className={s.mobile_btn}>
							{nav ? <AiOutlineClose size={30} color='white' /> : <AiOutlineMenu size={30} color='white' />}
						</motion.div>
					</div>
				</header>

			</div>
		</>

	);
};

export default Header;