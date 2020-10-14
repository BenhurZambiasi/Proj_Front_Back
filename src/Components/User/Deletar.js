import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../Forms/Button';
import styles from './Organizador.module.css'

const Deletar = () => {

  const navigate = useNavigate();
  return (
    <div className={styles.organizador}>

      <div className={styles.btn}>
        <Button onClick={() => navigate('/user')}>Cadastrar</Button>
        <Button onClick={() => navigate('/user/listar')}>Listar</Button>
        <Button onClick={() => navigate('/user/atualizar')}> Atualizar Cadastro </Button>
        <Button >Excluir</Button>
      </div>
    </div>
  )
}

export default Deletar
