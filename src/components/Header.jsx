
import headerImage from '../assets/portrait2.jpeg'
import '../../general.css'
import './header.css'
import Contacts from '../UI UX/Contacts'
const Header = () => {
  return (
    <>
    <header id='#'>
        <div className="CTA__call">
            <p>Hello I'm</p>
            <p className='text__font'>Isu M. Dadzie</p>
            <p>Fullstack Developer</p>
        </div>
        <div className="cta__buttons">
            <div className="btn CV"><a href="" download>CV</a></div>
            <div className="btn github"><a href="">GitHub</a></div>
        </div>
        <div className="header__image">
            <img src={headerImage} alt="header image" />
        </div>
    </header>

    <Contacts />

    </>

  )
}

export default Header
