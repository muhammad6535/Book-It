import React,{useState} from "react";
import "./AppointementsList.css";

function ActionItemForum() {
  const [state,setState] = useState({
    actionItem: "",
    dueDate: "",
  });
  const handleChange = (event) => {
    event.persist();
    // this.setState({ actionItem: event.target.value });
    setState((prevState) => ({
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
  const handleSubmission = (event) => {
    event.preventDefault();
    // console.log(this.state.actionItem);
    // console.log(this.state.dueDate);
    this.props.addActionItemToState(state.actionItem, state.dueDate);
    setState((prevState) => ({
      // actionItem: "",
      dueDate: "",
    }));
  };

    return (
      <div className="formList">
        <form onSubmit={handleSubmission}>
          <div className="form-group">
            {/* <label for="actionItem">Action Item:</label>
            <input
              type="text"
              className="form-control"
              id="actionItem"
              onChange={this.handleChange}
              value={this.state.actionItem}
              name="actionItem"
              required
            /> */}
          </div>
          <div className="form-group">
            <label for="dueDate">Due Date:</label>
            <input
              type="Date"
              className="form-control"
              id="dueDate"
              name="dueDate"
              onChange={handleChange}
              value={state.dueDate}
              required
            />
          </div>
          <button type="submit" className="btn btn-default addBtn">
            Search
          </button>
        </form>
      </div>
    );
}

export default ActionItemForum;
