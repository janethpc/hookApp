import { useState, useEffect } from "react"
import { Message } from "./message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
            username: 'janeth',
            email: 'janeth_2124@hotmail.com'
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name] : value
        })
    }

    useEffect( () => {
       // console.log('useEffect called!')
    }, []); /*las dependencias son las situaciones por las que queremos que el effecto se vuelva a disparar */
    
    useEffect( () => {
        //console.log('useEffect change!')
    }, [formState]);

    useEffect( () => {
      //  console.log('useEffect email!')
    }, [email]);


    return (
        
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type='text'
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type='email'
                className="form-control mt-2"
                placeholder="janeth_2124@hotmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === 'janeth') && <Message/>
            }

        </>
    )
}
