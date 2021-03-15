# BookLibraryApp

## About The Project

### Built With
- [Angular 11](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [HTML](https://www.w3.org/html/)

### The main goal of this project was to learn how to:
- work with Angular
- write in TypeScript
- perform CRUD operations on backend api
- authenticate user in client-server architecture
- use Json Web Tokens

## Usage
When user loads the main page he has options to sign in or create new account. There is basic validation on inputs, such as required field, email in specific format or requirements for passwords (one small and capital letter, one number and one non alphanumeric symbol, min lenght 8). There is also validation for login and email if they are already taken without submitting form.
![image](https://user-images.githubusercontent.com/49397084/111169358-2a410600-85a3-11eb-961a-0d83edd9c8f9.png)

After successful authentication, the user will see the book management page. He can fill the inputs, then the submit button will be active, after clicking it the book will be added.
You can click on a book from the list, then the form inputs will be filled with its values, after making changes to it and clicking the submit button, its original values will be updated.
When you click the bin icon, the book will be removed from the database.
![image](https://user-images.githubusercontent.com/49397084/111171397-2f9f5000-85a5-11eb-876e-552b092cca81.png)
