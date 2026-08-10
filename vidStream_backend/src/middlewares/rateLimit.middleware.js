import rateLimit from "express-rate-limit";

const loginLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 5,
	standardHeaders: true,
	legacyHeaders: false,
	message: {
		success: false,
		message: "Too many login attempts from this IP, please try again later.",
	},
	statusCode: 429,
});

const uploadLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 10,
	standardHeaders: true,
	legacyHeaders: false,
	message: {
		success: false,
		message: "Too many upload requests from this IP, please try again later.",
	},
	statusCode: 429,
});

export { loginLimiter, uploadLimiter };
