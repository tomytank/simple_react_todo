import React from "react";
//import React, {Component} from "react";
// import data from "./data";
//https://5ea938770ebc1d001649091c.mockapi.io/api/d2/
import "./TodoList.css";

import TodoItems from "./TodoItems";

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.markCompleted = this.markCompleted.bind(this);
    }

    addItem(e) {
        if(this._inputElement.value !=="") {
            const newItem = {
                text: this._inputElement.value,
                key: Date.now(),
                state: ""
            };
            this.setState((prevState) => {
                return {
                    items:prevState.items.concat(newItem)
                };
            });
            this._inputElement.value = "";
        }
        // console.log(this.state.items);
        e.preventDefault();
    }
    markCompleted() {

        





        const styleObj = {
            textDecoration: "line-through",

        }
        console.log("Item was clicked");
        return(styleObj);
        // return {"text-decoration: line-through"};
    }
    deleteItem(key) {
        const filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });
        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className = "todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                        placeholder ="Enter Task!">
                        </input>
                        <button type="submit">Add an Entry</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} 
                delete={this.deleteItem}
                markCompleted= {this.markCompleted}/>
            </div>
        );
    }
}

export default TodoList;