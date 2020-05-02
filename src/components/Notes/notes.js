import firebase from 'firebase';
import  { DATABASE_CONFIG } from './FirebaseConfig/firebaseConfig.js';
import 'firebase/database';
import React, { Component } from 'react';
//import './styles/notes.css';
import NotesComponent from './notesComponent';
import AddNotes from './addNotes';

class Notes extends Component{
    constructor (props){
        super (props);
        this.state = {
            notes: [

            ]
        };

        this.geekNotes = firebase.initializeApp(DATABASE_CONFIG);
        this.dataBase = this.geekNotes.database().ref().child('notes');
        this.saveNote = this.saveNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }
 //Se encarga de cargar los datos dentro del estado//
    componentDidMount() {
        const { notes } = this.state;
        this.dataBase.on('child_added', snap => {
            notes.push({
                noteId: snap.key,
                noteName: snap.val().noteName,
                noteContent: snap.val().noteContent
            })
            this.setState({ notes });
        });

        this.dataBase.on('child_removed', snap => {
            for(let i = 0; i < notes.length; i++){
                if(notes[i].noteId = snap.key) {
                    notes.splice(i, 1);
                }
            }
            this.setState({ notes });
        });
    }

    deleteNote(noteId) {
        this.dataBase.child(noteId).remove();
    }

    saveNote(note) {
        
        this.dataBase.push().set({ noteContent: note});

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
                            deleteNote = {this.deleteNote}
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