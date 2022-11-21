import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer className = "box-repo">
  
        <div className="id-box">
          <p className="id"> ID: {repo.id}</p>
        </div>
        <div className="firstName-box">
            <label>First name:</label>
            <h3 className="fullName">{repo.name}</h3>
          </div>
          <div className="fullName-box">
            <label>Full name:</label>
            <p className="fullName">{repo.full_name}</p>
          </div>
          <div className="btn-box">
          <a href={repo.html_url} rel="noreferrer"className = "link" target="_blank"><i class="fa-solid fa-eye"></i> </a><br />
          <a href="#"  rel="noreferrer" className="remover" onClick={handleRemove}>Remove</a>
          </div>
      

    </ItemContainer>
  )
}

export default ItemRepo;
