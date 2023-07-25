# httpSender
- [Introduction](#introduction)
- [Creating](#creating)
- [Functions](#functions)
## Introduction
This is an npm package that is extremely useful if you want to do a lot of http requests with same headers (like I do in my bot) because you can specify headers (`Authorization` and `Content-Type`) when creating the class...
## Creating
To create it just do
```ts
const http = new httpSender()
```
or if you want to include also headers
```ts
const http = new httpSender({ "Authorization": "", "Content-Type": "" })
```
## Functions
You have some functions to make http requests with this package
```ts
http.get("url")
http.post("url", "body") //body can be also an object
http.patch("url", "body") //body can be also an object
http.put("url", "body") //body can be also an object
http.delete("url", "body") //body it's not required and can be also an object
```
If not specified in class creation, you'll need to specify headers with a third (Authorization) and a fourth (Content-Type) param as string