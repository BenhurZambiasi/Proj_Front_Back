import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Home } from '../Assets/home.svg';
import { UseContext } from '../UseContext';


const Header = () => {
  const { data } = React.useContext(UseContext);
  const userEmail = sessionStorage.getItem('@welcome-app/email');
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/login" aria-label="Home"> <Home /> </Link>
        <h1>Área do usuário</h1>


        {userEmail ? (<p className={styles.login} > {userEmail} {data.email}  </p>) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
