import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
      <h2 className='text-2xl -mt-10 mb-5'>Login</h2>
      <input className=' border mx-4 p-2 rounded-lg' value={username} onChange={(e)=>setUsername(e.target.value)} type='text' placeholder='username'/>
      <input className='border mr-4 p-2 rounded-lg' value={password} onChange={(e)=>setPassword(e.target.value)} type='text' placeholder='password'/>
      <button className='bg-blue-300 rounded-lg p-3' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
