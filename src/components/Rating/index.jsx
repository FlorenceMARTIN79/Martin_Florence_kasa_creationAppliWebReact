import styles from './rating.module.css';
import starGrey from '../../assets/starGrey.jpg';
import starColor from '../../assets/starColor.jpg';

function Rating(data) {
    let currentRating = data.data;

    const maxRating = 5;

    function isColored(ratingNumber) {
        return currentRating >= ratingNumber
            ? `${styles.starDisplayed}`
            : `${styles.starHidden}`;
    }

    const emptyStars = Array.from({ length: maxRating }).map((_, index) => (
        <img key={index} src={starGrey} alt="étoile vide" />
    ));

    const fullStars = Array.from({ length: maxRating }).map((_, index) => (
        <img
            key={index}
            src={starColor}
            alt="étoile remplie"
            className={`${isColored(index + 1)}`}
        />
    ));

    return (
        <div className={styles.rentalRating}>
            <div className={styles.greyStars}>{emptyStars}</div>
            <div className={styles.coloredStars}>{fullStars}</div>
        </div>
    );
}

export default Rating;
