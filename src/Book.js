import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddBook} from './AddModal';
import {EditBook} from './EditModal';

export class Books extends Component{

    constructor(props){
        super(props);
        this.state={books:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'book')
        .then(response=>response.json())
        .then(data=>{
            this.setState({books:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    // componentDidUpdate(){
    //     this.refreshList();
    // }

    deleteBk(empid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'employee/'+empid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {books, bid,name,auth,categ,dor,descr}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>BookId</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>DOR</th>
                        <th>Category</th>
                        <th>Description</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(b=>
                            <tr key={b.BookId}>
                                <td>{b.Name}</td>
                                <td>{b.Author}</td>
                                <td>{b.DOR}</td>
                                <td>{b.Category}</td>
                                <td>{b.Description}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        bid:b.BookId,name:b.Name,auth:b.Author,
        dor:b.DOR,categ:b.Category,descr:b.Description})}>
            Edit
        </Button>

     

        <EditBook show={this.state.editModalShow}
        onHide={editModalClose}
        bid={bid}
        name={name}
        auth={auth}
        dor={dor}
        categ={categ}
        descr={descr}
        />
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Book</Button>

                    <AddBook show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}