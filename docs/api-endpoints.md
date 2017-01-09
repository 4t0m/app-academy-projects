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

- `GET /api/session/new`
- `POST /api/session`
- `DELETE /api/session`

### Profiles

- `GET /api/profiles/:user_id`
- `POST /api/profiles`
- `PATCH /api/profiles/:user_id`

### Friends

- `GET /api/:user_id/friends`

### Posts

- `GET /api/posts`
- `POST /api/posts`
- `GET /api/posts/:id`
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`

### Newsfeed
- `GET /api/newsfeed`
