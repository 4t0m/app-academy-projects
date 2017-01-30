# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
fname           | string    | not null, indexed
lname           | string    | not null, indexed
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile_pic_url | string    |

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
receiver_id | integer   | not null, foreign key (references user who's wall the post is on), indexed


## friends
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
requester_id  | integer   | not null, foreign key (references tagged user), indexed
receiver_id   | integer   | not null, foreign key (references other user), indexed, unique per user_id
status        | string    | not null, indexed
