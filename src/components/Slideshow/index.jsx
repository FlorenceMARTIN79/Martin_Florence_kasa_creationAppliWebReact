import styles from './slideshow.module.css';

function Slideshow(data) {
    console.log(data.data);

    let dataArr = Array.from(data.data);
    console.table(dataArr);
    let result = Array.isArray(dataArr);
    console.log(result);
    return (
        <div className={styles.slideshow}>
            <div>
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
        </div>
    );
}

export default Slideshow;
