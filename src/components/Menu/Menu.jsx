import React from 'react'
import S from './Menu.module.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <section>
        <nav>
            <Link to='/'>Cadastrar</Link>
            <Link to='/Form2'>Clientes</Link>
        </nav>
    </section>
  )
}
