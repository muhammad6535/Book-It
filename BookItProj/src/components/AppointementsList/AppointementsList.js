import React from "react";
import ReactDOM from "react-dom";
import "./AppointementsList.css";

class AppointementsList extends React.Component {
  state = {
    ActionItemsList: [
      {
        ActionItem: "ffff",
        DueDate: "2018-08-09",
      },
      {
        ActionItem: "dddd",
        DueDate: "2018-08-09",
      },
    ],
  };

  addActionItemToState = (actionItem, dueDate) => {
    let toBeAddedActionItem = {
      ActionItem: actionItem,
      DueDate: dueDate,
    };
    this.setState((prevState) => ({
      ActionItemsList: prevState.ActionItemsList.concat(toBeAddedActionItem),
    }));
  };
  deleteActionItemFromState = (index) => {
    const ActionItemsList = [...this.state.ActionItemsList];
    ActionItemsList.splice(index, 1);
    this.setState({ ActionItemsList });
  };
  render() {
    return (
      <div>
        <ActionItemForum addActionItemToState={this.addActionItemToState} />
        <ActionItemList
          actionItemsList={this.state.ActionItemsList}
          deleteActionItemFromState={this.deleteActionItemFromState}
        />
      </div>
    );
  }
}
class ActionItemForum extends React.Component {
  state = {
    actionItem: "",
    dueDate: "",
  };

  handleChange = (event) => {
    event.persist();
    console.log(event.target.name);
    // this.setState({ actionItem: event.target.value });
    this.setState((prevState) => ({
      actionItem:
        event.target.name === "actionItem"
          ? event.target.value
          : prevState.actionItem,
      dueDate:
        event.target.name === "dueDate"
          ? event.target.value
          : prevState.dueDate,
    }));
  };
  handleSubmission = (event) => {
    event.preventDefault();
    console.log(this.state.actionItem);
    console.log(this.state.dueDate);
    this.props.addActionItemToState(this.state.actionItem, this.state.dueDate);
    this.setState((prevState) => ({
      actionItem: "",
      dueDate: "",
    }));
  };

  render() {
    return (
      <div className="formList">
        <form onSubmit={this.handleSubmission}>
          <div className="form-group">
            <label for="actionItem">Action Item:</label>
            <input
              type="text"
              className="form-control"
              id="actionItem"
              onChange={this.handleChange}
              value={this.state.actionItem}
              name="actionItem"
              required
            />
          </div>
          <div className="form-group">
            <label for="dueDate">Due Date:</label>
            <input
              type="Date"
              className="form-control"
              id="dueDate"
              name="dueDate"
              onChange={this.handleChange}
              value={this.state.dueDate}
              required
            />
          </div>
          <button type="submit" className="btn btn-default addBtn">
            Add
          </button>
        </form>
      </div>
    );
  }
}

const ActionItemList = (props) => {
  const emptyList = (length) => {
    if (length === 0) {
      return (
        <tr style={{ "text-align": "center" }}>
          <td colSpan="3">No Record</td>
        </tr>
      );
    }
  };

  const deleteActionItemFromState = (index) => () => {
    props.deleteActionItemFromState(index);
  };

  return (
    <div className="container tableList">
      <table className="table">
        <thead>
          <tr>
            <th>Sr#</th>
            <th>Action Item</th>
            <th>Due Date</th>
            <th> Delete </th>
          </tr>
        </thead>
        <tbody>
          {emptyList(props.actionItemsList.length)}
          {props.actionItemsList.map((actionItem, i) => (
            <tr key={i + 1}>
              <td>{i + 1}</td>
              <td>{actionItem.ActionItem}</td>
              <td>{actionItem.DueDate}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={deleteActionItemFromState(i)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<AppointementsList />, rootElement);

export default AppointementsList;
