import React from 'react';
import styles from './Contact.module.css'
import Title from '../Title/title';

function Contact() {
  return (
    <div className={styles.contact}>
<div className={styles.conteiner}>
  <div className={styles.title}>
    <Title title={"Contact"}/>
  </div>
  <form className={styles.contacts}>

<input className={styles.formArea1} placeholder="Имя" type="text"></input>
<input className={styles.formArea2} placeholder="e-mail" type="text"></input>
<input className={styles.formArea3} placeholder="Сообщение" type="text" ></input>

</form>
<button className={styles.btnSubmit} type="submit">Отправить</button>
   </div>   
    </div>
  );
}

export default Contact;
