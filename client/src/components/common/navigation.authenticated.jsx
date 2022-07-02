import smallLogo from '../../assets/img/small-logo.png';
import './style.css'
import {homePage} from '../../config/routes';
import { useHistory } from 'react-router'

const NavigationAuthenticated = () => {
  const history = useHistory()

  return (
    <header className='container-md'>
      <nav className="navbar navbar-expand-lg mt-5">
        <span className="custom-href navbar-brand" onClick={() => history.push(homePage.path)}>
          <img src={smallLogo} alt="" width="56" height="56"
               className="d-inline-block align-text-top"/>
        </span>
      </nav>
    </header>
  );
};

export default NavigationAuthenticated
