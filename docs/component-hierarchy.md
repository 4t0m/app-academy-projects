# Component Hierarchy

* **App**
  * LoginPage (if not logged in)
    * Sign In Form
    * Sign Up Form
    * App Details Container
  * Header (if logged in)
    * Friend Request Index
      * Friend Request Index Item
    * Log out button
    * Notifications Index
      * Notifications Index Item
    * Profile Button
    * Home Button
  * Newsfeed Container
    * Newsfeed Index
      * New Post Form
      * Newsfeed Index Item

  * **Profile Container**
    * Profile Sidebar
      * Profile About
      * Friend profile pictures Index
        * Friend profile pictures Index Item
    * Profile post Index
      * New post form
      * Profile post Index Item
    * Profile Edit
      * Profile edit form


# Routes

| Path                | Component          |
|---------------------|--------------------|
|"/login"             | LoginPage          |
|"/"                  | NewsfeedContainer  |
|"/users/:userId"     | Profile Container  |
|"users/:userId/edit" | Profile Edit       |
