import React from 'react'
import { useNavigate } from 'react-router-dom';
import Api from './Services/Api'
import swal from 'sweetalert';

//sweetalert -  é uma biblioteca que permite o uso de modal personalizado no lugar de um alert() do javascript

export const UseContext = React.createContext();

export const UseStorage = ({ children }) => {
  const [data, setData] = React.useState('');
  const [listas, setList] = React.useState([]);

  const [idAtt, setIdAtt] = React.useState(' ');

  const navigate = useNavigate();

  //-------------------USUÁRIOS ------------------------------------------//
  //cadastro de usuários
  function userCreate(name, email, password) {
    Api.post('/users', { name, email, password }).then(response => {
      if (response.data.id) {
        navigate('/login')
      } else {
        swal("E-mail já existe", "", "error")
      }
    }, () => {
      swal("E-mail já existe", "", "error")
    })
  }
  //----fim da função--------//


  //Login do usuário
  function userLogin(email, password) {
    Api.post('/sessions', { email, password }).then(response => {
      if (response.data.user.id) {
        sessionStorage.setItem("token", response.data.token)
        navigate('/user')
      }
      sessionStorage.getItem('token');
      setData(response.data)
    }, (err) => {
      console.log(err)
      swal("E-mail ou senha inválido", "", "error")
    })
  }
  //----fim da função--------//

  //----------------------------PRODUTOS --------------------------------------//

  //cadastro de produto
  function createProduct(name, descricao, logo, manual) {
    Api.post('/products', { name, descricao, logo, manual }, {
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token')
      }
    }).then(response => {
      if (response.data.id) {
        swal('Cadastrado com sucesso', "", "success")

      } else {
        swal("Não foi possível cadastrar.", "já existe produto com esse o nome", "error")
      }
    }, (err) => {
      console.log(err)
      swal("Não foi possível cadastrar.", "já existe produto com esse o nome", "error")
    })
  }
  //----fim da função--------//


  //lista todos os produtos
  function listarProduct(id) {
    if (id == null) {
      Api.get('/products', {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token')
        }
      }).then(response => {
        if (response.statusText === "OK") {
          setList(response.data)
          console.log(response)
        }
      }, (err) => {
        console.log(err)
        swal("Não existem produtos cadastrados", "", "error")
      })
    } else {
      Api.get(`/products/${id}`, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token')
        }
      }).then(response => {
        if (response.statusText === "OK") {
          setList(response.data)
        } else {
          swal("Id não encontrado", "informe um id válido", "error")
        }
      }, (err) => {
        console.log(err)
        swal("Id não encontrado", "informe um id válido", "error")
      })
    }
  }
  //----fim da função--------//

  //atualiar cadastro
  function updateProduct(id, name, descricao, logo, manual) {
    Api.put(`/products/${id}`, { name, descricao, logo, manual }, {
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token')
      }
    }).then(response => {
      console.log(response)
      if (response.data.id) {
      } else {
        swal("Falha ao atualizar cadastro.", "Id inválido", "error")
      }
    }, (err) => {
      console.log(err)
      swal("Falha ao atualizar cadastro.", "Id inválido", "error")
    })
  }
  //----fim da função--------//

  //função para setar o id recebido do botão de atualizar da rota listar no campo Id da  rota atualizar
  function getListAtt(id) {
    setIdAtt(id)
  }
  //----fim da função--------//

  //Deletar Produto
  function deleteProduct(id) {
    swal({
      title: "Tem certeza que deseja excluir?",
      text: "Após exlcuir não é possível recuperar os dados ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Api.delete(`/products/${id}`, {
          headers: {
            Authorization: 'Bearer ' + sessionStorage.getItem('token')
          }
        }).then(response => {
          if (response.statusText === "OK") {
          } else {
            swal("Id não encontrado", "informe um id válido", "error")
          }
        }, (err) => {
          console.log(err)
          swal("Id não encontrado", "informe um id válido", "error")
        })
        swal("Produto excluido com sucesso!!", {
          icon: "success",
        });
      } else {
        swal("Operação cancelada!");
      }
    });
  }
  //----fim da função--------//

  return (
    <UseContext.Provider value={{ userLogin, userCreate, createProduct, listarProduct, updateProduct, deleteProduct, data, listas, getListAtt, idAtt }}>
      {children}
    </UseContext.Provider>
  )
}

export default UseStorage
