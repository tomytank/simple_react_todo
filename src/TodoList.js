import React, {Component} from "react";

class TodoList extends Component {
    render() {
        return (
            <div className = "todoListMain">
                <div className="header">
                    <form>
                        <input placeholder ="Enter Task!">
                        </input>
                        
                    </form>
                </div>
            </div>
        )
    }
}