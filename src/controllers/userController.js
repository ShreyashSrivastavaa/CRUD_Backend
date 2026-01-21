// Import service-layer functions (DB logic is NOT written here)
import {
  createUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
} from '../models/userModel.js';


const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

/*
  CREATE USER
  POST /api/users
*/
export const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    const newUser = await createUserService(name, email);

    return handleResponse(
      res,
      201,
      'User created successfully',
      newUser
    );
  } catch (err) {
    next(err); // pass error to global error handler
  }
};

/*
  GET ALL USERS
  GET /api/users
*/
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersService();

    return handleResponse(
      res,
      200,
      'Users retrieved successfully',
      users.rows
    );
  } catch (err) {
    next(err);
  }
};


export const getUserById = async (req, res, next) => {
  try {
    const result = await getUserByIdService(req.params.id);

    //  This is the key fix
    if (result.rowCount === 0) {
      return handleResponse(res, 404, 'User not found');
    }

    return handleResponse(
      res,
      200,
      'User retrieved successfully',
      result.rows[0]
    );
  } catch (err) {
    next(err);
  }
};

/*
  UPDATE USER
  PUT /api/users/:id
*/
export const updateUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    const updatedUser = await updateUserService(
      req.params.id,
      name,
      email
    );

    // If no user exists with given ID
    if (!updatedUser) {
      return handleResponse(res, 404, 'User not found');
    }

    return handleResponse(
      res,
      200,
      'User updated successfully',
      updatedUser
    );
  } catch (err) {
    next(err);
  }
};

/*
  DELETE USER
  DELETE /api/users/:id
*/
export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await deleteUserService(req.params.id);

    // If user does not exist
    if (!deletedUser) {
      return handleResponse(res, 404, 'User not found');
    }

    return handleResponse(
      res,
      200,
      'User deleted successfully',
      deletedUser
    );
  } catch (err) {
    next(err);
  }
};
