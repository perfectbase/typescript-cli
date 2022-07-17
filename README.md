## About the project

Using `Commander` to create a dockerized TypeScript CLI to be used for running batch jobs on AWS.

## Getting started

From the root of the app, run:

```bash
docker build -t typescript-cli .

# For M1 Mac, use this command:
# docker buildx build --platform=linux/amd64 -t typescript-cli .
```

This will build the docker image.  
You can run the job using the following command:

```bash
docker run --rm -it typescript-cli greeting YourName -s 'Nice name!'
```

## Check the tutorial

https://blog.perfect-base.com/typescript-cli-aws-batch
