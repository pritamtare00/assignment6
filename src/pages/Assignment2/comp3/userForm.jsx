import React,{useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { v4 as uuid } from 'uuid';


export default function UserForm() {
    var styling = {
        div:{
          border: "1px solid red"
        }, h4: {
          margin: "2px",
          padding: "5px",
          color:"blue"
        }
      }
    const [data,setData]=useState(
        {
            id:"",
            name:"",
            dob:"",
            gender:""
        }
    )
    const[list,setList]=useState([])
    const[display,setDisplay]=useState(false)
    const {id,name,dob,gender}=data

    console.log(data)
    const handleChange=(e)=>{
        console.log(e.target.value)
        setData({
            ...data,[e.target.name]:e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setDisplay(true)
        setList([...list,{...data,id:uuid()}])
    }

    const handleDelete=(id)=>{
        console.log(id)
    }
    console.log(list)
    return (
        <div style={styling.div}>
            <h4 style={styling.h4}>css binding</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>
                        Name
                    </Form.Label>
                    <Form.Control type="text" name="name" value={name} onChange={handleChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Date of birth
                    </Form.Label>
                    <Form.Control type="date" name="dob" value={dob} onChange={handleChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Gender
                    </Form.Label>
                    <Form.Check type="radio" label="Male" name="gender" value="Male" onChange={handleChange}/>
                    <Form.Check type="radio" label="Female" name="gender" value="Female" onChange={handleChange}/>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>

            {(display) && (
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Gender</th>
                    </tr>
                    {list?.map((e,i)=>{
                        return(
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.dob}</td>
                                <td>{e.gender}</td>
                                <td><Button onClick={()=>handleDelete(e.id)}>Delete</Button></td>
                            </tr>
                        )
                    })}
                </table>
            )}
        </div>
    )
}
