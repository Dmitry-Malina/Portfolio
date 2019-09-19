import React from 'react';
import styles from './BlockPj.module.css';
import krest from '../../img/kre.png';


function BlockPj() {
  return (

    <div className={styles.jobs_2}>
      <div className={styles.jobs_2_1}>
     <a href="https://github.com/Dmitry-Malina/Tic-Tak-toe"> <img className={styles.krest} src ={krest}/></a>
      </div>
      <div className={styles.jobs_2_2}>
        <span className={styles.tic}>Tic tac toe</span>
        <a href="https://github.com/Dmitry-Malina"   className={styles.more}><span>more work on ...</span></a>
      </div>
    </div>
  );
}

export default BlockPj;
