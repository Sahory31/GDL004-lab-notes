import React, {Component} from 'react';

class NotesComponent extends Component{
    constructor(props){
        super(props);
        this.noteName = props.noteName;
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
    }

    handleRemove(id){
        const response = window.confirm('Do you want delete this note?');
        if(response) {
        this.props.deleteNote(id);
        }
        return;
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