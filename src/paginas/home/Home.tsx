import React from 'react'
import './Home.css'
import imgPrincipal from './img/principal.png'

//rfce (cria toda a estrutura abaixo)
function Home() { 

  let titulo: string = "Home"

  return ( //Um componente pode retornar apenas 1 elemento, para ter mais elementos criamos o fragmento (<> </>)
    <> 
      <h1 className='titulo'>{titulo}</h1>
      <img src={imgPrincipal} alt="foto principal" className='imgPrincipal'/>
      <p>Bloco 3 - React</p>
    </>
  )
}

export default Home;