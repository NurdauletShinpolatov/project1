import cls from './Header.module.scss'

export default function Header() {
  return(
    <div className={cls.Header}>
      <ul className={cls.nav}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <h1 >Landing</h1>
      <button className={cls.callToAction}>Buy now</button>
    </div>
  )
}