import React,{useState} from 'react'
import axios from 'axios'
import jwt from 'jwt-decode'
function loginUser() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const SignIn=(body)=>{
        axios.post('http://localhost:4000/users/login',body).then(res=>{
          localStorage.setItem("token", res.data)
          window.location.href='/Home'

        }
        ).catch(err=>alert(err)
        )
    } 
  return (
    <div>
         <h2 className="text-center">SignIn Now</h2>
            <hr /> 
              <div className="form-group">
              <input
              onChange={e=>setEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Email Address"
               
              />
            </div>
          <div className="form-group">
              <input
              onChange={e=>setPassword(e.target.value)}

                type="text"
                className="form-control"
                placeholder="Password"
               
              />
            </div>
              <button onClick={()=>SignIn({password,email})} className="btn btn-outline-light">
                SignIn
              </button>
    </div>
  )
}

export default loginUser