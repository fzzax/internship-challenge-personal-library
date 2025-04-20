import { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';
import BookForm from '../components/BookForm';
import api from '../utils/api';
import { Plus } from 'lucide-react';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  const fetchBooks = async () => {
    try {
      const res = await api.get('/books/');
      setBooks(res.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleEdit = (book) => {
    setEditingBook(book);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this book?')) return;
    try {
      await api.delete(`/books/${id}/delete/`);
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleAddNew = () => {
    setEditingBook(null);
    setShowForm(true);
  };

  return (
    <main className="container">
      <div className="header">
        <h1>📚 My Library</h1>
        <button className="add-button" onClick={handleAddNew}>
          <Plus size={16} style={{ marginRight: '6px' }} />
          Add Book
        </button>
      </div>

      {books.length === 0 ? (
        <p className="empty-message">No books found. Add one to get started!</p>
      ) : (
        <div className="book-grid">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {showForm && (
        <BookForm
          isOpen={true}
          bookToEdit={editingBook}
          onSuccess={fetchBooks}
          onClose={() => setShowForm(false)}
        />
      )}
    </main>
  );
}
