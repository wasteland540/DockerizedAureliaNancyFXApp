Demo project for hosting Nancy and Mono inside a Docker container
=================================================================

Run
-------------

```
  $ docker build -t nancy-api .
  $ docker run -d --name nancyAPI -p 8080:8080 nancy-api
  $ docker port nancy-demo 8080
```

