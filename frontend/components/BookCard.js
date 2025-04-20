// BookCard component displays a single book's data in a styled card format
// Props:
// - book: the book object to display
// - onEdit: callback when the "Edit" button is clicked
// - onDelete: callback when the "Delete" button is clicked

const BookCard = ({ book, onEdit, onDelete }) => {
    return (
      <div className="card">
        <h2>{book.title}</h2>
        <p className="subtitle">by {book.author}</p> 
  
        {/* Book details section */}
        <div className="card-details">
          <p><strong>Genre:</strong> {book.genre}</p>
  
          {/* Display star rating using ★ and ☆ characters */}
          <p>
            <strong>Rating:</strong>{' '}
            <span className="stars">
              {'★'.repeat(book.rating)}
              {'☆'.repeat(5 - book.rating)} 
            </span>
          </p>
  
          <p><strong>Completed:</strong> {book.date_completed}</p>
          <p><strong>Notes:</strong> {book.notes}</p>
        </div>
  
        {/* Action buttons */}
        <div className="actions">
          <button className="edit" onClick={() => onEdit(book)}>Edit</button>
          <button className="delete" onClick={() => onDelete(book.id)}>Delete</button>
        </div>
      </div>
    );
  };
  
  export default BookCard;
  