import { useState } from "react"

export const EmailValidation = () => {
    const [email, setEmail] = useState(" ")
    const [isValid, setIsValid] = useState(true);
    
    const handleChange = (e) => {
        let Input = e.target.value;
        setEmail(Input)
        
        const validity = /^([a-z0-9]+)@([a-z]+\.[a-z]+)$/
        setIsValid(validity.test(Input))
    }
    return (
        <>
            <h1>Email</h1>
            <input type="email" value={email} onChange={handleChange} style={{ color: isValid ? "initial" : "red"}} />
            {!isValid && <p style={{color:"red"}}>invalid email</p>}
        </>
    )
}