import React, { Component } from 'react';
//import './styles/notes.css';
import NotesComponent from './notesComponent';
import AddNotes from './addNotes';

class Notes extends Component{
    constructor (props){
        super (props);
        this.state = {
            notes: []
        };
        this.saveNote = this.saveNote.bind(this);
    }

    deleteNote() {

    }

    saveNote(note) {
        let { notes } = this.state;
        notes.push({
            noteId: notes.length +1,
            noteName: note,
            noteContent: note
        }); 

        this.setState({ notes });

    }

    render(){
        return (
            <div className ='notesApp'>
            <div className ='navBar'>
                <h1> Aqui va a ir el NavBar</h1>
                <input type='text' className='searchInput'></input>
                <button className = 'searchBtn'>Do it!</button>
            </div>
            <div className ='notesContainer'>
                <h1>Your Notes Will Appear Here!</h1>
                <ul>
                {
                    this.state.notes.map(note => {
                        return(
                            <NotesComponent 
                            noteName = {note.noteName}
                            noteContent = {note.noteContent}
                            noteId = {note.noteId}
                            key = {note.noteId}
                            />
                        )
                    })
                }
                </ul>
                <div className = 'addNotes'>
                    <h1>Agregar nota</h1>
                    <AddNotes saveNote={this.saveNote}/>
                </div>
            </div>
            <div className = 'userOptions'>
                <h1>Aqui va a ir las opciones de usuario.</h1>
            </div>
            </div>
        );
    }
}

export default Notes;