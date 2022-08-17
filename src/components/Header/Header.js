import './Header.scss';
import BrainFlixLogo from '../../assets/images/BrainFlix-logo.svg'

const Header = () => {


    return (
        <header className='header'>
            <img src={BrainFlixLogo} alt='brainflix logo' className='header__logo'/>
            <div className='header__mobile-container'>
                <input type='text' placeholder='Search' className='header__search'/>
                <div className='header__avatar'></div>
            </div>
            <button className='header__button'>UPLOAD</button>
        </header>
    );
}

export default Header