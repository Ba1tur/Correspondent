import React, { useState } from 'react';
import s from './Footer.module.scss'
import { motion } from 'framer-motion';

const Footer = () => {
	const [email, setEmail] = useState('');
	const [errors, setErrors] = useState({});

	const validateEmail = () => {
		const errors = {};
		if (!email.trim()) {
			errors.email = 'Поле обязательно для заполнения';
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			errors.email = 'Неправильный формат почты';
		}
		return errors;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const validationErrors = validateEmail();
		if (Object.keys(validationErrors).length === 0) {
			// Обработка отправки данных формы
			setEmail('');
			setErrors({});
		} else {
			setErrors(validationErrors);
		}
	};

	return (
		<div  className={s.container}>
			<div className={s.content}>
				<motion.h1
					initial="hidden"
					transition={{ duration: 0.7 }}
					whileInView="visible"
					variants={{
						hidden: { scale: 0 },
						visible: { scale: 1 },
					}}
				>Lorem, ipsum dolor.</motion.h1>
				<motion.p
					initial="hidden"
					transition={{ duration: 0.7 }}
					whileInView="visible"
					variants={{
						hidden: { scale: 0 },
						visible: { scale: 1 },
					}}
				>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Lorem ipsum dolor sit.</motion.p>
				<motion.form
					onSubmit={handleSubmit}
					initial="hidden"
					transition={{ duration: 0.7 }}
					whileInView="visible"
					variants={{
						hidden: { scale: 0 },
						visible: { scale: 1 },
					}}
				>
					<input
						type="text"
						placeholder='E-mail'
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>

					<button
						type="submit"
						onClick={handleSubmit}
					>
						Подписаться
					</button>
				</motion.form>
				{errors.email && <p className={s.errors}>{errors.email}</p>}
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
			</div>
		</div>
	);
};

export default Footer;