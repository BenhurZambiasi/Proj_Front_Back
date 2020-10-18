import React from 'react'
import { Navigate, Route } from 'react-router-dom';


// função para limitar o acesso  de quem não estiver logado através da URL 
const ProtectedRoute = (props) => {
  
  const login = sessionStorage.getItem('@welcome-app/email');

  if (login) return <Route {...props} />
  else if (!login) return <Navigate to="/" />
  else return null;
}

export default ProtectedRoute
