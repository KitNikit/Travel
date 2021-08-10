import Image from 'next/image';
import styles from '../components/Footer.module.scss';
import vk from '../public/VK.png';
import instagram from '../public/Instagram.png';
import fb from '../public/FB.png';
import twitter from '../public/Twitter.png';
import youtube from '../public/Youtube.png';
import ok from '../public/OK.png';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.intro}>
				<div className={styles.title}>Travel</div>
				<div className={styles.social}>
					<a href='#'>
						<Image src={vk} />
					</a>
					<a href='#'>
						<Image src={instagram} />
					</a>
					<a href='#'>
						<Image src={fb} />
					</a>
					<a href='#'>
						<Image src={twitter} />
					</a>
					<a href='#'>
						<Image src={youtube} />
					</a>
					<a href='#'>
						<Image src={ok} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
