import React, { useState } from 'react'

export default function SignIn(props) {
    const [ formData, setFormData ] = useState({
        username: '',
        password: ''
    })

    const { username, password } = formData
    const { handleLogin } = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    return (
        <div>
            <form 
                className="sign-up" 
                onSubmit={(e) => {
                e.preventDefault()
                handleLogin(formData)
                }}>
                <label>Username</label>
                <br/>
                <input 
                    id="username" 
                    type="text" 
                    name="username"
                    value={username}
                    onChange={handleChange}
                /> 
                <br/>
                <label>Password</label>
                <input 
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                <br/>
                <button>Sign In</button>
            </form>
        </div>
    )
}
