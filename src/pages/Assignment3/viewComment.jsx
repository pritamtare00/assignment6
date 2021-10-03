import React,{useEffect, useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { v4 as uuid } from 'uuid';
import axios from "axios"
import { useHistory, useParams } from 'react-router';

export default function ViewComment() {
    const [data,setData]=useState({})
    const history =useHistory()
    const params=useParams()
    const {postId,id, name, email,body}=data
    console.log(data)
    useEffect(()=>{
        getData()
    },[])
    const getData=async()=>{
        let res=await axios.get(`https://jsonplaceholder.typicode.com/comments/${params.id}`)
            setData(res.data)
        console.log(res)
    }
   

    return (
        <div>
           <button onClick={history.push("/")}>Go Back</button>   
           <h4>Comments</h4>
           <span>Post ID</span>:<span>{postId}</span>
           <span>ID</span>:<span>{id}</span>
           <span>Name</span>:<span>{name}</span>
           <span>Email ID</span>:<span>{email}</span>
           <span>Body</span>:<span>{body}</span>
        </div>
    )
}
