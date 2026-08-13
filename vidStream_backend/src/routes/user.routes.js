import express, { Router } from "express";
import {
	loginUser,
	logOutUser,
	registerUser,
	refreshAccessToken,
	changedCurrentPassword,
	getCurrentUser,
	updateUserAccoundDetails,
	updateUserAvatar,
	updateUserCoverImage,
	getUserChannelProfile,
	getWatchHistory,
	createChannel,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.meddleware.js";
import { loginLimiter, uploadLimiter } from "../middlewares/rateLimit.middleware.js";
import validate from "../middlewares/validate.middleware.js";
import {
	registerUserSchema,
	loginUserSchema,
	changePasswordSchema,
	updateAccountSchema,
	createChannelSchema,
} from "../validations/user.validation.js";

const router = Router();
router.use(express.json({ limit: "16kb" }));

router.route("/register").post(
	uploadLimiter,
	upload.fields([
		{
			name: "avatar",
			maxCount: 1,
		},
		{
			name: "coverImage",
			maxCount: 1,
		},
	]),
	validate(registerUserSchema),
	registerUser,
);
router.route("/login").post(loginLimiter, upload.none(), validate(loginUserSchema), loginUser);
router.route("/logout").post(upload.none(), verifyJWT, logOutUser);
router.route("/refresh-token").post(refreshAccessToken);
router
	.route("/change-password")
	.post(upload.none(), verifyJWT, validate(changePasswordSchema), changedCurrentPassword);
router.route("/get-user").get(verifyJWT, getCurrentUser);
router
	.route("/update-accound-details")
	.patch(verifyJWT, upload.none(), validate(updateAccountSchema), updateUserAccoundDetails);
router
	.route("/update-avatar")
	.patch(verifyJWT, uploadLimiter, upload.single("avatar"), updateUserAvatar);
router
	.route("/update-coverImage")
	.patch(verifyJWT, uploadLimiter, upload.single("coverImage"), updateUserCoverImage);

router.route("/c/:username").get(verifyJWT, getUserChannelProfile);
router.route("/watch-history").get(upload.none(), verifyJWT, getWatchHistory);
router.route("/create-channel").post(upload.none(), verifyJWT, validate(createChannelSchema), createChannel);

export default router;
