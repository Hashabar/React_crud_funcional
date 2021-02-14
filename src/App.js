import React, { useState, Fragment } from 'react'
import AddDeveloper from './components/AddDeveloper'
import EditDeveloperForm from './components/EditDeveloperForm'
import UserTable from './tables/UserTable'
import './index.css'

const App = () => {
	const developerData = [
		{ 
			id: 1, 
			name: 'ErickAbe', 
			Sexo: 'Masculino', 
			Idade: '20', 
			Hobby: 'Tecladista', 
			Data_de_nascimento: '1998-12-03' 
		},
	]

	const initialFormState = { id: null, name: '', Sexo: '',Idade: '', Hobby: '', Data_de_nascimento: '' }

	// Setting state
	const [ developers, setUsers ] = useState(developerData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = developer => {
		developer.id = developers.length + 1
		setUsers([ ...developers, developer ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(developers.filter(developer => developer.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(developers.map(developer => (developer.id === id ? updatedUser : developer)))
	}

	const editRow = developer => {
		setEditing(true)

		setCurrentUser({ id: developer.id, name: developer.name, Sexo: developer.Sexo, Idade: developer.Idade, Hobby: developer.Hobby, Data_de_nascimento: developer.Data_de_nascimento })
	}

	return (
		<div className="container">
			<h1>Base de Desenvolvedores</h1>
			<div className="flex-row">
				<div className="flex-column">
					{editing ? (
						<Fragment>
							<h2>Editar usuário</h2>
							<EditDeveloperForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Usuário</h2>
							<AddDeveloper addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>Lista de Usuário</h2>
					<UserTable developers={developers} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App
