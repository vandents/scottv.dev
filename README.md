# scottv.dev


## About
This is my personal website to showcase my projects and serve as an extension of my resume. I also like to experiment with things on here, e.g. my Tic Tac Toe robot (try it out!). It is written using Google's Angular framework. Feel free to reference anything here to use in your own projects.


## Deployment Method
[Jaxon Wright](https://github.com/JaxonWright) showed me a really cool way to deploy a website on GitHub Pages using [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages). You can immediately deploy any new code to your GitHub Pages website with one command:  

`npm run publish`  

Here is the script in my package.json.  

`ngh --repo=https://GH_TOKEN@github.com/vandents/scottv.dev.git --name=\"vandents\" --email=vandents@mail.gvsu.edu --no-silent`  

`GH_TOKEN` is an environment variable defined for your OS. Both Mac and Windows can use environment variables. The token should hold the value of your [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) to conceal it when you commit to a public repo.  


## Try it Yourself
If you want to run this project on a local development server make sure you run `npm install` to install all of the dependencies. Then run `ng serve` to start up the development server.
