import React,{useEffect, useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { v4 as uuid } from 'uuid';
import axios from "axios"
import { useHistory, useParams } from 'react-router';

export default function EditComment() {
    const [data,setData]=useState(
        {
            postId:"",
            id:"",
            name:"",
            email:"",
            body:""
            
        }
    )
    const history =useHistory()
    const params=useParams()
    const {postId,id, name, email,body}=data

    const getData=async()=>{
        let res=await axios.get(`https://jsonplaceholder.typicode.com/comments/${params.id}`)
        if(res.status===200){
            setData(res.data)
        }
        console.log(res)
    }
    useEffect(()=>{
        getData()
    },[])
    const handleChange=(e)=>{
        setData({
            ...data,[e.target.name]:e.target.value
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const req={
            ...data,
            id:+params.id
        }
        const res=await axios.put(`https://jsonplaceholder.typicode.com/comments/${+params.id}`,req)
        if(res.status===200){
            history.push("/")
        }
        console.log(res)
    }
    return (
        <div>
               <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>
                        Name
                    </Form.Label>
                    <Form.Control type="text" name="name" value={name} onChange={handleChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Email ID
                    </Form.Label>
                    <Form.Control type="email" name="email" value={email} onChange={handleChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Body
                    </Form.Label>
                    <Form.Control type="text" name="body" value={body} onChange={handleChange}/>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}
