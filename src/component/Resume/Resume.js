import React from 'react';
import styles from './Resume.module.css'

function Resume() {
  return (
    <div id="home" className={styles.resume}>
      <div className={styles.container}>
      <div className={styles.greeting}>
  <span>
Hello!
  </span>
  <span>
I am Dmitry <span>Malinouski</span>
  </span>
  <h1>
 Front-end developer
</h1>

</div>

<div className={styles.photo}>
  <img className={styles.ava} src='https://wxpcdn.gcdn.co/dcont/fb/image/crew2_1024.png' />
</div>
      </div>



      
    </div>
  );
}

export default Resume;
