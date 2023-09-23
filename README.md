# socioHub

This is a comprehensive Social Media Dashboard web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). 
The objective of this project is to create a social media platform with features such as posting, commenting, liking, sharing, user profiles, and authentication. 
This README will guide you on how to fork the project from GitHub and set it up on your local system.

## Getting Started

### Prerequisites
Before you begin, ensure you have met the following requirements:
1:-Node.js and npm installed on your local machine.
2:-MongoDB installed and running locally or access to a MongoDB database.

### Fork the Repository
Open your web browser and go to the GitHub repository.
Click the "Fork" button at the top-right corner of the repository page. This will create a copy of the repository in your GitHub account.

### Clone the Forked Repository
Open your terminal or command prompt.
Change the current working directory to where you want to store the project:

cd /path/to/your/directory
Clone your forked repository to your local machine.

git clone https://github.com/yourusername/social-media-app-clone.git

### Set Up the Backend
Navigate to the backend directory of the project:

cd social-media-app-clone/backend
Install the backend dependencies:

npm install
Create a .env file in the backend directory and configure the following environment variables:

PORT=5000
MONGODB_URI=mongodb://localhost/social-media-app
JWT_SECRET=your-secret-key
Replace your-secret-key with a strong and unique secret key for JWT authentication.

### Start the backend server:
npm start


## Set Up the Frontend
Open a new terminal window/tab.

Navigate to the frontend directory of the project:

cd social-media-app-clone/frontend

Install the frontend dependencies:

npm install
Start the frontend development server:

npm start
Usage
Now that you have set up the project on your local system, you can access the Social Media Dashboard by opening your web browser and navigating to http://localhost:3000 .

You can register as a new user and log in to start using the application. 
Explore the features of the social media platform, including posting, commenting, liking, and sharing content.

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments
This project was inspired by the need for a comprehensive social media dashboard.
Special thanks to the MERN stack community for their valuable resources and support.

Happy coding!
