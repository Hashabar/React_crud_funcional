import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Sexo</th>
        <th>Idade</th>
        <th>Hobby</th>
        <th>Data de nascimento</th>
        <th>Ação</th>
      </tr>
    </thead>
    <tbody>
      {props.developers.length > 0 ? (
        props.developers.map(developer => (
          <tr key={developer.id}>
            <td>{developer.name}</td>
            <td>{developer.Sexo}</td>
            <td>{developer.Idade}</td>
            <td>{developer.Hobby}</td>
            <td>{developer.Data_de_nascimento}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(developer)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(developer.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Sem Usuário Cadastrado!</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
