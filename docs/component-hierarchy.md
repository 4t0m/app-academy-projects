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
    * Feed Index
      * New Post Form
      * Feed Index Item

  * **Profile Container**
    * Profile Sidebar
      * Profile About
      * Friend Profile Pictures Index
        * Friend Profile Pictures Index Item
    * Profile Feed Container
      * Feed Index
        * New Post Form
        * Feed Index Item
    * Profile Edit
      * Profile edit form


# Routes

| Path                | Component          |
|---------------------|--------------------|
|"/login"             | LoginPage          |
|"/"                  | NewsfeedContainer  |
|"/users/:userId"     | Profile Container  |
|"users/:userId/edit" | Profile Edit       |
