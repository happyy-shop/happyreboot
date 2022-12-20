import React from "react";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";




export const getStaticProps=async ()=>{

    const res=await fetch("http://localhost:4000/users/getAll");
    const data= await res.json();

    return{
        props:{users : data}
    }
}

const deleteUser = (id:any) => {
    axios.delete(`http://localhost:4000/users/${id}`)
      .then((res:any) => {
        console.log("deleted");
        window.location.reload();
      })
      .catch((err:any) => {
        console.log(err);
      });
  };


 const AllUsers = ({users}:any) => {
    return ( 
        <div className="users">
            <h1>All users</h1>
            {users.map((user:any)=>(
                <div key={user.id}>
                    <a className="aUser">
                        <h3>{user.username}</h3>
                        <h3>{user.email}</h3>
                        <button className="button_add1" onClick={()=>deleteUser(user["_id"])}>Delete</button>
                    </a>
                </div>
            ))}
        </div>
     );
}
 
export default AllUsers;
