import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { FiEye } from 'react-icons/fi'

import { TextField } from '../../ui/components/TextField'
import { login } from '../../assets'

import * as S from './SignUp.styled'
import user from '../../service/user/user'
import { toast } from 'react-toastify'
import { SubmitButton } from '../../ui/components/SubmitButton'

type FormData = {
  fullName: string
  email: string
  password: string
  role: string
  terms: string
}

export default function SignUp() {
  const [textPass, setTextPass] = useState(true)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  async function onSubmit(data: FormData) {
    console.log("data")
    console.log(data)
    console.log(data)

    let singUpDone = await user.cadastro(data.fullName, data.email, data.password, data.role)

    console.log(singUpDone)

    if(!singUpDone) return toast.error("...")

    navigate('/dashboard', { replace: true })
  }

  return (
    <S.Container>
      <img src={login} alt='image sign up' />

      <S.Content>
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label='Nome'
            id='name'
            errorMessage={errors.fullName?.message}
            placeholder='seu nome'
            {...register('fullName', {
              required: {
                value: true,
                message: 'Todos os campos são obrigatórios',
              },
            })}
          />
          <TextField
            label='E-mail'
            id='email'
            placeholder='exemplo@gmail.com'
            type='email'
            {...register('email', {
              required: true,
            })}
          />
          <S.Password>
            <TextField
              label='Senha'
              id='password'
              placeholder='sua melhor senha'
              type={textPass ? 'password' : 'text'}
              {...register('password', {
                required: true,
              })}
            />

            <button onClick={() => setTextPass(!textPass)} type='button'>
              <FiEye size={20} />
            </button>
          </S.Password>

          <S.CheckDiv>
            <input
              type='checkbox'
              {...register('terms', {
                required: true,
              })}
            />
            <p>
              Aceito os <Link to='/termos'> Termos e condições</Link> e autorizo
              o uso de meus dados de acordo com a Declaração de privacidade.
            </p>
          </S.CheckDiv>
          
          <SubmitButton />
        </form>
      </S.Content>
    </S.Container>
  )
}
