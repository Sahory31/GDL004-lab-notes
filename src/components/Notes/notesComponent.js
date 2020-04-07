import React, {Component} from 'react';

class NotesComponent extends Component{
    constructor(props){
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
    }

    handleRemove(id){
        alert('remove Note: ' + id)

    }

    render() {
        return(
        <div className='note'>
        <span
        onClick={() => this.handleRemove(this.noteId)}>&times;</span>
        <p>{this.noteContent}</p>
        </div>

        )}
}

export default NotesComponent;