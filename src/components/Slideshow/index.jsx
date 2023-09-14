import styles from './slideshow.module.css';

function Slideshow(data) {
    let dataArr = Array.from(data.data);

    return (
        <div className={styles.slideshow}>
            {dataArr.map((item, index) => {
                return (
                    <img
                        src={item}
                        alt={'une vue de la location'}
                        key={index}
                        className={styles.slideshowPicture}
                    />
                );
            })}
        </div>
    );
}

export default Slideshow;
