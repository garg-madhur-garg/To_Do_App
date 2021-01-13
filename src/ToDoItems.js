import React, { Component } from "react";

class ToDoItems extends Component {
    constructor(props) {
        super(props);
    }
    delete(key) {
        return this.props.delete(key);
    }
    render() {
        // onClick={() => this.delete(data.key)}
        // <i class="far fa-times-circle"></i>
        let entries = this.props.entries;
        let listItems = entries.map((data) => {
            return <li key={data.key}>{data.text}
            <span id="cross">
            <i id="icon" class="fas fa-times" onClick={() => this.delete(data.key)}></i>
            </span></li>
        });
        return (
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>

        );
    }

};

export default ToDoItems