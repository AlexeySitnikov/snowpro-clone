import styles from './style.module.scss'

export function SchoolElement() {
  return (
    <div className={`${styles.schoolElement__container}`}>
      <div className={`${styles.schoolElement__oneBlock}`}>
        <div className={`${styles.schoolElement__pictureWithLink}`}>
          <div className={`${styles.schoolElement__picture}`}>
            <a href="/content/yuzhno-sahalinsk-yuzhnyy-kurort-gornyy-vozduh">
              <img src="https://snowpro.ru/sites/default/files//styles/mini_school/public/imported/sma643.jpg?itok=e8tkR9sZ" alt="asd" />
            </a>
          </div>
        </div>
        <div className={`${styles.schoolElement__text}`}>
          <a href="/content/yuzhno-sahalinsk-yuzhnyy-kurort-gornyy-vozduh">
            <div>
              Южно-Сахалинск ( Южный) курорт...
              <br />
              05 марта-11 марта
            </div>
          </a>
        </div>
      </div>

      <hr />

      <div className={`${styles.schoolElement__oneBlock}`}>
        <div className={`${styles.schoolElement__pictureWithLink}`}>
          <div className={`${styles.schoolElement__picture}`}>
            <a href="/content/heli-ski-shkola-kamchatka">
              <img src="https://snowpro.ru/sites/default/files//styles/mini_school/public/imported/sma658.jpg?itok=lupSbpRh" alt="asd" />
            </a>
          </div>
        </div>
        <div className={`${styles.schoolElement__text}`}>
          <a href="/content/heli-ski-shkola-kamchatka">
            <div>
              Хели-ски школа (Камчатка)
              <br />
              19 марта - 25 марта
            </div>
          </a>
        </div>
      </div>

      <hr />

      <div className={`${styles.schoolElement__oneBlock}`}>
        <div className={`${styles.schoolElement__pictureWithLink}`}>
          <div className={`${styles.schoolElement__picture}`}>
            <a href="/content/arhyz-rossiya-6">
              <img src="https://snowpro.ru/sites/default/files//styles/mini_school/public/imported/sma647.jpg?itok=LdBIxxue" alt="asd" />
            </a>
          </div>
        </div>
        <div className={`${styles.schoolElement__text}`}>
          <a href="/content/arhyz-rossiya-6">
            <div>
              Архыз (Россия)
              <br />
              27 февраля - 04 марта
            </div>
          </a>
        </div>
      </div>

      <hr />

      <div className={`${styles.schoolElement__oneBlock}`}>
        <div className={`${styles.schoolElement__pictureWithLink}`}>
          <div className={`${styles.schoolElement__picture}`}>
            <a href="/content/kopaonik-serbiya-8">
              <img src="https://snowpro.ru/sites/default/files//styles/mini_school/public/imported/sma642.jpg?itok=oR1-n7Wq" alt="asd" />
            </a>
          </div>
        </div>
        <div className={`${styles.schoolElement__text}`}>
          <a href="/content/kopaonik-serbiya-8">
            <div>
              Копаоник (Сербия)
              <br />
              20 февраля - 26 февраля
            </div>
          </a>
        </div>
      </div>

      <hr />

      <div className={`${styles.schoolElement__oneBlock}`}>
        <div className={`${styles.schoolElement__pictureWithLink}`}>
          <div className={`${styles.schoolElement__picture}`}>
            <a href="/content/krasnaya-polyana-roza-hutor-rossiya-5">
              <img src="https://snowpro.ru/sites/default/files//styles/mini_school/public/imported/sma646.jpg?itok=9svSxole" alt="asasd" />
            </a>
          </div>
        </div>
        <div className={`${styles.schoolElement__text}`}>
          <a href="/content/krasnaya-polyana-roza-hutor-rossiya-5">
            <div>
              Красная Поляна : Роза Хутор
              <br />
              05 февраля - 11 февраля
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
