import styles from './banner.module.css';
import homeBannerImg from '../../assets/homeBannerImg.png';

function Banner() {
    return (
        <div className={styles.homeBanner}>
            <h1 className={styles.bannerTitle}>
                {' '}
                Chez vous, partout et ailleurs{' '}
            </h1>
            <div className={styles.bannerImgLayout}>
                <img
                    src={homeBannerImg}
                    alt="falaise au bord de la mer"
                    className={styles.bannerImg}
                />
            </div>
        </div>
    );
}

export default Banner;
