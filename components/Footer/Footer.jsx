import React from 'react';
import s from './Footer.module.scss'
import { motion } from 'framer-motion';

const Footer = () => {

	return (
		<div className={s.container}>
			<div className={s.content}>
				<motion.h1
					initial="hidden"
					transition={{ duration: 0.7 }}
					whileInView="visible"
					variants={{
						hidden: { scale: 0 },
						visible: { scale: 1 },
					}}
				>Статьи каждую неделю</motion.h1>
				<motion.p
					initial="hidden"
					transition={{ duration: 0.7 }}
					whileInView="visible"
					variants={{
						hidden: { scale: 0 },
						visible: { scale: 1 },
					}}
				>Больше 90% учеников прошли полный курс и смогли <br /> собрать свой первый компьютер</motion.p>
				<motion.form
					initial="hidden"
					transition={{ duration: 0.7 }}
					whileInView="visible"
					variants={{
						hidden: { scale: 0 },
						visible: { scale: 1 },
					}}
				>
					<input type="text" placeholder='E-mail' />
					<button>Подписаться</button>
				</motion.form>
				<div className={s.soc_icons}>
					<motion.div
						initial="hidden"
						transition={{ duration: 0.7 }}
						whileInView="visible"
						variants={{
							hidden: { scale: 0 },
							visible: { scale: 1 },
						}}
						className={s.soc}>
						<a href="#">
							<img src="./vk.png" alt="vk" />
						</a>
					</motion.div>
					<motion.div
						initial="hidden"
						transition={{ duration: 0.7 }}
						whileInView="visible"
						variants={{
							hidden: { scale: 0 },
							visible: { scale: 1 },
						}}
						className={s.soc}>
						<a href="#">
							<img src="./youtube.png" alt="youtube" />
						</a>
					</motion.div>
					<motion.div
						initial="hidden"
						transition={{ duration: 0.7 }}
						whileInView="visible"
						variants={{
							hidden: { scale: 0 },
							visible: { scale: 1 },
						}}
						className={s.soc}>
						<a href="#">
							<img src="./facebook.png" alt="facebook" />
						</a>
					</motion.div>
					<motion.div
						initial="hidden"
						transition={{ duration: 0.7 }}
						whileInView="visible"
						variants={{
							hidden: { scale: 0 },
							visible: { scale: 1 },
						}}
						className={s.soc}>
						<a href="#">
							<img src="./instagram.png" alt="instagram" />
						</a>
					</motion.div>

				</div>
				<motion.h2
					initial="hidden"
					transition={{ duration: 0.7 }}
					whileInView="visible"
					variants={{
						hidden: { scale: 0 },
						visible: { scale: 1 },
					}}
				>Templates #18. More on Figma.info</motion.h2>
			</div>
		</div>
	);
};

export default Footer;