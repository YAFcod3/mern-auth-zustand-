import authApi from "../libs/axios"

export const loginRequest = async (email:string, password:string)=>{


  return authApi.post('/login',{
    email,password
  }  )
}


export const profileRequest= async ()=>{


  return await  authApi.get('/profile')


}