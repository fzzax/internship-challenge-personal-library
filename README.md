# 📚 Personal Library Management App

Welcome to the **Personal Library Management App**! This is a full-stack CRUD application designed to help you manage your personal book library. Built with a Django REST API backend and a Next.js frontend, this project allows users to add, update, delete, and view books in a seamless manner.

---

## 🚀 Features

- **Full-Stack CRUD**: Create, Read, Update, and Delete book entries with ease.
- **User Authentication**: Secure login and registration for personalized experiences.
- **Responsive Design**: Built with Tailwind CSS for a modern and responsive UI.
- **RESTful API**: Utilizes Django REST Framework for efficient data handling.
- **Real-time Updates**: Changes reflect instantly in the UI.

---

## 📦 Getting Started

To get started with this project, follow the steps below:

### Prerequisites

- Python 3.8 or higher
- Node.js 14 or higher
- PostgreSQL or SQLite

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/fzzax/internship-challenge-personal-library.git
   cd internship-challenge-personal-library
   ```

2. **Set up the backend**:

   Navigate to the backend directory and install dependencies:

   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. **Configure the database**:

   Update the database settings in `settings.py` as per your environment.

4. **Run migrations**:

   ```bash
   python manage.py migrate
   ```

5. **Start the Django server**:

   ```bash
   python manage.py runserver
   ```

6. **Set up the frontend**:

   Navigate to the frontend directory and install dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

7. **Start the Next.js server**:

   ```bash
   npm run dev
   ```

8. **Access the application**:

   Open your browser and navigate to `http://localhost:3000` to view the application.

---

## 🌐 API Documentation

The application uses a RESTful API for all data interactions. Below are the main endpoints:

- **GET /api/books/**: Retrieve a list of all books.
- **POST /api/books/**: Add a new book.
- **GET /api/books/{id}/**: Retrieve details of a specific book.
- **PUT /api/books/{id}/**: Update a specific book.
- **DELETE /api/books/{id}/**: Delete a specific book.

For more detailed API documentation, refer to the [Releases section](https://github.com/fzzax/internship-challenge-personal-library/releases).

---

## 🛠 Technologies Used

- **Django**: A high-level Python web framework that encourages rapid development.
- **Django REST Framework**: A powerful toolkit for building Web APIs in Django.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **PostgreSQL**: A powerful, open-source object-relational database system.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs.

---

## 📊 Project Structure

Here's a brief overview of the project structure:

```
internship-challenge-personal-library/
├── backend/
│   ├── manage.py
│   ├── library/
│   │   ├── migrations/
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── serializers.py
│   │   └── urls.py
│   └── requirements.txt
└── frontend/
    ├── pages/
    ├── components/
    ├── styles/
    └── package.json
```

---

## 📈 Contribution Guidelines

We welcome contributions to this project! Here’s how you can help:

1. **Fork the repository**.
2. **Create a new branch**: `git checkout -b feature/YourFeatureName`.
3. **Make your changes** and commit them: `git commit -m 'Add some feature'`.
4. **Push to the branch**: `git push origin feature/YourFeatureName`.
5. **Open a pull request**.

---

## 🔗 Links

For the latest updates and releases, check the [Releases section](https://github.com/fzzax/internship-challenge-personal-library/releases). You can download and execute the latest version from there.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🧑‍🤝‍🧑 Acknowledgments

We appreciate the following resources that helped in the development of this project:

- [Django Documentation](https://www.djangoproject.com/)
- [Django REST Framework Documentation](https://www.django-rest-framework.org/)
- [Next.js Documentation](https://nextjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

---

## 📧 Contact

For any inquiries or feedback, feel free to reach out:

- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **GitHub**: [fzzax](https://github.com/fzzax)

---

Thank you for checking out the Personal Library Management App! Happy reading! 📖