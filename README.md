# DockerizedAureliaNancyFXApp
Demo Project for aurelia app and nancyfx app in Docker containers.

I played around with docker and created this test project.

## contact-manager
This app is written in JS and HTML with the awesome [aurelia](http://www.aurelia.io) framework. This was my first experience with this framework and
i really liked it. Easy and fast to setup and also easy to deploy. 
So i dockerized this app in it's own container.
There is on button "Call API" which make a http request to the another container.

## nancy-demo-hosting-docker
This project is a simple and small REST-API written in C# with the [NancyFX](http://nancyfx.org) framework. It's able to run on Mono.
I dockerized this app in a seperated docker container.

## Interaction
When we start up both container, we are able to see the contact-manager app in our browser using the IP of the docker machine.
If you click on the "Call API" button and open the console, you will see a log entry of the response.
When the button is click, we make a http request to the REST-API with the following path:
````
/add?a=3&b=2
````
The REST-API listing on port 8080. You can check the REST-API directly through your browser.
