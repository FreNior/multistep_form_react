/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


export const UserForm = ({data, updateFieldHandler}) => {
  return (
    <div>
        <div className="form-control">
          <label htmlFor="name"> Nome: </label>
          <input type="name" name="name" id="name" placeholder="Digite o seu nome: " value={data.name || ""} onChange={(e) => updateFieldHandler("name", e.target.value)} required />
        </div>

        <div className="form-control">
          <label htmlFor="email"> Email: </label>
          <input type="email" name="email" id="email" placeholder="Digite o seu email: " value={data.email || ""} onChange={(e) => updateFieldHandler("email", e.target.value)} required />
        </div>
    </div>
  )
}

export default UserForm