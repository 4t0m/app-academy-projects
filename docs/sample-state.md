```js
{
  currentUser: {
    id: 1,
    fname: "John",
    lname: "Smith",
    profile_pic_url: "exampleurl.com"
  },

  forms: {
    errors: []
  },

  posts: {
    1: {
      body: "What a beautiful day!",
      receiver_id: Null,
      author: {
        id: 1,
        fname: "John",
        lname: "Smith",
        profile_pic_url: "exampleurl.com"
      }
    },

    2: {
      body: "Happy Birthday!",

      author: {
        id: 1,
        fname: "John",
        lname: "Smith",
        profile_pic_url: "exampleurl.com"
      },

      receiver: {
        id: 2,
        fname: "Jane",
        lname: "Doe",
        profile_pic_url: "otherexampleurl.com"
      }
    }
  },

  comments: {
    1: {
      body: "Right everyone?",
      post_id: 1,
      author: {
        id: 1,
        fname: "John",
        lname: "Smith",
        profile_pic_url: "exampleurl.com"
      }
    }
  },

  friends: {
    1: {
      id: 2,
      fname: "Jane",
      lname: "Doe",
      profile_pic_url: "otherexampleurl.com"
    }
    
  }
```
