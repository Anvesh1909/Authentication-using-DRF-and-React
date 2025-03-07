import React, { useState } from 'react'

const FormState = () => {

    const [ form , setForm ] = useState({ username : "", email : "" });

    const handleChange = (e) => {
        setForm({ ...form , [e.target.name] : e.target.value });
    }

    return (
        <>
            <h2>Form</h2>
        
            <h3>Username : {form.username} </h3>
            <h3>Email : {form.email} </h3>

            <table>
                <tr>
                    <td>
                        <label htmlFor="username">Username </label>
                    </td>
                    <td>            
                        : <input type="text" name="username" value={form.username} onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="email">Email </label>
                    </td>
                    <td>
                        : <input type="text" name="email" value={form.email} onChange={handleChange} />
                    </td>
                </tr>
            </table> 

        </>
    )
}

export default FormState
