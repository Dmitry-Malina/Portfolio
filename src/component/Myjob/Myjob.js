import React from 'react';
import styles from './Myjob.module.css'
import Title from '../Title/title';
import BlockPj from './BlockPJ';

function Myjob() {
  return (
    <div id="project" >
    <div  className={styles.myjob}>
      <div   className={styles.conteiner}>
        <div className={styles.project}>
        <Title title={"My project"}/>
        </div>
        <div className={styles.jobs}>
          <BlockPj/>
          </div>
    </div>
    </div>
    </div>
  );
}

export default Myjob;
