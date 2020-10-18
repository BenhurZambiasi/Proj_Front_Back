import React from 'react'
import { useNavigate } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import { UseContext } from '../../UseContext';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import styles from './Att.module.css'


const Att = () => {

  const { updateProduct, listarProduct, idAtt } = React.useContext(UseContext);
  
  const id = useForm();
  const name = useForm();
  const descricao = useForm();
  const logo = useForm(false);
  const manual = useForm(false);

  const navigate = useNavigate();


  function handleAtualiza() {
    updateProduct(idAtt, name.value, descricao.value, logo.value, manual.value)
    listarProduct()
    navigate('/user/listar')
  }


  return (
    <div className={styles.organizador}>

      <div  className={styles.btn}>
        <Button onClick={() => navigate('/user')}>Cadastrar</Button>
        <Button onClick={() => navigate('/user/listar')}>Listar</Button>
        <Button > Atualizar Cadastro </Button>
      </div>
      <div className={styles.form}>
        <form className="animeLeft" onSubmit={handleAtualiza}>
          <Input label="ID" type="number" name="id"{...id} value={idAtt} />
          <Input label="Nome" type="text" name="name" autoComplete="off" {...name} />
          <Input label="Descrição" type="text" name="descricao" autoComplete="off" {...descricao} />
          <Input label="Logo" type="file" name="logo" {...logo} />
          <Input label="Manual" type="file" name="manual" {...manual} />
          <Button type='submit'>Atualizar Cadastro</Button>
        </form>

      </div>
    </div>
  )
}

export default Att
