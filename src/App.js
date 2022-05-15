import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends Component{
    state = {
        items : [],
        id : 0,
        item : "",
        editItem : false
    }
    
    handleChange = e => {
        this.setState({
            item : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        const newItem = {
            id : this.state.id,
            item : this.state.item
        }
        console.log(newItem);
        

        const updatedItem = [...this.state.items, newItem];

        this.setState({
            items : updatedItem,
            id : this.state.id +11111,
            item : "",
            editItem : false
        })
    }

    clearList = () => {
        this.setState({
            items : []
        })
    }

    handleDelete = id => {
        const sortedItem = this.state.items.filter(item => item.id !== id);

        this.setState({
            items : sortedItem
        })
    }

    handleEdit = id => {
        const filterItem = this.state.items.filter(item => item.id !== id);
        const selectedItem = this.state.items.find(item => item.id === id);
        

        this.setState({
            items : filterItem,
            item : selectedItem.item,
            id : id,
            editItem : true
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <div className="text-capitalize text-center">
                            <h3>
                                todo input
                            </h3>
                            <TodoInput item = {this.state.item}
                                       editItem = {this.state.editItem}
                                       handleChange={this.handleChange}
                                       handleSubmit={this.handleSubmit}
                            />

                            <TodoList   items = {this.state.items} 
                                        clearList = {this.clearList}
                                        handleDelete = {this.handleDelete}
                                        handleEdit = {this.handleEdit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App