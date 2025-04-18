# User Registration API Documentation

## Endpoint: `/users/register`

### Description
This endpoint allows a new user to register by providing their details. Upon successful registration, a JSON Web Token (JWT) is generated and returned, which can be used for authenticating future requests.

### Request Method
`POST`

### Request Body
The request body must be in JSON format and should contain the following fields:

- `fullname`: An object containing:
  - `firstname`: (string, required) The first name of the user. Must be at least 3 characters long.
  - `lastname`: (string, optional) The last name of the user. Must be at least 3 characters long if provided.
- `email`: (string, required) The email address of the user. Must be a valid email format and unique.
- `password`: (string, required) The password for the user account. Must be at least 6 characters long.

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Responses

#### Success Response
- **Status Code**: `201 Created`
- **Response Body**:
```json
{
  "token": "JWT_TOKEN_HERE",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error Responses
- **Status Code**: `400 Bad Request`
  - **Description**: Returned if any of the required fields are missing or invalid.
  - **Response Body**:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password"
    }
  ]
}
```

- **Status Code**: `400 Bad Request`
  - **Description**: Returned if the user already exists.
  - **Response Body**:
```json
{
  "message": "User already exist"
}
```

### Notes
- Ensure that the email provided is unique to avoid registration conflicts.
- Passwords are hashed before being stored in the database for security purposes.