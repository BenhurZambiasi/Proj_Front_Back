import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Home } from '../Assets/home.svg';
import { UseContext } from '../UseContext';


const Header = () => {
  const { data } = React.useContext(UseContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/login" aria-label="Home"> <Home /> </Link>
        <h1>Casa das Ferragens</h1>

        {data ? (<Link className={styles.login} to="/"> {data.user.email} </Link>) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}

        {/* <Link className={styles.login} to="/login"> Login / Criar  </Link> */}
      </nav>
    </header>
  );
};

export default Header;
