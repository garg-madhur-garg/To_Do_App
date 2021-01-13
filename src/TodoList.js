import React, {Component} from "react";
import ToDoItems from "./ToDoItems";

class TodoList extends Component {      //Component is a parent class in which many functions exists

    constructor(props){
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

    }
    addItem(e) {
        // console.log(e.target[0].value);
        // console.log(this._inputElement.value);
        if(this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            }
            this.state.items.push(newItem);
            this.setState({});

            // this.setState((preState) => {
            //     return {
                    
            //     };
            // });
            // // console.log(this.state.items);

            this._inputElement.value = "";
        }
        // console.log(this.state.items);
        e.preventDefault();
    }

    deleteItem(key){
        var filteredItems = this.state.items.filter((item) => {
            return (item.key !== key)  //filter function return an array who's follow (item.key !== key) condition
        });
        
        this.setState({
            items: filteredItems
        });
    }
    render() {    //Always write HTML in render function (Its a default function)
        // let a = 10;
        return(
            <div>
                <form onSubmit = {this.addItem}>
                    <input ref={(a) => this._inputElement = a} placeholder="Daily Task">
                    </input>
                    <button id="but" type="submit">+</button>
                </form>
                <ToDoItems entries = {this.state.items} delete = {this.deleteItem}/>
                {this.props.madhur ? this.props.madhur : null}       
            </div>
        );
        
    }
};

export default TodoList