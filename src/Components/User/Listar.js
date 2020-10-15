import React from 'react'
import { useNavigate } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import { UseContext } from '../../UseContext';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import styles from './Listar.module.css'

const Listar = () => {
  const id = useForm(false);
  const { listarProduct, listas } = React.useContext(UseContext);
  const navigate = useNavigate();

  async function handleList(event) {
    event.preventDefault();
    listarProduct(id.value)
  }




  return (
    <div className={styles.organizador}>

      <div className={styles.btn}>
        <Button onClick={() => navigate('/user')}>Cadastrar</Button>
        <Button >Listar</Button>
        <Button onClick={() => navigate('/user/atualizar')}> Atualizar Cadastro </Button>
        <Button onClick={() => navigate('/user/deletar')}>Excluir</Button>
      </div>
      <div className={styles.form}>
        <form className="animeLeft" onSubmit={handleList}>
          <Input label="ID" type="number" name="id"{...id} />
          <Button type="submit">Listar</Button>

        </form>
      </div>
      <div className={styles.list}>
        {listas.map((list) =>
          <div className={`animeLeft ${styles.lista}`} key={list.id}>
            <div className={styles.img}></div>
            <div>
              <p>ID: {list.id}</p>
              <p>Nome: {list.name}</p>
              <p>Descrição: {list.descricao}</p>
              <p>Manual:{list.manual}</p>
            </div>
          </div>)}
      </div>
    </div>
  )
}

export default Listar
