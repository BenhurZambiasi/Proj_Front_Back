import React from 'react';
import { Link } from 'react-router-dom'
import { UseContext } from '../../UseContext';
import useForm from '../../Hooks/useForm';

import Button from '../Forms/Button';
import Input from '../Forms/Input';

import styles from './LoginCreate.module.css';
import stylesBtn from '../Forms/Button.module.css';


const LoginCreate = () => {
  const name = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userCreate } = React.useContext(UseContext);

  
  async function handleSubmit(event) {
    event.preventDefault();
    userCreate(name.value, email.value, password.value);
  }



  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="name" {...name} />

        <Input label="Email" type="email" name="email" {...email} />

        <Input label="Senha" type="password" name="password" {...password} />
        <div className={styles.btn}>
          <Button className={styles.btn}><Link className={stylesBtn.button} to="/login">Voltar</Link> </Button>
          <Button className={styles.btn} type="submit">Cadastrar</Button>

        </div>
      </form>
    </section>
  )
};

export default LoginCreate;
