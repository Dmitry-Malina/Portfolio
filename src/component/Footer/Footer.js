import React from 'react';
import styles from './Footer.module.css'
import vk from '../../img/vk.svg'
import telegram2 from '../../img/telegram2.svg'
import lin from '../../img/linkedin.svg'
import Flip from 'react-reveal/Flip'
function Footer() {
  let vk1=vk;
  let telegram=telegram2;
  let link=lin;

  return (
    <div id="contact" className={styles.footer}>
      <div className={styles.conteiner}>
      <div className={styles.con}>
        <div className={styles.name}>
  <h2 className={styles.title}> Dmitry Malinouski</h2>  
  <div className={styles.line}></div>
  </div>
  <h3 className={styles.mail}><span><p>malinov.dima18@gmail.com</p></span> 
  <span>number: +375(29)8004323</span>
  </h3>
  </div>
  <Flip top>
  <div className={styles.social}>
  <div className={styles.contacts}>
    <a href="https://vk.com/idmalinaa">
<img src={vk1}/>
</a>
  </div>
  <div className={styles.contacts1}>
    <a href="https://t.me/Dmitry_Malina">
<img  src={telegram}/>
  </a>
  </div>
  <div className={styles.contacts}>
  <a href="https://www.linkedin.com/in/dmitry-malinouski-94b510192/">
<img  src={lin}/>
  </a>
  </div>
   </div>
   </Flip>
  <div className={styles.add}>
<span>
  @2019 Все права защищены!
</span>
</div>
</div>


      
    </div>
  );
}

export default Footer;
