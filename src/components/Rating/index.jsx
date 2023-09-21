import styles from './rating.module.css';
import starGrey from '../../assets/starGrey.jpg';
import starColor from '../../assets/starColor.jpg';

function Rating(data) {
    let currentRating = data.data;
    console.log(currentRating);

    function isColored(ratingNumber) {
        return currentRating >= ratingNumber
            ? `${styles.starDisplayed}`
            : `${styles.starHidden}`;
    }

    return (
        <div className={styles.rentalRating}>
            <div className={styles.greyStars}>
                <img src={starGrey} alt="étoile vide" />
                <img src={starGrey} alt="étoile vide" />
                <img src={starGrey} alt="étoile vide" />
                <img src={starGrey} alt="étoile vide" />
                <img src={starGrey} alt="étoile vide" />
            </div>
            <div className={styles.coloredStars}>
                <img
                    src={starColor}
                    alt="étoile remplie"
                    className={`${isColored(1)}`}
                />
                <img
                    src={starColor}
                    alt="étoile remplie"
                    className={`${isColored(2)}`}
                />
                <img
                    src={starColor}
                    alt="étoile remplie"
                    className={`${isColored(3)}`}
                />
                <img
                    src={starColor}
                    alt="étoile remplie"
                    className={`${isColored(4)}`}
                />
                <img
                    src={starColor}
                    alt="étoile remplie"
                    className={`${isColored(5)}`}
                />
            </div>
        </div>
    );
}

export default Rating;
