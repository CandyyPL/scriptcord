import supabase from '@/db/db.ts'
import { TData as RTData } from '@/views/Auth/Auth.tsx'

type TData = {
  email: string
  password: string
}

export const register = async (data: RTData) => {
  const newData: TData = { email: data.email, password: data.password }

  const mails = await supabase.from('userMails').select('email')
  const alreadyIn = !!mails.data?.find((v) => v.email === data.email)

  if (!alreadyIn) {
    await supabase.auth.signUp(newData)
    await supabase.from('userMails').insert(data.email)
  }
}

export const login = async (data: TData) => {
  await supabase.auth.signInWithPassword(data)
}

export const logout = async () => {
  const user = await supabase.auth.getUser()

  if (user.data?.user) await supabase.auth.signOut()
}

export const getSession = async () => {
  const session = await supabase.auth.getSession()
  return session
}
