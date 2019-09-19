import React from 'react';
import styles from './title.module.css';


const Title=(props)=>{
return(
    <div className={styles.blockTitle}>
        <h2 className={styles.title}>{props.title}</h2>
        <div className={styles.line}>

        </div>
    </div>
)

}

export default Title;