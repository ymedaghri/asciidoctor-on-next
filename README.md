## Description
This project is intended to easily use ascii-doctor associated to a Next project.
Ascii-doctor can be used to create **both html or pdfs** assets using **documentation as code** and **diagrams as code** methodologies.
It is configured with a default template I use on my own projects and with hot reload and hot compilation using concurrently and fswatch.
You can consult your documentation being made in real time :fire: and easily push it on fly.io :fire:

## Prerequisites

You need to have installed on you system : 
- **node ([link](https://nodejs.org/fr))**
- **asciidoctor ([link](https://asciidoctor.org/))**.

## Getting Started

First you can use this project to edit **ascii-doctor** files and generate **HTML** documentation in **real time** and using **hot reload**

First using **terminal** place yourself in the folder **documentation-asciidoc**

```bash
cd documentation-asciidoc
```

Then, you need to **make some files executable**

```bash
chmod +x ./documentation-asciidoc/serve_and_watch.sh

chmod +x ./documentation-asciidoc/compile_doctor.sh
```

You also need to **pre-compile** the file before the first use

```bash
asciidoctor -r asciidoctor-diagram *.adoc
```

Once this is done you can You can then launch the tool using 
```bash
./serve_and_watch.sh
```

You can then open [http://localhost:3000](http://localhost:3000) on your browser and see your documentation (**live reload being active**).

## Advanced mode

You can also use this documentation embedded in a **NextJS** project, here are the steps ro achieve this.

Place yourself at the root of this project.

```bash
npm install
```

This project uses **Clerk Authentication**, you have create a **.env.local file** by copying the **.env.template file** and define the variables mentionned in it.

```bash
cp .env.template .env.local
```

For configuring these variable, you have to use **Clerk Authentication**, visit the [clerk.com website](https://clerk.com/) for more informations.


### Npm scripts

Here are the scripts you can use.

- **npm run copy-docs**
Copy all the asciidoctor generated documentation to the Next public folder
- **npm run dev**
Launch the Next Servery
- **npm run build**
Build the Next project
- **npm run start**
Start the next project (production)


## Deploy on fly.io 

This project can be deployed on Fly.io by configuring it using

```bash
fly launch
```

You can then deploy it using

```bash
fly deploy
```

## Automatic deployment using Github Actions

This project is configured to use a GitHub Action Workflow.
You need to configure it by setting a **FLY_API_TOKEN secret** on **GitHub**.

## Authors and acknowledgment
Youssef Medaghri-Alaoui

## License
MIT

## Project status
Very simple utility project, targetted to be and stay simple and easy to use

## Learn More

This is a [Next.js](https://nextjs.org/) based project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!