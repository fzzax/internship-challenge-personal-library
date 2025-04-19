from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from .models import Book
from .serializers import BookSerializer
from rest_framework.decorators import api_view

# defining the API views using function based implementation
# for more control over the implementation logic

# retrieving all the books
@api_view(['GET'])
def get_books(request):
    """retrieves and returns all the books from the database"""

    books = Book.objects.all().order_by('-date_completed')
    serializer =  BookSerializer(books, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)



# retrieving a single book by id
@api_view(['GET'])
def get_single_book(request, id):
    """retrieves and returns a single book using the ID"""

    book = get_object_or_404(Book, pk=id)
    serializer = BookSerializer(book)

    return Response(serializer.data, status=status.HTTP_200_OK)



# creating a book instance in the database
@api_view(['POST'])
def create_book(request):
    """save a new book instance in the database"""

    serializer = BookSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# updating a book in the database fully
@api_view(['PUT'])
def full_book_update(request, id):
    """fully updates a book in the database"""

    book = get_object_or_404(Book, pk=id)
    serializer = BookSerializer(book, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# partial update of a book
@api_view(['PATCH'])
def partial_book_update(request, id):
    """partially updates a book in the database"""

    book = get_object_or_404(Book, pk=id)
    serializer = BookSerializer(book, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)



# removing a book
@api_view(['DELETE'])
def delete_book(request, id):
    """removes a book from the database"""

    book = get_object_or_404(Book, pk=id)
    book.delete()

    return Response({"message": "Book deleted successfully"}, status=204)
