import React, { useState } from 'react'
import '../styles/form.css';

const Form = () => {
    const [output, setOutput] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');

    const formSubmit = (e) => {
        e.preventDefault();

        const user = {
            firstname,
            lastname,
            email,
            bio
        }

        const formData = JSON.stringify(user);
        setOutput(formData);
        clearForm();
    }

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setBio('');
    }

    return (
        <>
            <div>
                <div className='form-output'>
                    <p> Output </p>
                    <div>  {output} </div>
                </div>
                <form onSubmit={formSubmit} className='form-container'>
                    <div>
                        <label data-testid='Firstname'>Firstname</label>
                        <input
                            placeholder='Firstname'
                            name='firstname'
                            type='text'
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label data-testid='Lastname'>Lastname</label>
                        <input
                            placeholder='Lastname'
                            name='lastname'
                            type='text'
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label data-testid='Email'>Email</label>
                        <input
                            placeholder='Email'
                            name='email'
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label data-testid='Bio'>Bio</label>
                        <input
                            placeholder='Bio'
                            name='bio'
                            type='text'
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </div>
                    <div>
                        <button name='save' type='submit'>Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form