# 📚 Personal Library – Book Tracker App

A full-stack single-page web app to **Create, Read, Update, and Delete (CRUD)** books you've read — with title, author, genre, star rating, date completed, and notes. Built to showcase clean UI, modern web development skills, and API integration.



## 🛠️ What I Built & Why

I built this app as part of a coding challenge to demonstrate my ability to design and implement a full CRUD system. The app helps users maintain a simple personal library with an intuitive interface, star-based rating display, and responsive layout. 



## ⚙️ Tools & Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (React) with **Vanilla CSS**
- **Backend**: [Django](https://www.djangoproject.com/) + [Django REST Framework](https://www.django-rest-framework.org/)
- **Styling**: Handcrafted CSS for flexibility and full design control
- **Icons**: [Lucide](https://lucide.dev/) for modern UI icons



### 🚀 Getting Started

Follow these steps to run the application locally.


#### 🔧 Backend (Django + DRF)

1. **Clone the repository**, create and activate a virtual environment.
    ```bash
    python -m venv env
    source env/bin/activate
2. Install dependencies
    ```bash
    pip install -r requirements.txt     
3. Navigate to the backend folder
   ```bash
   cd backend
4. Apply migrations
    ```bash
    python manage.py migrate
5. Run the development server
    ```bash
    python manage.py runserver
The API will be available at: http://localhost:8000/api/


#### 💻 Frontend (Next.js)

1. Navigate to a different terminal and move into the frontend folder
   ```bash
   cd frontend
2. Install frontend dependencies
    ```bash
    npm install
3. Start the development server
    ```bash
    npm run dev
The app will be available at: http://localhost:3000/


## 📸 App Preview

Here’s a quick look at the UI:

![Personal Library App Screenshot](../interns-challenge/frontend/public/page.jpg)


### 🔑 Key Design Decisions

#### 🧩 Backend
- **SQLite** was used for simplicity and zero-setup during development. Also, the project small.
- Each book record includes essential fields (title, author, genre, rating, etc.) to support both data storage and frontend rendering needs
- Adopted **function-based views** for each API operation (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) to maximize control, simplicity, and readability
- Followed RESTful conventions with predictable endpoint patterns like `/books/create/`, `/books/<id>/update/`
- Used integer ratings in the database to keep logic simple and compatible with star-based rendering in the UI

### 📡 API Endpoints

Base URL: `http://localhost:8000/api/`

| Method | Endpoint                    | Description               |
|--------|-----------------------------|---------------------------|
| GET    | `/books/`                   | Retrieve list of all books |
| GET    | `/books/<id>/`              | Retrieve a specific book   |
| POST   | `/books/create/`            | Create a new book          |
| PUT    | `/books/<id>/update/`       | Fully update a book        |
| PATCH  | `/books/<id>/partial/`      | Partially update a book    |
| DELETE | `/books/<id>/delete/`       | Delete a book              |



#### 🎨 Frontend
- Switched from Tailwind to **vanilla CSS** to reduce dependency complexity and maintain styling precision
- Introduced a **modal overlay form** to manage book creation and editing without navigating away from the main view
- Displayed **ratings visually using stars (★/☆)** for better clarity and UX, especially for quick visual scanning
- Focused on a **card-based layout** for clean content organization and responsiveness





## What Didn’t Work & What I’d Do Differently

- **Tailwind CSS** was originally used, but caused setup issues — replaced with a custom CSS approach
- With more time, I would
  - add **authentication** for personal accounts
  - include **search, filters, and pagination** for easy navigation
  - improve accessibility and responsiveness, with an aesthetically pleasing design
  - add **unit tests** and **form validation feedback**
  - document the backend APIs using Swagger and probably deploy them



### 💬 Personal Note

Building the backend API and integrating it into the frontend was both fun and super smooth — it's my area of expertise, so designing clean endpoints and wiring them up came naturally. The frontend, on the other hand, took more time and effort. But I genuinely enjoyed the challenge — it helped me refresh my memory on modern UI patterns, CSS structuring, and working with React state management in a real-world flow.

Overall, this project was a great full-stack refresher and a rewarding build from start to finish!


---

> Built with clarity, care, and clean code ✨
