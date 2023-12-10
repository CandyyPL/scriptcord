import React, { createContext, useState, useEffect } from 'react'
import { Session } from '@supabase/supabase-js'

export type TAuthContext = {
  session: Session | null
  setSession: React.Dispatch<React.SetStateAction<Session | null>>
}

export const AuthContext = createContext<TAuthContext>({
  session: null,
  setSession: () => {},
})

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storageSession = sessionStorage.getItem('session')

    if (storageSession !== null) setSession(JSON.parse(storageSession))
    else setLoading(false)
  }, [])

  useEffect(() => {
    if (session !== null) sessionStorage.setItem('session', JSON.stringify(session))
    setLoading(false)
  }, [session])

  const provide: TAuthContext = {
    session,
    setSession,
  }

  return <AuthContext.Provider value={provide}>{!loading && children}</AuthContext.Provider>
}

export default AuthProvider
