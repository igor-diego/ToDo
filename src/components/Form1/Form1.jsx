import React from 'react'
import { Input } from '../Input/Input'
import { Label } from '../Label/Label'
import {Button} from '../Button/Button'
import S from './Form1.module.css'

export const Form1 = () => {
  return (
    <form >
        <Label texto='Nome:'/>
        <Input type={'text'}/>
        <Label texto='Sobrenome:' />
        <Input type={'text'}/>
        <Label texto='E-mail:' />
        <Input type={'email'} />
        <Label texto='Telefone:'/>
        <Input type={'tel'} />
        <Button texto='Proximo' />

    </form>
  )
}
