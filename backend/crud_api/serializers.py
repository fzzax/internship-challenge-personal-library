from rest_framework import serializers
from .models import Book


class BookSerializer(serializers.ModelSerializer):
    """Represents the book serializer"""

    class Meta:
        model = Book
        fields = '__all__'
