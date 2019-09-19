import React from 'react';
import styles from './Myskills.module.css'
import logo from '../../../src/logo.svg';
import redux from '../../img/redux.svg'
import Title from '../Title/title';
import Fade from 'react-reveal/Fade'





function Myskills() {
    return (
        <div id="skills" className={styles.myskills}>
            <div className={styles.container}>
                <Title title={"My skills"} />
                <Fade bottom>
                    <div className={styles.skill}>
                    </div>
                    <div className={styles.two_2}>
                        <div className={styles.block_2}>
                            <div className={styles.logo_2}>
                                <img src="https://code.naustud.io/code-guide/img/css-logo.svg" />
                            </div>
                        </div>
                        <div className={styles.block_2}>
                            <div className={styles.logo_4}>
                                <img src="https://kaliningrad.unibix.ru/uploads/learn-javascript.png" />
                            </div>
                        </div>
                        <div className={styles.block_2}>
                            <div className={styles.logo_3}>
                                <img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/184/landscape/html5.png" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.one_1}>
                        <div className={styles.block_1}>
                            <div className={styles.logo_1}>
                                <img src={logo} />
                            </div>
                        </div>
                        <div className={styles.block_5}>
                            <div className={styles.logo_5}>
                                <img src={redux} />
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Myskills;
