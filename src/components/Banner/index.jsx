import styles from './banner.module.css';
import homeBannerImg from '../../assets/homeBannerImg.png';

function Banner() {
    return (
        <div className={styles.homeBanner}>
            <h1 className={styles.bannerTitle}>
                {' '}
                Chez Vous, partout et ailleurs{' '}
            </h1>
            <img
                src={homeBannerImg}
                alt="falaise au bord de la mer"
                className={styles.bannerImg}
            />
        </div>
    );
}

export default Banner;
