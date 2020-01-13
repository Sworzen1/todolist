import React from "react";
import FlipMove from "react-flip-move"

class TodoItems extends React.Component {
    constructor(props) {
        super(props)
        this.createTask = this.createTask.bind(this)
    }
    createTask(item){
        return<li onClick={() => this.delete(item.key)}
         key={item.key}>{item.text}</li>
    }
    delete(key){
        this.props.delete(key)
    }
    render () {
        var todoEntreis = this.props.entries;
        var listItems = todoEntreis.map(this.createTask);
        return (
            <ol className="theList"> 
            <FlipMove duration={500} easing="ease-out">
            {listItems}
            </FlipMove>
            </ol>
        )
    }
}
export default TodoItems;