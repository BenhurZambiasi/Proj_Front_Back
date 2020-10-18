import React from 'react'

const useList = () => {
  const [id, setId] = React.useState(' ');



  function getList(id) {
    setId(id)
    // const listName = name
    // const listDecricao = descricao
    // const listManual = manual
    // console.log(listId + " " + listName + " " + listDecricao + " " + listManual)
  }

  return { getList, id }
}

export default useList
