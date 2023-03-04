import React from 'react';
import styles from '../styles/Books.module.css';
import Form from './Form';

function Books() {
  return (
    <div>
      <ul>
        <li className={styles.list}>
          <div className={styles.AllContain}>
            <div className={styles.listContainer}>
              <p className={styles.event}>Action</p>
              <h3 className={styles.title}>The Hunger Games</h3>
              <p className={styles.name}>Suzanne Collins</p>
              <div className={styles.buttons}>
                <button type="button" className={styles.comment}>Comments</button>
                <button type="button" className={styles.verticalLine}>Remove</button>
                <button type="button" className={styles.verticalLine}>Edit</button>
              </div>
            </div>
            <div className={styles.otherSide}>
              <div className={styles.progress}>
                <div className={styles.progressCircle} />
                <div className={styles.progressOverlay} />
                <div className={styles.progressValue} />
              </div>
              <p className={styles.percentage}>
                64%
                <br />
                <span className={styles.complete}>completed</span>
              </p>
              <div className={styles.chapter}>
                <p className={styles.current}>CURRENT CHAPTER</p>
                <p className={styles.myChapter}>chapter 17</p>
                <button type="button" className={styles.update}>UPDATE PROGRESS</button>
              </div>

            </div>
          </div>
        </li>
        <li className={styles.list}>
          <div className={styles.AllContain}>
            <div className={styles.listContainer}>
              <p className={styles.event}>Action</p>
              <h3 className={styles.title}>The Hunger Games</h3>
              <p className={styles.name}>Suzanne Collins</p>
              <div className={styles.buttons}>
                <button type="button" className={styles.comment}>Comments</button>
                <button type="button" className={styles.verticalLine}>Remove</button>
                <button type="button" className={styles.verticalLine}>Edit</button>
              </div>
            </div>
            <div className={styles.otherSide}>
              <div className={styles.progress}>
                <div className={styles.progressCircle} />
                <div className={styles.progressOverlay} />
                <div className={styles.progressValue} />
              </div>
              <p className={styles.percentage}>
                64%
                <br />
                <span className={styles.complete}>completed</span>
              </p>
              <div className={styles.chapter}>
                <p className={styles.current}>CURRENT CHAPTER</p>
                <p className={styles.myChapter}>chapter 17</p>
                <button type="button" className={styles.update}>UPDATE PROGRESS</button>
              </div>

            </div>
          </div>
        </li>
        <li className={styles.list}>
          <div className={styles.AllContain}>
            <div className={styles.listContainer}>
              <p className={styles.event}>Action</p>
              <h3 className={styles.title}>The Hunger Games</h3>
              <p className={styles.name}>Suzanne Collins</p>
              <div className={styles.buttons}>
                <button type="button" className={styles.comment}>Comments</button>
                <button type="button" className={styles.verticalLine}>Remove</button>
                <button type="button" className={styles.verticalLine}>Edit</button>
              </div>
            </div>
            <div className={styles.otherSide}>
              <div className={styles.progress}>
                <div className={styles.progressCircle} />
                <div className={styles.progressOverlay} />
                <div className={styles.progressValue} />
              </div>
              <p className={styles.percentage}>
                64%
                <br />
                <span className={styles.complete}>completed</span>
              </p>
              <div className={styles.chapter}>
                <p className={styles.current}>CURRENT CHAPTER</p>
                <p className={styles.myChapter}>chapter 17</p>
                <button type="button" className={styles.update}>UPDATE PROGRESS</button>
              </div>

            </div>
          </div>
        </li>
      </ul>
      <Form />
    </div>

  );
}

export default Books;
