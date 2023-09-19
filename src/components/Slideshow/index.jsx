import styles from './slideshow.module.css';
import { useState } from 'react';
import vectorBack from '../../assets/vectorBack.svg';
import vectorForward from '../../assets/vectorForward.svg';

function Slideshow(data) {
    const [slide, setSlide] = useState(0);

    let dataArr = Array.from(data.data);

    console.table(dataArr);

    return (
        <div className={styles.slideshow}>
            <img
                src={vectorBack}
                alt="flêche retour"
                className={`${styles.slideShowVector} ${styles.vectorBack}`}
            />
            {dataArr.map((pictureUrl, index) => {
                const isCurrentPicture =
                    slide === index
                        ? `${styles.pictureDisplayed}`
                        : `${styles.pictureHidden}`;

                const isCurrentIndicator =
                    slide === index
                        ? `${styles.indicatorDisplayed}`
                        : `${styles.indicatorHidden}`;

                return (
                    <div key={index} className={styles.currentPicture}>
                        <img
                            src={pictureUrl}
                            alt={'une vue de la location'}
                            key={`${pictureUrl}-${index}`}
                            className={`${styles.slideshowPicture} ${isCurrentPicture}`}
                        />
                        <span
                            className={`${styles.pictureIndicator} ${isCurrentIndicator}`}
                        >
                            {index}/{dataArr.length}
                        </span>
                    </div>
                );
            })}
            <img
                src={vectorForward}
                alt="flêche en avant"
                className={`${styles.slideShowVector} ${styles.vectorForward}`}
            />
        </div>
    );
}

export default Slideshow;
