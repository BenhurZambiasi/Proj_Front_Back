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
          <h4>Para listar todos clique em buscar</h4>
          <Input type="number" name="id"{...id} placeholder="informe o id do produto" />
          <Button type="submit">Buscar</Button>
        </form>
      </div>

      <div className={styles.containerList}>
        <div className={styles.list}>
          {listas.map((list, index) =>
            <div className={`animeLeft ${styles.lista}`} key={list.id}>
              <div className={styles.product}>
                <div className={styles.img}></div>
                <div className={styles.p}>
                  <p><strong>ID :</strong>{list.id}</p>
                  <p><strong>Nome: </strong> {list.name}</p>
                  <p><strong>Descrição: </strong> {list.descricao}</p>
                  <p><strong>Manual:</strong> {list.manual}</p>
                </div>
              </div>
            </div>)}

        </div>
      </div>
    </div>
  )
}

export default Listar
