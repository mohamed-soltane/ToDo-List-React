import React,  { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem  extends Component {
  getStyle = () => {
    return {
      position: 'relative',
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
    }
  }

  
  render() {
    const {id, title } = this.props.todo;
      return(
        <div style={this.getStyle()}>
          <p>
            <input type="checkbox" onChange={this.props.markComplete.bind
            (this, id)} />
            { title }</p>
            <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
        </div>
      )
       
    }
}
// PropTypes
TodoItem.propTypes = {
  addTodo: PropTypes.object.isRequired
}
 const btnStyle = {
   position: 'absolute',
   top: '8px',
   right: '4px',
   background: '#ff0000',
   color:'#fff',
   border: 'none',
   padding: '5px 5px',
   borderRadius: '50%',
   cursor: 'pionter',
   
 }


export default TodoItem;
