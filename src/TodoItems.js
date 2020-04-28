import React from "react";
//import React, {Component} from "react";

class TodoItems extends React.Component {
    createTasks(item) {
        return <li key= {item.key}>{item.text}</li>
    }

    render() {
        const todoEntries = this.props.entries;//passed from TodoList
        const listItems = todoEntries.map(this.createTasks);
        return (
            <ul className = "theList">
                {listItems}
            </ul>
        );
    }
};

export default TodoItems;