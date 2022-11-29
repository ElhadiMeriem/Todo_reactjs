
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      taskvalue: "",
      tasks: [
        { id: 1, task: "Buy Groceries for Next week" },
        { id: 2, task: "Renew Car Insurrance" },
        { id: 3, task: "Sign up for online course" }
      ]
    }
  }
  add = (event) => {
    event.preventDefault();
    let newObject = {
      id: [...this.state.tasks].pop().id + 1,
      task: this.state.taskvalue,
    }
    this.setState(
      {
        tasks: [...this.state.tasks, newObject]

      }
    )
  }

  handleChange = (e) => {
    let task = e.target.value;
    this.setState(
      {
        taskvalue: task
      }
    )

  }
  delete = (t) => {
    let copiedTasks = [...this.state.tasks];
    let index = copiedTasks.findIndex(x => x.id === t.id);
    copiedTasks.splice(index, 1);
    this.setState(
      {
        tasks: copiedTasks
      }
    )
  }

  render() {
    return (
      <div>
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-lg-9 col-xl-7">
                <div className="card rounded-3">
                  <div className="card-body p-4">
                    <h4 className="text-center my-3 pb-3">To Do App</h4>
                    <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2" onSubmit={this.add}>
                      <div className="col-12">
                        <div className="form-outline">
                          <input type="text" className="form-control" onChange={this.handleChange} value={this.state.taskvalue} />
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary">Save</button>
                      </div>
                    </form>
                    <table className="table mb-4">
                      <thead>
                        <tr>
                          <th scope="col">No.</th>
                          <th scope="col">Todo item</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.tasks.map((t, index) =>
                          <tr key={t.id}>
                            <td >{t.id}</td>
                            <td>{t.task}</td>
                            <td><button type="button" className="btn btn-danger" onClick={() => this.delete(t)}> Delete</button></td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Todo;
