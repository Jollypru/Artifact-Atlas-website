# ARTIFACT ATLAS

## This website is designed to allow users to store, view, and manage information about various historical artifacts. The application supports CRUD (Create, Read, Update, Delete) operations, and provides a way for users to explore artifacts through various categories. It also allows users to add their own artifacts, track discoveries, and view details of existing artifacts.

## Live URL : [Artifact Atlas](https://artifact-atlas-cc3af.web.app)

## Key Features: 
- **User Authentication (JWT)** : Users can register, login using Firebase Authentication, and receive a JWT token that is used to authenticate API requests. Also allow social (google) login.
- **CRUD Operations** : Users can create, view, edit and delete artifacts.
- **Search Functionality** : Users can search artifacts by artifacts name.
-- **Private Routes** : Certain routes are accessible only to authenticated users.
-- **Responsive Design** : The website is fully responsive for mobile, tablet and laptop.

## npm Packages Used:
- `react-router-dom` : For routing and navigation in the app.
- `axios`: For making HTTP requests to the backend.
- `firebase`: Firebase services for authentication (with JWT).
- `react-toastify`: For showing notifications.
- `react-icons`: For icon usage in the app.
- `tailwindcss`: For utility-first CSS styling.
- `dotenv`: For environment variable management.
- `jsonwebtoken`: For creating and verifying JWT tokens for secure API communication.

