import React from 'react'
import { useNavigate } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import styles from './Organizador.module.css'


const Att = () => {
  const id = useForm();
  const name = useForm();
  const descricao = useForm();
  const logo = useForm();
  const manual = useForm();

  const navigate = useNavigate();

  return (
    <div className={styles.organizador}>

      <div className={styles.btn}>
        <Button onClick={() => navigate('/user')}>Cadastrar</Button>
        <Button onClick={() => navigate('/user/listar')}>Listar</Button>
        <Button > Atualizar Cadastro </Button>
        <Button onClick={() => navigate('/user/deletar')}>Excluir</Button>
      </div>
      <div className={styles.form}>
        <form className="animeLeft" >
          <Input label="ID" type="number" name="id"{...id} />
          <Input label="Nome" type="text" name="name"{...name} />
          <Input label="Descrição" type="text" name="descricao" {...descricao} />
          <Input label="Logo" type="file" name="logo" {...logo} />
          <Input label="Manual" type="file" name="manual" {...manual} />
          <Button>Atualizar Cadastro</Button>
        </form>

      </div>
    </div>
  )
}

export default Att
