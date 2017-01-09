```js
{
  currentUser: {
    id: 1,
    fname: "John",
    lname: "Smith"
  },
  forms: {
    errors: []
  },

  posts: {
    1: {
      body: "What a beautiful day!",
      author_id: 1,
      receiver_id: Null
    },

    2: {
      body; "Happy Birthday!"
      author_id: 1,
      receiver_id: 2
    }
  },

  comments: {
    1: {
      body: "Right everyone?",
      post_id: 1,
      author_id: 1
    }
  },

  friendships: {
    1: {
      user1: 1,
      user2: 2,
      status: "friends"
    },

    2: {
      user1: 1,
      user2: 3,
      status: "pending"
    }
  }
```
