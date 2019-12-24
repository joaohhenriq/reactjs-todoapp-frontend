import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleAdd() {
        console.log(this.state.description)
    }

    handleChange(e) { //event -> has the target(input), and input has the value
        this.setState({
            ...this.state, description: e.target.value
        })
    }

    render() {
        return (
            <div>
                <PageHeader name='Tasks' small='Register'></PageHeader>
                <TodoForm description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                ></TodoForm>
                <TodoList ></TodoList>
            </div>
        )
    }
}