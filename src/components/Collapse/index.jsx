import styles from './collapse.module.css';
import { useState } from 'react';
import vector from '../../assets/vector.svg';

function Collapse(props) {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div className={styles.collapseArea}>
            <button onClick={toggle}>
                <div className={styles.collapseButtonContent}>
                    <span className={styles.collapseButtonTitle}>
                        {props.label}
                    </span>
                    <img
                        src={vector}
                        alt="chevron"
                        className={styles.vectorImg}
                    />
                </div>
            </button>
            <div className={styles.collapseOpenContener}>
                {open && (
                    <div className={styles.collapseOpen}>{props.children}</div>
                )}
            </div>
        </div>
    );
}

export default Collapse;
