# Component Hierarchy

## Authform Container
* AuthForm

## HomeContainer
* Home
* PostsContainer (Route Index Child)

## UserContainer
* User
* PostsContainer (Route Index Child)
* ProfileInfo

## PostsContainer
* Posts
* PostItem
* PostForm

## UserProfile Container
* UserProfile

## Routes:

| Path        | Component         
| ------------- |:-------------:|
| "/log"        | AuthFormContainer |
| "/"     | HomeContainer      |   
| "/ Index Route" | PostsContainer      |    
| "/user"   | UserContainer |
| "/user" indexRoute    | UserPostsContainer      |   
| "/user/about" | UserProfileContainer     |    
