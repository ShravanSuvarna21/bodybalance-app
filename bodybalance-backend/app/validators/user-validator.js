import User from "../models/user-model.js";
const userRegisterValidation = {
  name: {
    in: ["body"],
    exists: {
      errorMessage: "Name field is required",
    },
    notEmpty: {
      errorMessage: "Name cannot be empty",
    },
  },
  email: {
    in: ["body"],
    exists: {
      errorMessage: "Email filed is required",
    },
    notEmpty: {
      errorMessage: "Email cannot be empty",
    },
    isEmail: {
      errorMessage: "Email format is not valid",
    },
    normalizeEmail: true,
    trim: true,
    custom: {
      options: async function (value) {
        try {
          const user = await User.findOne({ email: value });
          console.log(user);
          if (user) {
            throw new Error("User already exists");
          }
        } catch (error) {
          throw new Error(error);
        }
        return true;
      },
    },
  },
  password: {
    in: ["body"],
    exists: {
      errorMessage: "password filed is required",
    },
    notEmpty: {
      errorMessage: "Password cannot be empty",
    },
    trim: true,
    isStrongPassword: {
      options: {
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minLength: 8,
        maxLength: 12,
      },
      errorMessage:
        "Password must be 8-12 characters and include uppercase, lowercase, number, and symbol",
    },
  },
  role: {
    in: ["body"],
    isIn: {
      options: [["admin", "coach", "client"]],
      errorMessage: "Invalid role",
    },
    trim: true,
  },
  contact: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/, // accepts 10-digit numbers
  },
};
const userLoginValidation = {
  email: {
    in: ["body"],
    exists: {
      errorMessage: "Email filed is required",
    },
    notEmpty: {
      errorMessage: "Email cannot be empty",
    },
    isEmail: {
      errorMessage: "Email format is not valid",
    },
    normalizeEmail: true,
    trim: true,
  },
  password: {
    in: ["body"],
    exists: {
      errorMessage: "password filed is required",
    },
    notEmpty: {
      errorMessage: "Password cannot be empty",
    },
    trim: true,
    isStrongPassword: {
      options: {
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minLength: 8,
        maxLength: 12,
      },
      errorMessage:
        "Password must be 8-12 characters and include uppercase, lowercase, number, and symbol",
    },
  },
};
export { userRegisterValidation, userLoginValidation };
