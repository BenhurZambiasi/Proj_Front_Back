import React from 'react'
import { useNavigate } from 'react-router-dom';
import Api from './Services/Api'


export const UseContext = React.createContext();

export const UseStorage = ({ children }) => {
  const [data, setData] = React.useState('');

  const navigate = useNavigate();

  //cadastro de usuários
  function userCreate(name, email, password) {
    Api.post('/users', { name, email, password }).then(response => {
      if (response.data.id) {
        navigate('/login')
      } else {
        alert("Não foi possível cadastrar.")
      }
    }, () => {
      alert("E-mail já existe")
    })
  }

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
      alert("E-mail ou senha inválido")
    })
  }


  //cadastro de produto
  function createProduct(name, descricao, logo, manual) {
    Api.post('/products', { name, descricao, logo, manual }, {
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token')
      }
    }).then(response => {
      if (response.data.id) {
        console.log(response)
      } else {
        alert("Não foi possível cadastrar.")
      }
    }, (err) => {
      console.log(err)
      alert(err)
    })
  }


  //lista todos os produtos
  function listarProduct(id) {
    if (id == null) {
      Api.get('/products', {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token')
        }
      }).then(response => {
        if (response.statusText === "OK") {
          console.log(response)
        } else {
          alert("")
        }
      }, (err) => {
        console.log(err)
        alert(err)
      })
    } else {
      Api.get(`/products/${id}`, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token')
        }
      }).then(response => {
        if (response.statusText === "OK") {
          console.log(response)
        } else {
          alert("")
        }
      }, (err) => {
        console.log(err)
        alert(err)
      })
    }
  }




  //atualiar cadastro
  function updateProduct(id, name, descricao, logo, manual) {
    Api.put('/products', { id, name, descricao, logo, manual }, {
      headers: {
        Authorization: 'Bearer ' + sessionStorage.getItem('token')
      }
    }).then(response => {
      if (response.data.id) {
        console.log(response)
      } else {
        alert("Não foi possível cadastrar.")
      }
    }, (err) => {
      console.log(err)
      alert(err)
    })
  }

  return (
    <UseContext.Provider value={{ userLogin, userCreate, createProduct, listarProduct, updateProduct, data }}>
      {children}
    </UseContext.Provider>
  )
}

export default UseStorage
