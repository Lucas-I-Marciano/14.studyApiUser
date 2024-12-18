# Store API

## Description
This is a store API that allows CRUD (Create, Read, Update, Delete) operations on products, users, roles, and permissions. Additionally, the API provides user authentication using JWT and security management through permissions and role assignments.

## Endpoints
- **Products**: CRUD operations for products
- **Users**: CRUD operations for users
- **Roles**: CRUD operations for roles (including the admin role)
- **Permissions**: CRUD operations for permissions to restrict access
- **Auth**: User authentication with JWT
- **Security**: Register permissions and assign roles to users

## Technologies Used
- **ORM**: Sequelize
- **Database**: SQLite
- **Framework**: Express

## Project Structure
- **Controller**: Handles requests and responses, and invokes functions from the Service
- **Service**: Interacts with the database and applies business logic
- **Routes**: Defines all application routes
- **Middleware**: Creates middleware layers for requests
- **Utils**: Centralizes useful files, such as creating hashed passwords with salt
- **Database**: Sequelize configurations, migrations, models, and the database itself

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Lucas-I-Marciano/api_authentication.git
   ```
2. Install dependencies and set your Secret up:
   ```bash
   cd api_authentication
   npm install
   ```
   Change jsonSecretSample.js file to jsonSecret.js with your secret in it
   
4. Set up the database:
   ```bash
   npx sequelize-cli db:migrate
   ```

## Usage
1. Start the server:
   ```bash
   npm start
   ```
2. Access the API at:
   ```
   http://localhost:3000
   ```

## Contribution
1. Fork the project
2. Create a new branch:
   ```bash
   git checkout -b my-new-feature
   ```
3. Make your changes and commit:
   ```bash
   git commit -m 'Add new feature'
   ```
4. Push to the remote repository:
   ```bash
   git push origin my-new-feature
   ```
5. Open a Pull Request

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
email: lucas.marciano99@outlook.com
