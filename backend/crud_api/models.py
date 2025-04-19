from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class Book(models.Model):
    # defining the genre choices for consistency. For improvement, it could be normalized
    # for flexibility

    GENRE_CHOICES = [
        ('Fiction', 'Fiction'),
        ('Non-Fiction', 'Non-Fiction'),
        ('Sci-Fi', 'Sci-Fi'),
        ('Fantasy', 'Fantasy'),
        ('Biography', 'Biography'),
        ('Self-Help', 'Self-Help'),
        ('Other', 'Other'),
    ]
    title = models.CharField(max_length=150)
    author = models.CharField(max_length=100)
    genre = models.CharField(max_length=50, choices=GENRE_CHOICES)
    rating = models.PositiveSmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    date_completed = models.DateField(null=True, blank=True)
    notes = models.TextField(blank=True)

    def __str__(self):
        return f"{self.title} - {self.author}"
    