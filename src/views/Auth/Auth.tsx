import { useState, useContext } from 'react'
import { Wrapper, AuthTitle, Form } from '@/views/Auth/Auth.styles.ts'
import { useForm, SubmitHandler } from 'react-hook-form'
import { register as authRegister, getSession, login as authLogin } from '@/db/auth.ts'
import { useNavigate } from 'react-router-dom'
import { AuthContext, TAuthContext } from '@/providers/AuthProvider.tsx'

export type TData = {
  username: string
  email: string
  password: string
  passwordConfirm: null | string
}

const Auth = () => {
  const { setSession } = useContext<TAuthContext>(AuthContext)

  const { register, reset, handleSubmit } = useForm<TData>()

  const [isUserNew, setIsUserNew] = useState<boolean>(true)

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<TData> = async (data) => {
    if (isUserNew) {
      if (data.password != data.passwordConfirm) return

      try {
        await authRegister(data)
      } catch (e) {
        console.log(e)
      }

      setIsUserNew((prev) => !prev)
    } else {
      try {
        await authLogin(data)
      } catch (e) {
        console.log(e)
      }
    }

    const session = await getSession()
    setSession(session.data?.session)
    navigate('/dashboard')

    reset({ email: '', password: '' })
  }

  return (
    <Wrapper>
      <AuthTitle>Authentication</AuthTitle>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        isUserNew={isUserNew}>
        {isUserNew && (
          <input
            type='text'
            id='username'
            placeholder='Username'
            {...register('username')}
            required
          />
        )}
        <input
          type='email'
          id='email'
          placeholder='E-mail'
          {...register('email')}
          required
        />
        <input
          type='password'
          placeholder='Password'
          {...register('password')}
          required
        />
        {isUserNew && (
          <input
            type='password'
            placeholder='Confirm password'
            {...register('passwordConfirm')}
            required
          />
        )}
        <span onClick={() => setIsUserNew((prev) => !prev)}>
          {isUserNew ? 'I already have an account' : "I don't have an account"}
        </span>
        <button type='submit'>{isUserNew ? 'REGISTER' : 'LOGIN'}</button>
      </Form>
    </Wrapper>
  )
}

export default Auth
