import React from 'react';

class Note extends React.Component {
    render() {
        return <li className='note' key={this.props.index}>{this.props.content}</li>
    }
}

export default Note;