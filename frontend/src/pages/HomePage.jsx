import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { getNotes, addNote } from '../api';

const HomePage = () => {
    const [notes, setNotes] = useState([]);
    const [noteInput, setNoteInput] = useState('');
    const { logoutUser } = useContext(AuthContext);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const response = await getNotes();
            setNotes(response.data);
        } catch {
            logoutUser();
        }
    };

    const handleAddNote = async (e) => {
        e.preventDefault();
        if (!noteInput.trim()) return;

        try {
            await addNote({ body: noteInput });
            setNoteInput('');
            fetchNotes(); // Refresh the notes list
        } catch (error) {
            console.error('Error adding note:', error);
        }
    };

    return (
        <div>
            <h2>Welcome to the Home Page!</h2>
            
            {/* Note Form */}
            <form onSubmit={handleAddNote}>
                <input
                    type="text"
                    placeholder="Write a note..."
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                    required
                />
                <button type="submit">Add Note</button>
            </form>

            {/* Notes List */}
            <ul>
                {notes.length > 0 ? (
                    notes.map(note => <li key={note.id}>{note.body}</li>)
                ) : (
                    <p>No notes available.</p>
                )}
            </ul>
        </div>
    );
};

export default HomePage;
