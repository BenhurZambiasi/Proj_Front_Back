import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

    const userEmail = event.target.elements.email.value;

    sessionStorage.setItem('@welcome-app/email', userEmail)
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
      <div >
        <h2>Bem vindo {username}</h2>
        <div className={styles.logout}>
          <Button onClick={handleLogout}>Sair</Button>
          <Button onClick={() => navigate('/user')}>Voltar</Button>
        </div>
      </div>
    );
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button type="submit">Entrar</Button>
      </form>
      <div className={styles.cadastro}>
        <p>Ainda não possui conta? <Link className={stylesBtn.button} to="/login/criar">Cadastre-se aqui</Link></p>

      </div>
    </section>
  );
};

export default LoginForm;
