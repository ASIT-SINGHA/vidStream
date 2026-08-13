import { z } from "zod";

export const registerUserSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const loginUserSchema = z
  .object({
    username: z.string().optional(),
    email: z.string().optional(),
    password: z.string().min(1, "Password is required"),
  })
  .refine((data) => !!(data.username || data.email), {
    message: "username or email is required",
    path: ["username"],
  });

export const changePasswordSchema = z
  .object({
    oldPassword: z.string().min(1, "Old password is required"),
    newPassword: z.string().min(6, "New password must be at least 6 characters"),
    conformPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.newPassword === data.conformPassword, {
    message: "newPassword and conformPassword must match",
    path: ["conformPassword"],
  });

export const updateAccountSchema = z.object({
  email: z.string().email("Invalid email address"),
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
});

export const createChannelSchema = z.object({
  des: z.string().min(3, "Description is required"),
  currentUrl: z.string().min(3, "currentUrl is required"),
  socialLinks: z.string().optional(),
});

export const updateAvatarSchema = z.object({});

export default {
  registerUserSchema,
  loginUserSchema,
  changePasswordSchema,
  updateAccountSchema,
  createChannelSchema,
};
