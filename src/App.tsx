import { useState } from 'react'

import './App.css'
import PrimaryInput from './components/input/Primaryinput'
import { Button, Spacer } from '@chakra-ui/react'
import { useIdentityMutation } from './hooks/useIdentityMutation'

function App() {
    const {mutate} = useIdentityMutation()
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")

    const submit= ()=>{
      mutate({
        email,
        firstName,
        lastName: secondName
      })
    }


  return (
    <div className='container'>
      <form>   
        <div className="name-form-container">
      <PrimaryInput
       value={firstName} 
       onChange={event => setFirstName(event.target.value)}
        name={firstName}
        label='Nome'
        placeholder='Carla'/>

     <PrimaryInput
      value={secondName} 
      onChange={event => setSecondName(event.target.value)}
       name={secondName}
       label='Sobrenome'
       placeholder='Braga'/>
      </div>
      <Spacer height='4'/>
    <PrimaryInput
     value={email} 
     onChange={event => setEmail(event.target.value)}
      name={email}
      label='Digite seu e-mail'

      placeholder='fulano@exemplo.com'/>
        <Spacer height='4'/>
      <Button colorScheme='green' width='100%' onClick={submit}>Enviar</Button>
      </form>
      <Spacer width='6' maxWidth='4'/>
      <div className="products-details">
        <h2>Assinatura Mensal</h2>
        <Spacer height='4'/>
        <p>você irá pagar</p>
        <span>R$ 250,00</span>
        <Spacer height='4'/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod placeat corrupti maxime dolore.</p>
      </div>
 </div>
  )
}

export default App
