import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

export default function DisplayList() {
    const [data,setData]=useState([])
    const history=useHistory()
    const getData=async()=>{
        let res=await axios.get("https://jsonplaceholder.typicode.com/comments")
        setData(res.data)
    }
    useEffect(()=>{
        getData()
    },[])

    const handleDelete=async(id)=>{
        const res=await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
        if(res.status===200){
            getData()
        }
        console.log(res)
    }
    return (
        <div>
            <Button onClick={()=>history.push("/add")}>Add Comment</Button>

            {data.length>0 &&( <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Body</th>
                        </tr>
            {data?.map((item,i)=>{
                return(
                   <tr>
                       <td>{item.name}</td>
                       <td>{item.email}</td>
                       <td>{item.body}</td>
                       <td><button onClick={()=>handleDelete(item.id)}>Delete</button>
                       <button onClick={()=>history.push(`/edit/${item.id}`)}>Edit</button>
                       <button onClick={()=>history.push(`/view/${item.id}`)}>View</button>
                       </td>
                       </tr>
                )
            })}
             </table>)}
        </div>
    )
}
