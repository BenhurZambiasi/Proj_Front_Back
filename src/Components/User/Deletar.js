import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UseContext } from '../../UseContext';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import styles from './Organizador.module.css'

const Deletar = () => {

  const id = useForm();
  const { deleteProduct } = React.useContext(UseContext);
  const navigate = useNavigate();

  async function handleDelete() {
    deleteProduct(id.value);
  }


  return (
    <div className={styles.organizador}>

      <div className={styles.btn}>
        <Button onClick={() => navigate('/user')}>Cadastrar</Button>
        <Button onClick={() => navigate('/user/listar')}>Listar</Button>
        <Button onClick={() => navigate('/user/atualizar')}> Atualizar Cadastro </Button>
        <Button >Excluir</Button>
      </div>
      <div className={styles.form}>

        <Input label="ID" type="number" name="id"{...id} />
        <Button onClick={handleDelete}>Excluir</Button>

      </div>

    </div>
  )
}

export default Deletar
