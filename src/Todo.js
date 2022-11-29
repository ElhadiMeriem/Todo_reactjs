import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css" ;

class Todo extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            taskvalue : "",
            tasks : [
                {id : 1 , task :"Buy Groceries for Next week"} ,
                {id : 2 , task : "Renew Car Insurrance" },
                {id : 3 , task: "Sign up for online course"}
            ]
        }
    }
    add = (event) =>{
        event.preventDefault();
        let newObject = {
            id :  [...this.state.tasks].pop().id+1 ,
            task : this.state.taskvalue,
        }
        this.setState(
            {
                tasks : [...this.state.tasks , newObject]

            }
        )
        

    }
    
    handleChange=(e) =>
    {
        let task = e.target.value;
        this.setState(
            {
            taskvalue : task
            }
        )

    }
    delete = (t) =>{
        let copiedTasks = [...this.state.tasks];
        let index = copiedTasks.findIndex(x=>x.id === t.id); 
        copiedTasks.splice(index, 1);
        this.setState(
            {
                tasks : copiedTasks
            }
        )
    }
    render() {

        return (
            <div>
                <div>
                    <h1>{this.state.message}</h1>
                    <form onSubmit={this.add}>
                        <div className ="form-group">
                            <label htmlFor="exampleFormControlInput1">Add New Skill</label>
                            <input type="text" className="form-control"  onChange={this.handleChange} value={this.state.taskvalue} placeholder="" />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">id</th>
                            <th scope="col">Tasks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.tasks.map((t,index)=>
                                <tr key={t.id}>
                                <td>{t.id}</td>
                                <td>{t.task}</td>
                                <td><button type="button" className="btn btn-danger" onClick={()=>this.delete(t)}> Delete</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table> 
                </div>                
            </div>
        );
    }
}

export default Todo;