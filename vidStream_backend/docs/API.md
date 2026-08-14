# vidStream Backend API

Base URL: http://{host}:{port}/api

Notes:
- Most endpoints require a valid JWT via `Authorization: Bearer <token>` unless noted.
- File uploads use `multipart/form-data` (fields noted per endpoint).

**Users** (`/api/users`)
- `POST /register` — Register a new user. Multipart: `avatar` (file), `coverImage` (file). Validated by `registerUserSchema`.
- `POST /login` — Login. JSON body validated by `loginUserSchema`. Rate-limited.
- `POST /logout` — Logout. Auth required.
- `POST /refresh-token` — Refresh access token.
- `POST /change-password` — Change current password. Auth required.
- `GET /get-user` — Get current user profile. Auth required.
- `PATCH /update-accound-details` — Update account details. Auth + JSON body validated.
- `PATCH /update-avatar` — Update avatar (single file field `avatar`). Auth required.
- `PATCH /update-coverImage` — Update cover image (single file `coverImage`). Auth required.
- `GET /c/:username` — Get channel profile by username. Auth required.
- `GET /watch-history` — Get user's watch history. Auth required.
- `POST /create-channel` — Create a channel. Auth + validated body.

**Videos** (`/api/videos`)
- `GET /search` — Search videos (query params, e.g. `q`, `page`, `limit`). Auth required.
- `GET /` — Get all videos. Auth required.
- `POST /` — Upload a video. Multipart fields: `videoFile` (file), `thumbnail` (file). Upload limiter applies.
- `GET /:videoId` — Get video by id. Auth required.
- `PATCH /:videoId` — Update video (optional `thumbnail` file).
- `DELETE /:videoId` — Delete a video.
- `PATCH /toggle-video/:videoId` — Toggle publish/unpublish. Uses `upload.none()`.

**Comments** (`/api/comments`)
All comment routes require authentication.
- `GET /:videoId` — Get comments for a video.
- `POST /:videoId` — Add comment to a video. `upload.none()` used.
- `DELETE /c/:commentId` — Delete a comment.
- `PATCH /c/:commentId` — Update a comment. `upload.none()` used.

**Likes** (`/api/likes`)
All like routes require authentication.
- `POST /toggle/v/:videoId` — Toggle like on a video.
- `POST /toggle/c/:commentId` — Toggle like on a comment.
- `POST /toggle/t/:tweetId` — Toggle like on a tweet.
- `GET /videos` — Get liked videos for the user.

**PlayLists** (`/api/playLists`)
All playlist routes require authentication.
- `POST /` — Create a playlist. `upload.none()` used.
- `GET /:playlistId` — Get playlist by id.
- `PATCH /:playlistId` — Update playlist. `upload.none()` used.
- `DELETE /:playlistId` — Delete playlist.
- `PATCH /add/:videoId/:playlistId` — Add video to playlist.
- `PATCH /remove/:videoId/:playlistId` — Remove video from playlist.
- `GET /user/:userId` — Get playlists for a user.

**Subscriptions** (`/api/subscriptions`)
All subscription routes require authentication.
- `POST /toggle-subscription/:channelId` — Subscribe/unsubscribe to channel.
- `GET /get-subscriber` — Get subscriber info for current user.
- `GET /get-channel` — Get current user's channel info.

**Tweets** (`/api/tweets`)
All tweet routes require authentication.
- `POST /` — Create tweet. `upload.none()` used.
- `GET //user/:userId` — Get tweets for a user.
- `PATCH /:tweetId` — Update tweet.
- `DELETE /:tweetId` — Delete tweet.

**Dashboards** (`/api/dashboards`)
All dashboard routes require authentication.
- `GET /stats` — Get channel statistics.
- `GET /videos` — Get channel videos (owner dashboard view).

Authentication
- Provide the JWT via `Authorization: Bearer <token>` header or cookie as implemented by the backend (`verifyJWT` middleware).

File uploads
- Use `multipart/form-data` for endpoints that accept files. Field names are indicated above (e.g. `avatar`, `videoFile`, `thumbnail`).

Examples
- Login (JSON):

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"secret"}' \
  http://localhost:8000/api/users/login
```

- Register (multipart):

```bash
curl -X POST \
  -F "email=user@example.com" \
  -F "password=secret" \
  -F "avatar=@/path/to/avatar.jpg" \
  -F "coverImage=@/path/to/cover.jpg" \
  http://localhost:8000/api/users/register
```

Further notes
- Validation schemas are in `src/validations` and controllers in `src/controllers` for request/response details.
