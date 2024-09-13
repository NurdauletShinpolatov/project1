import cls from './Hero.module.scss'
import bgImage from '../../assets/images/image.png'

export default function Hero() {
  return(
    <div className={cls.Hero}>
        <div className={cls.info}>
          <h1>Introduce Your Product Quickly & Effectively</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
        <img src={bgImage} />
    </div>
  )
}