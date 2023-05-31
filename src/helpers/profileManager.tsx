
// Components
import { ProfileLogin } from "../components/Main/Profile/ProfileLogin/ProfileLogin"
import { ProfileRegister } from "../components/Main/Profile/ProfileSignin/ProfileRegister"
import { ProfileLogued } from "../components/Main/Profile/ProfileLogued/ProfileLogued"

export const ProfileStateManager = ({logued, isRegistered, handleErrors, handleSwap, setLogued}: any)=>{
  if(!logued || logued.status === 'bad'){
    if(isRegistered){
      return <ProfileLogin handleErrors={ handleErrors }/>
    }else{
      return <ProfileRegister handleSwap={ handleSwap } handleErrors={ handleErrors }/>
    }
  }else{
    return <ProfileLogued name={logued.name} email={logued.email} setLogued={setLogued}/>
  }
}

