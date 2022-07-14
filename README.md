## About the project

Using `Commander` to create a dockerized TypeScript CLI to be used for running batch jobs on AWS.

## Getting started

From the root of the app, run:

```
docker build -t typescript-cli .
```

This will build the docker image.  
You can run the job using the following command:

```
docker run --rm -it typescript-cli greeting YourName -s 'Nice name!'
```

## Check the tutorial

https://blog.perfect-base.com/typescript-cli
