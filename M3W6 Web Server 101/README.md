## M3W6

## Web Servers 101

- [x] Project review
- [x] Web Servers (Theory)
- [x] Request <-----> Response
- [ ] Node JS Server
- [ ] Express JS
- [ ] GET Requests
- [ ] EJS
- [ ] Serverside rendering

### TCP server

Computer and server is always connected
computer server
-------------connecting---------------
---------connection established-------
--------------Message---------------->
--------------Message---------------->
--------------Message---------------->
--------------Message---------------->
<--------------Message----------------
<--------------Message----------------
<--------------Message----------------
--------------Message---------------->
<--------------Message----------------
--------------disconnected------------

### HTTP

Computer Server
------------connecting----------------
---------connection established-------
----middleware----Request Data, Message--------> GET, POST, URL (/urls, /cats, /profile) - Headers
<--------Response Data, Message --- middleware---
-----------disconnect-----------------
