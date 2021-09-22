import React, { useState } from 'react'

export default function SignUp(props) {
    const [ formData, setFormData ] = useState({
        username: '',
        email: '',
        password: ''
    })

    const { username, password, email } = formData
    const { handleRegister} = props;

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
                handleRegister(formData)
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
                <label>Email</label>
                <br/>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                <label>Password</label>
                <input 
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                <br/>
                {/* <label>Location</label>
                <input 
                    id="location"
                    type="location"
                    name="location"
                    value={location}
                    onChange={handleChange}
                />
                <br/> */}
                <button>Sign Up</button>
            </form>
        </div>
    )
}
