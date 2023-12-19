import supabase from '@/db/db.ts'
import { TData as FTData } from '@/views/Auth/Auth.tsx'

type TData = {
  email: string
  password: string
}

export const register = async (data: FTData) => {
  const newData: TData = { email: data.email, password: data.password }

  const mails = await supabase.from('userMails').select('email')
  const alreadyIn = !!mails.data?.find((v) => v.email === data.email)

  if (!alreadyIn) {
    await supabase.auth.signUp({ ...newData, options: { data: { username: data.username } } })
  }
}

export const login = async (data: TData) => {
  await supabase.auth.signInWithPassword(data)

  if (!(await checkForUserExistance(data.email))) {
    await supabase.from('userMails').insert(data.email)
  }
}

export const logout = async () => {
  const user = await supabase.auth.getUser()

  if (user.data?.user) await supabase.auth.signOut()
}

export const getSession = async () => {
  const session = await supabase.auth.getSession()
  return session
}

const checkForUserExistance = async (email: string) => {
  const mails = await supabase.from('userMails').select('email')
  const alreadyIn = !!mails.data?.find((v) => v.email === email)

  return alreadyIn
}
