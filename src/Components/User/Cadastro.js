import React from 'react'
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import styles from './Cadastro.module.css'
import { useNavigate } from 'react-router-dom';
import { UseContext } from '../../UseContext';


const Cadastro = () => {

  const { createProduct } = React.useContext(UseContext);

  const name = useForm();
  const descricao = useForm();
  const logo = useForm(false);
  const manual = useForm(false);

  const navigate = useNavigate();


  function handleSubmitCadastro(event) {
    event.preventDefault();
    createProduct(name.value, descricao.value, logo.value, manual.value);
  }


  return (
    <section className={styles.organizador}>

      <div className={styles.btn}>
        <Button >Cadastrar</Button>
        <Button onClick={() => navigate('/user/listar')}>Listar</Button>
      </div >

      <div className={styles.form}>
        <form className="animeLeft" onSubmit={handleSubmitCadastro}>
          <Input label="Nome" type="text" name="name"  {...name} />
          <Input label="Descrição" type="text" name="descricao"  {...descricao} />
          <Input label="Logo" type="file" name="logo" {...logo} />
          <Input label="Manual" type="file" name="manual" {...manual} />
          <Button type="submit">Cadastrar</Button>
        </form>
      </div>

    </section>
  )
}

export default Cadastro
