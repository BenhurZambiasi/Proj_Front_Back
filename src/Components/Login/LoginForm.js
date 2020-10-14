import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';
import { UseContext } from '../../UseContext';
import useForm from '../../Hooks/useForm';

const LoginForm = () => {

  const email = useForm();
  const password = useForm();

  const { userLogin } = React.useContext(UseContext);

  function handleSubmit(event) {
    event.preventDefault();
    userLogin(email.value, password.value);
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
