import Link from 'next/link';
import Image from 'next/image';
import styles from '../components/Navigation.module.scss';
import glo from '../public/glo.png';

const Navigation = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Image src={glo} />
			</div>
			<nav className={styles.burger}>
				<div className={styles.menuToggle}>
					<input type='checkbox' />
					<span></span>
					<span></span>
					<span></span>
					<ul className={styles.ulmenu}>
						<a href='#'>
							<li>Home</li>
						</a>
						<a href='#'>
							<li>About</li>
						</a>
						<a href='#'>
							<li>Info</li>
						</a>
						<a href='#'>
							<li>Contact</li>
						</a>
						<a href='tel:+79100000000' className={styles.tel}>
							<li>8 910 000 00 00</li>
						</a>
					</ul>
				</div>
			</nav>
		</header>
	);
};
export default Navigation;
