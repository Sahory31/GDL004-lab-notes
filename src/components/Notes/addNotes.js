import React, { Component } from 'react';

class AddNotes extends Component{
    constructor(props){
        super(props);
        this.state = {checked: false}
        this.handleChange = this.handleChange.bind(this);
        this.saveNote = this.saveNote.bind(this);
    }

    handleChange(checked){
        this.setState({ checked });
    }

    saveNote (){
        this.props.saveNote(this.noteInput.value);
        this.noteInput.value = '';
        
    }

    render(){
        return(
        <div>
        <div className ='addNotes'>
            <button className ='addNotes'
            onClick={() => this.handleChange(true)}>Write a Note</button>
        </div>
        <div className ='hiddenAddNoteWindow' hidden={this.state.checked ? false : true}>
            <div className = 'nameNotes'>
                <input 
                type = 'text' 
                className='nameNotes' 
                placeholder = 'Write the name of your note'>
                </input>
            </div>
            <div className = 'writeNote'>
                <input
                ref={input => {this.noteInput = input;}}
                type = 'text'
                className = 'writeNote'
                placeholder = 'Start write here...'/>
                <button 
                className = 'saveNote'
                onClick={this.saveNote}>Done</button> 
            </div>
                
        </div>
        </div>
        )}
}

export default AddNotes;