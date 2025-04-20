import { useEffect, useState } from 'react';
import api from '../utils/api';

const initialForm = {
  title: '',
  author: '',
  genre: '',
  rating: 1,
  date_completed: '',
  notes: '',
};

const BookForm = ({ isOpen, onClose, bookToEdit, onSuccess }) => {
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (bookToEdit) {
        setForm(bookToEdit);
        } else {
        setForm(initialForm);
        }
    }, [bookToEdit]);



    // handleChange is called whenever a form input changes.
    // It updates the corresponding field in the form state.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };


    // handleSubmit handles the form submission for both creating and updating a book.
    // It sends a POST or PUT request to the backend based on whether a book is being edited.
    const handleSubmit = async (e) => {
        // Prevent the default form submission behavior (page reload)
        e.preventDefault();

        try {
            if (bookToEdit) {
                // If editing an existing book, send a PUT request to update it
                await api.put(`/books/${bookToEdit.id}/update/`, form);
                alert('Book updated.');

            } else {
                // If creating a new book, send a POST request
                await api.post('/books/create/', form);
                alert('Book added.');
            }
                onSuccess();
                onClose();
                } catch (error) {
                    // Handle errors and show a user-friendly message
                    alert('Error saving book.');
                    console.error(error);
            }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
        <form className="book-form" onSubmit={handleSubmit}>
            <div className="form-header">
            <h2>{bookToEdit ? 'Edit Book' : 'Add Book'}</h2>
            <button type="button" className="close-btn" onClick={onClose}>×</button>
            </div>

            <div className="form-group">
            <label>Title</label>
            <input name="title" value={form.title} onChange={handleChange} required />
            </div>

            <div className="form-group">
            <label>Author</label>
            <input name="author" value={form.author} onChange={handleChange} required />
            </div>

            <div className="form-group">
            <label>Genre</label>
            <select name="genre" value={form.genre} onChange={handleChange} required>
                <option value="">Select Genre</option>
                <option>Fiction</option>
                <option>Non-Fiction</option>
                <option>Sci-Fi</option>
                <option>Fantasy</option>
                <option>Biography</option>
                <option>Self-Help</option>
                <option>Other</option>
            </select>
            </div>

            <div className="form-group">
            <label>Rating</label>
            <input
                name="rating"
                type="number"
                min="1"
                max="5"
                value={form.rating}
                onChange={handleChange}
                required
            />
            </div>

            <div className="form-group">
            <label>Date Completed</label>
            <input
                name="date_completed"
                type="date"
                value={form.date_completed}
                onChange={handleChange}
                required
            />
            </div>

            <div className="form-group">
            <label>Notes</label>
            <textarea name="notes" value={form.notes} onChange={handleChange} />
            </div>

            <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="submit-btn">
                {bookToEdit ? 'Update' : 'Add'}
            </button>
            </div>
        </form>
        </div>
    );
};

export default BookForm;
