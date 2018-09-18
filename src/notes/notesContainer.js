import React from 'react';

import Note from './note.js';

class NotesContainer extends React.Component {
    render() {
        let notes = '';

        if (this.props.notes && this.props.notes.length > 0) {
            notes = this.props.notes.map((note, index) => {
                return (<Note index={index} content={note} />);
            });
        }
        
        return <ul ref="noteList">
            {notes}
        </ul>
    }
}

export default NotesContainer