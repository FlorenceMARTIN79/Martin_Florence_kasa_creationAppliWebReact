import styles from './slideshow.module.css';
import { useState } from 'react';
import vectorBack from '../../assets/vectorBack.svg';
import vectorForward from '../../assets/vectorForward.svg';

function Slideshow(data) {
    const [slide, setSlide] = useState(0);

    const nextPicture = () => {
        setSlide(slide === dataArr.length - 1 ? 0 : slide + 1);
    };

    const previousPicture = () => {
        setSlide(slide === 0 ? dataArr.length - 1 : slide - 1);
    };

    const pictureNumber = slide + 1;

    let dataArr = Array.from(data.data);

    const isUniquePicture =
        dataArr.length <= 1
            ? `${styles.arrowHidden}`
            : `${styles.arrowDisplayed}`;

    return (
        <div className={styles.slideshow}>
            <button
                onClick={previousPicture}
                className={`${styles.arrowButton} ${isUniquePicture}`}
            >
                <img
                    src={vectorBack}
                    alt="flêche retour"
                    className={`${styles.slideShowVector} ${styles.vectorBack} ${isUniquePicture}`}
                />
            </button>
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
                            {pictureNumber}/{dataArr.length}
                        </span>
                    </div>
                );
            })}
            <button
                onClick={nextPicture}
                className={`${styles.arrowButton} ${isUniquePicture}`}
            >
                <img
                    src={vectorForward}
                    alt="flêche en avant"
                    className={`${styles.slideShowVector} ${styles.vectorForward} ${isUniquePicture}`}
                />
            </button>
        </div>
    );
}

export default Slideshow;
