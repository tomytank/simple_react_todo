import React from "react";
//import React, {Component} from "react";
import FlipMove from "react-flip-move";

class TodoItems extends React.Component {
    constructor(props){
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }
    delete(key){
        this.props.delete(key);
    }
    markCompleted(key){
        console.log(this.props.markCompleted(key));
        this.props.markCompleted(key);
    }
    
    createTasks(item) {
        // return <li onClick ={() => this.delete(item.key)} key={item.key}>{item.text}</li>
        return <li onClick ={() => {this.markCompleted()}} key={item.key}>{item.text}</li>
    }

    render() {
        const todoEntries = this.props.entries;//passed from TodoList
        const listItems = todoEntries.map(this.createTasks);
        return (
            <ul className = "theList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
};

export default TodoItems;