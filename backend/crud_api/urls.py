from django.urls import path
from .views import get_books, get_single_book, create_book, full_book_update, partial_book_update, delete_book


urlpatterns = [
    path("books/", get_books, name="books"),
    path('books/<int:id>/', get_single_book, name='book'),
    path('books/create/', create_book, name='new_book'),
    path('books/<int:id>/update/', full_book_update, name='update_book'),
    path('books/<int:id>/partial-update/', partial_book_update, name='partial_book_update'),
    path('books/<int:id>/delete/', delete_book, name='delete_book'),
]
