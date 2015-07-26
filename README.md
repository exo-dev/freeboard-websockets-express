# freeboard-websockets-express

A project that unifies http://freeboard.io/ with websockets support and served from an express server

## Quick Instructions

* Clone this project
* `npm install`
* `npm start`

Now you can access your freeboard at http://localhost:3000

## What this project is
When you run `npm install`, it gets freeboard from freeboard's github and express as dependencies.

After that, it executes a post-install script that downloads the websockets plugin from freeboard/plugins repo and modifies freeboard's main html to load the plugin.

Also, it serves freeboard folder as a static folder with express for sometimes convenience.
