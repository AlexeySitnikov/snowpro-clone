import { OneNews } from './OneNews'
import styles from './style.module.scss'

export function NewsElement() {
  return (
    <div className={`${styles.container}`}>
      <h2>Статьи и материалы</h2>
      <div>
        <OneNews />
      </div>
      <div>
        <a href="node/3360">
          <img src="https://snowpro.ru/sites/default/files//styles/small_news/public/20let_ras_ok_0.jpg?itok=F_YzR-gu" width="150" height="100" alt="" />
          <span>14.05.2022</span>
        </a>
      </div>
      <div>
        <a href="/content/priglashenie-na-yubiley-20-let-snowpro">
          Приглашение на Юбилей, 20 лет SNOWPRO
        </a>
      </div>
      <br />
      <span>
        В этом году SNOWPRO исполняется 20 лет - 20 плодотворных лет!!!
        На праздник мы подготовили нечто особенное. Будем рады всех видеть!
        Обязательно зарегистрируйтесь и приходите! Подробности смотрите внутри
        <div>
          <a href="/content/priglashenie-na-yubiley-20-let-snowpro">Подробнее</a>
        </div>
      </span>
    </div>
  )
}
