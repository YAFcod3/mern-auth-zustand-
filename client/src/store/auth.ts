import {create} from 'zustand'
import { persist } from 'zustand/middleware'


type State= {
  token:string,
  profile:any
  isAuth:boolean
}


type Actions={
  setToken:(token:string)=> void
  setProfile:(profile:any)=> void
  logout:()=>void
}

export const  useAuthStore = create(persist<State & Actions>(
  
  (set)=>({

    token:' ',
    profile:null,
    isAuth:false,
    setToken:(token:string)=> set((state)=>({token:token, isAuth:true})),
    setProfile:(profile:any)=>set((state)=>({profile:profile})),
    logout:()=>               set((state) => ({isAuth:false,token:'',profile:null}))
    
    
    }),
    {
      name:'auth'
    }
))