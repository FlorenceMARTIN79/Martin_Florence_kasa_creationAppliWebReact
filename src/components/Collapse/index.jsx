import styles from './collapse.module.css';
import { useState, useRef } from 'react';
import vectorToOpen from '../../assets/vectorToOpen.svg';
import vectorToClose from '../../assets/vectorToClose.svg';

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
                    <span
                        className={
                            props.pageTitle === 'APropos'
                                ? styles.collapseButtonTitleAPropos
                                : styles.collapseButtonTitle
                        }
                    >
                        {props.label}
                    </span>
                    {isOpen ? (
                        <img
                            src={vectorToClose}
                            alt="chevron"
                            className={styles.vectorImg}
                        />
                    ) : (
                        <img
                            src={vectorToOpen}
                            alt="chevron"
                            className={styles.vectorImg}
                        />
                    )}
                </div>
            </button>
            <div className={styles.collapseContent}>
                <div
                    className={
                        props.pageTitle === 'APropos'
                            ? styles.collapseContentDetailAPropos
                            : styles.collapseContentDetail
                    }
                    ref={contentRef}
                    style={
                        isOpen
                            ? {
                                  height:
                                      contentRef.current.scrollHeight +
                                      5 +
                                      'px',
                              }
                            : { height: '0px' }
                    }
                >
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Collapse;
