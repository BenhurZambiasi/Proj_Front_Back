import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';
import { UseContext } from '../../UseContext';
import useForm from '../../Hooks/useForm';

const LoginForm = () => {

  const email = useForm('email');
  const password = useForm();

  const { userLogin } = React.useContext(UseContext);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    userLogin(email.value, password.value);
    navigate('/user')
  }

  function handleLogout() {
    sessionStorage.removeItem('@welcome-app/email')
    window.location.reload()
  }

  const username = sessionStorage.getItem('@welcome-app/email');

  if (username) {
    return (
      <div className={styles.divLogout}>
        <h2>Bem vindo {username}</h2>
        <div className={styles.logout}>
          <Button onClick={handleLogout}>Sair</Button>
          <Button onClick={() => navigate('/user')}>Home</Button>
        </div>
      </div>
    );
  }

  return (
    <section className={`animeLeft ${styles.cadLogin}`}>
      <div className={styles.login}>
        <h1 className="title">Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input label="Email" type="email" name="email" {...email} />
          <Input label="Senha" type="password" name="password" {...password} />
          <Button type="submit">Entrar</Button>
        </form>

      </div>
      <div className={styles.cadastro}>
        <p>Ainda não possui conta? <Button className={stylesBtn.button} onClick={() => navigate("/login/criar")}>Cadastre-se aqui</Button></p>

      </div>
    </section>
  );
};

export default LoginForm;
