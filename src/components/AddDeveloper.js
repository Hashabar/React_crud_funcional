import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', Sexo: '' , Idade: '' , Hobby: '' , Data_de_nascimento: ''  }
	const [ developer, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...developer, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!developer.name || !developer.Sexo) return

				props.addUser(developer)
				setUser(initialFormState)
			}}
		>
			<label>Nome</label>
			<input type="varchar" id="input" name="name" value={developer.name} onChange={handleInputChange} />

			<label>Sexo</label>
			<input type="char" id="input" name="Sexo" value={developer.Sexo} onChange={handleInputChange} />

			<label>Idade</label>
			<input type="integer" id="input" name="Idade" max="99" min="1" pattern="[0-9]+$" value={developer.Idade} onChange={handleInputChange} />

			<label>Hobby</label>
			<input type="varchar" id="input" name="Hobby" value={developer.Hobby} onChange={handleInputChange} />

			<label>Data de nascimento</label>
			<input type="date" id="input" name="Data_de_nascimento" min="1920-01-02" value={developer.Data_de_nascimento} onChange={handleInputChange} />
			
			<button id="button_add">Adcionar Usuário</button>
		</form>
	)
}

export default AddUserForm
