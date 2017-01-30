# API Endpoints

## HTML API

### Root

- `GET /` - loads React webapp


## JSON API

### Users

- `GET /api/users/:user_id`
- `POST /api/users`
- `PATCH /api/users/:user_id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Profiles

- `GET /api/profiles/:user_id`
- `PATCH /api/profiles/:user_id`

### Friends

- `GET /api/:user_id/friends`

### Posts

- `GET /api/posts`
- `POST /api/posts`
- `GET /api/posts/:post_id`
- `PATCH /api/posts/:post_id`
- `DELETE /api/posts/:post_id`
