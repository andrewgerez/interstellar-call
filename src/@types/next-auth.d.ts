import NextAuth from 'next-auth'

declare module 'next-auth' {
  export interface User {
    id: string
    name: string
    email: string
    username: string
    avatarUrl: string
  }

  interface Session {
    user: User
  }
}
