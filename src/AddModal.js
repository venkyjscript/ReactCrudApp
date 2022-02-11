import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class AddBook extends Component{
    constructor(props){
        super(props);
        //this.state={deps:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        //this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    // photofilename = "anonymous.png";
    // imagesrc = process.env.REACT_APP_PHOTOPATH+this.photofilename;

    // componentDidMount(){
    //     fetch(process.env.REACT_APP_API+'department')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         this.setState({deps:data});
    //     });
    // }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'book/create',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                
                Name:event.target.BookName.value,
                Author:event.target.Author.value,
                DOR:event.target.DateOfJoining.value,
                Category:event.target.Category.value,
                Description:event.target.Description.value


            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }


    
        
    

    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Add Book
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="BookName">
                        <Form.Label>BookName</Form.Label>
                        <Form.Control type="text" name="BookName" required 
                        placeholder="BookName"/>
                    </Form.Group>

                    <Form.Group controlId="Author">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" name="Author" required 
                        placeholder="Author"/>
                    </Form.Group>

                    <Form.Group controlId="DateOfJoining">
                        <Form.Label>RegDate</Form.Label>
                        <Form.Control 
                        type="date"
                        name="RegDate"
                        required
                        placeholder="DOR"
                        /></Form.Group>

                        <Form.Group controlId="Category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" name="Category" required 
                        placeholder="Category"/>

<Form.Group controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="Description" required 
                        placeholder="Description"/>
                        
                    </Form.Group>
                       
                        
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Create Book
                        </Button>
                    </Form.Group>
                </Form>
            </Col>

            
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}