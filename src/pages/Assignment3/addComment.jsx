import React,{useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { v4 as uuid } from 'uuid';
import axios from "axios"
import { useHistory } from 'react-router';

export default function AddComment() {
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
    const {postId,id, name, email,body}=data
    const handleChange=(e)=>{
        setData({
            ...data,[e.target.name]:e.target.value
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const req={
            ...data,
            id:uuid(),
            postId:uuid()
        }
        const res=await axios.post("https://jsonplaceholder.typicode.com/comments",req)
        if(res.status===201){
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
