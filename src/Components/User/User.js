import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Cadastro from './Cadastro';
import Att from './Att';
import Listar from './Listar';
import Deletar from './Deletar';


const User = () => {

  return (
    <div >
      <Routes>
        <Route path='/' element={<Cadastro />} />
        <Route path='atualizar' element={<Att />} />
        <Route path='listar' element={<Listar />} />
        <Route path='deletar' element={<Deletar />} />
      </Routes>
    </div>
  )
}

export default User
