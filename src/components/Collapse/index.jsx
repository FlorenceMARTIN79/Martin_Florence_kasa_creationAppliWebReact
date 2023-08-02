import styles from './collapse.module.css';
import { useState, useRef } from 'react';
import vectorToOpen from '../../assets/vectorToOpen.svg';

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);

    const contentRef = useRef();

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.collapseArea}>
            <button onClick={toggle}>
                <div className={styles.collapseButtonContent}>
                    <span className={styles.collapseButtonTitle}>
                        {props.label}
                    </span>
                    <img
                        src={vectorToOpen}
                        alt="chevron"
                        className={styles.vectorImg}
                    />
                </div>
            </button>

            <div
                className={styles.collapseContentDetail}
                ref={contentRef}
                style={
                    isOpen
                        ? { height: contentRef.current.scrollHeight + 'px' }
                        : { height: '0px' }
                }
            >
                {props.children}
            </div>
        </div>
    );
}

export default Collapse;
