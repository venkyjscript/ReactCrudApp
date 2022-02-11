import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class EditBook extends Component{
    constructor(props){
        super(props);
        //this.state={deps:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
       // this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    // photofilename = "anonymous.png";
    // imagesrc = process.env.REACT_APP_PHOTOPATH+this.photofilename;

    componentDidMount(){
        // fetch(process.env.REACT_APP_API+'book')
        // .then(response=>response.json())
        // .then(data=>{
        //     this.setState({deps:data});
        // });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+`book/${event.target.BookId.value}/update`,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                BookId:event.target.BookId.value,
                Name:event.target.BookName.value,
                Author:event.target.Author.value,
                DOR:event.target.DateOfJoining.value,
                Category:event.target.Category.value,
                Description:event.target.Description.value

            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(JSON.stringify(result));
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
            Edit Book
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="BookId">
                        <Form.Label>BookId</Form.Label>
                        <Form.Control type="text" name="BookId" required 
                        placeholder="BookId"
                        disabled
                        defaultValue={this.props.bid}/>
                    </Form.Group>

                    <Form.Group controlId="BookName">
                        <Form.Label>BookName</Form.Label>
                        <Form.Control type="text" name="BookName" required 
                        defaultValue={this.props.name}
                        placeholder="BookName"/>
                    </Form.Group>

                    <Form.Group controlId="Author">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" name="Author" required 
                        defaultValue={this.props.auth}
                        placeholder="Author"/>
                    </Form.Group>

                    <Form.Group controlId="DateOfJoining">
                        <Form.Label>RegDate</Form.Label>
                        <Form.Control 
                        type="date"
                        name="RegDate"
                        required
                        placeholder="RegDate"
                        defaultValue={this.props.dor}
                        />
                       
                        
                    </Form.Group>

                    <Form.Group controlId="Category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" name="Category" required 
                        defaultValue={this.props.categ}
                        placeholder="Category"/>
                    </Form.Group>
                    <Form.Group controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="Description" required 
                        defaultValue={this.props.descr}
                        placeholder="Description"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update 
                        </Button>
                    </Form.Group>
                </Form>
            </Col>

           
        </Row>
    </Modal.Body>
    
    {/* <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer> */}

</Modal>

            </div>
        )
    }

}