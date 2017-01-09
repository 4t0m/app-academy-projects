# Component Hierarchy

* **App**
  * **LoginPage** (if not logged in)
    * Sign in Form
    * Sign Up Form
    * App Details Container
  * Header (if logged in)
    * Friend Request index
      * Friend Request index item
    * Log out button
    * Notifications index
      * Notifications index item
  * Newsfeed Container
    * Newsfeed index
      * New post form
      * Newsfeed index item

  * **Profile Container**
    * Profile Sidebar
      * Profile About
      * Friend profile pictures index
        * Friend profile pictures index item
    * Profile post index
      * New post form
      * profile post index item
    * **Profile about container**
      * Profile about
      * Friend index
        * friend index item
    * **Profile Edit**
      * Profile edit form


# Routes

| Path        | Component          |
|-------------|--------------------|
|"/login"     | LoginPage          |
|"/"          | NewsfeedContainer  |
|"/users/:userId" | Profile Container |
|"users/:userId/about" | Profile About |
|"users/:userId/edit" | Profile Edit  |
