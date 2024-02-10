import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {verifyUser, getUser} from '@/backend/controllers/authControllers';


const handler = NextAuth({
    session:{
        strategy:'jwt'
    },
    pages:{
        signIn:'/login',
        signOut:'/'
    },
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          role:"",
          credentials: {
            username: {},
            password: {}
          },

          async authorize(credentials, req) {
            
            const user = await verifyUser(credentials.email,credentials.password)

            return user
          }
        })
      ],
      callbacks: {
        session: async (session) => {
            const {email} = session.session.user;
            const userInfo = await getUser(email);
            return {
                user:{
                    id:userInfo?._id,
                    name:userInfo?.name,
                    email:userInfo?.email,
                    role:userInfo?.role
                }
            }
        }
    }
      
  })
  
  export { handler as GET, handler as POST }
