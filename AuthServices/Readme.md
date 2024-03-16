

## authentication =>It is process using whichi we can uniquely identify users on our application  this process tell us about who is  the user is  general sign in signup login logout flows used to authentication proccess

###### currently there are lot of authentication process one of them is token based authentication so we had used JWT token to authenticate

######
Flow=> client send username/mail & password=>Server =>check if exisit and create user =>sent token of user token and sent to cilent=>token manage by client/frontend.

after authentication for every req client set the token to server=>server verfified and proccess

Token:=> the token is special token for our project we used JWT token 
it is special  token created using client creditials with expairy date with same hash functionality decreapt
and the server can decript the token and read the user creditional and serv accordingly


### authorization=> it is next steps after authentication, it is process in which we can identify the capabilities of user what user can do on the application


####cli  