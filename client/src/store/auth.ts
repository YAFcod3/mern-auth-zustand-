import {create} from 'zustand'
import { persist } from 'zustand/middleware'


type State= {
  token:string,
  profile:any
}


type Actions={
  setToken:(token:string)=> void
  setProfile:(profile:any)=> void
}

export const  useAuthStore = create(persist<State & Actions>(
  
  (set)=>({

    token:' ',
    profile:null,
    setToken:(token:string)=> set((state)=>({token:token})),
    setProfile:(profile:any)=>set((state)=>({profile:profile}))
    
    
    }),
    {
      name:'auth'
    }
))