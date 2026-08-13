import { ApiError } from "../utils/ApiError.js";

export const validate = (schema) => {
  return (req, res, next) => {
    try {
      const result = schema.safeParse(req.body || {});
      if (!result.success) {
        const errors = result.error.errors.map((e) => ({
          path: e.path.join(".") || "",
          message: e.message,
        }));
        throw new ApiError(400, "Validation error", { errors });
      }
      // replace body with parsed/clean data
      req.body = result.data;
      return next();
    } catch (error) {
      return next(error);
    }
  };
};

export default validate;
