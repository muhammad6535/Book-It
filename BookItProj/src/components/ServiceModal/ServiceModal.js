import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import "./ServiceModal.css";

export default class ServiceModal extends Component {
  constructor() {
    super();
    this.state = {
      todo_array: [],
      task: "",
      timeAvg: "",
      edit_task: "",
      edit_timeAvg: "",
    };
  }

  onChangeTask = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  onChangeTimeAvg = (e) => {
    this.setState({
      timeAvg: e.target.value,
    });
  };

  addTask = () => {
    let { todo_array, task } = this.state;
    let obj = {
      id: todo_array.length == 0 ? 1 : todo_array[todo_array.length - 1].id + 1,
      name: task,
      timeAvg: this.state.timeAvg,
      is_editing: false,
      is_done: false,
    };
    todo_array.push(obj);
    this.setState({
      todo_array: todo_array,
      task: "",
      timeAvg: "",
    });
  };

  edit = (object) => {
    let { todo_array } = this.state;

    let i = todo_array.findIndex((task) => task.id === object.id);
    todo_array[i].is_editing = !todo_array[i].is_editing;

    todo_array.map((task) => {
      task.id !== object.id
        ? (task.is_editing = false)
        : (task.is_editing = task.is_editing);
      return task;
    });

    this.setState({
      todo_array: todo_array,
      edit_task: object.name,
      edit_timeAvg: object.timeAvg,
    });
  };

  editTask = (task) => {
    this.setState({
      edit_task: task,
    });
  };

  editTimeAvg = (timeAvg) => {
    this.setState({
      edit_timeAvg: timeAvg,
    });
  };

  saveEditTask = (object) => {
    let { todo_array, edit_task, edit_timeAvg } = this.state;
    let i = todo_array.findIndex((task) => task.id === object.id);
    todo_array[i].name = edit_task;
    todo_array[i].timeAvg = edit_timeAvg;

    this.setState(
      {
        todo_array: todo_array,
        edit_task: "",
        edit_timeAvg: "",
      },
      (e) => {
        this.edit(object);
      }
    );
  };

  delete = (object) => {
    let { todo_array } = this.state;
    let i = todo_array.findIndex((task) => task.id === object.id);
    todo_array.splice(i, 1);
    this.setState({
      todo_array: todo_array,
    });
  };

  done = (object) => {
    let { todo_array } = this.state;
    let i = todo_array.findIndex((task) => task.id === object.id);
    todo_array[i].is_done = true;

    this.setState({
      todo_array: todo_array,
    });
  };

  render() {
    return (
      <div className="Container">
        <div>
          <TextField
            id="standard-basic"
            autoComplete="off"
            value={this.state.task}
            onChange={this.onChangeTask}
            placeholder="Add Service Name"
            required
          />
          <TextField
            id="standard-basic"
            autoComplete="off"
            value={this.state.timeAvg}
            onChange={this.onChangeTimeAvg}
            placeholder="Add Service TimeAvg"
            required
          />
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.task == "" || this.state.timeAvg == ""}
            onClick={this.addTask}
          >
            Add
          </Button>
        </div>

        {this.state.todo_array.length > 0 ? (
          <div>
            <table className="centerTable" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Services</th>
                  {/* <th>Action</th> */}
                </tr>
              </thead>
              {this.state.todo_array.map((object, i) => {
                return (
                  <tbody>
                    <tr>
                      <td>
                        {object.is_editing ? (
                          <div>
                            <TextField
                              id="standard-basic"
                              value={this.state.edit_task}
                              onChange={(e) => this.editTask(e.target.value)}
                              required
                            />
                            <TextField
                              id="standard-basic"
                              value={this.state.edit_timeAvg}
                              onChange={(e) => this.editTimeAvg(e.target.value)}
                              required
                            />
                          </div>
                        ) : object.is_done ? (
                          <s>
                            {object.timeA}: {object.timeAvg}
                          </s>
                        ) : (
                          <span>
                            {object.name}: {object.timeAvg}
                          </span>
                        )}
                      </td>
                      <td>
                        {object.is_editing ? (
                          <div>
                            <Button
                              className="button_style"
                              variant="outlined"
                              color="primary"
                              size="small"
                              disabled={this.state.edit_task == ""}
                              onClick={(e) => this.saveEditTask(object)}
                            >
                              Save
                            </Button>
                            <Button
                              className="button_style"
                              variant="outlined"
                              color=""
                              size="small"
                              onClick={(e) => this.edit(object)}
                            >
                              Cancel
                            </Button>
                          </div>
                        ) : (
                          <div>
                            <Button
                              className="button_style"
                              variant="outlined"
                              color="primary"
                              size="small"
                              onClick={(e) => this.edit(object)}
                            >
                              Edit
                            </Button>
                            {/* <Button
                              className="button_style"
                              variant="outlined"
                              color="secondary"
                              size="small"
                              disabled={object.is_done}
                              onClick={(e) => this.done(object)}
                            >
                              Done
                            </Button> */}
                            <Button
                              className="button_style"
                              variant="outlined"
                              size="small"
                              onClick={(e) => this.delete(object)}
                            >
                              Delete
                            </Button>
                          </div>
                        )}
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        ) : (
          <h5>Empty List!</h5>
        )}
      </div>
    );
  }
}
