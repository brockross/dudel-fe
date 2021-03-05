# notes and todos

## tech to use

- websockets
- react (+ storybook?)
- ~~bundle with parcel?~~
- nextjs?
- TYPESCRIPT?!

## architecture notes

- use nextjs w/SSR, etc, in a self-contained FE app served via CDN
- separate backend app just for websocket connections (i.e. does not handle serving the FE app itself)
- set up as monorepo?

## todos

- ~~experiment with storybook~~
- ~~experiment with TS~~
- ~~read TS handbook~~
- ~~define components needed for each page I've plotted out~~
- ~~review usage of Sketchpad API in old app--will inform how I set things up here~~
- ~~start making components, passing in mock doodle JSON as story~~
- decide on a rough aesthetic--color palette, fonts, quote unquote "vibe"
- ~~keep making components from list~~
- ~~start on server~~
- ~~start setting up actual Next app~~
- ~~init socket in Context and provide at root~~
- ~~figure out basic room creation/joining logic~~ _holy shit this was a mind-boggling odyssey_
- ~~build "Game Setup" lobby page; route to it after join/create~~
- at some point, figure out how to use context api with storybook (any components that use socket from context currently don't work in sb)
- ~~reshuffle existing stuff so main page component handles all the socket interactions and just passes data to child components~~
- build out the rest of the lobby (live user list; "everyone's ready" button). As part of process, decide on a convention for managing reactive client/server events, which will be used throughout the rest of the app. i.e., callbacks, imperative events going both ways, promisifying, something else?
- ~~game-setup needs to fetch player list on mount, not just when player submits their username~~ (added 'fetch' convention for any RESTy interactions like this)
- ~~add game code component to game-setup page so I don't have to keep pasting it from the console~~
- start making _the actual game_

## pages and their components

- Start Page (set up new game or join existing)
  - splash image/logo
  - button for "start new game"
  - text field + button for "join existing game"
- Game Setup (username setup + lobby)
  - ~~"add name" field + button~~
  - live list of users currently in lobby
  - "everyone's ready" button to start game
- Main Game in Doodle State
  - static prompt text header
  - interactive sketchpad
  - timer (?)
  - ~~"submit" button~~
- Main Game in Prompt State
  - static sketchpad
  - text field for guess
  - timer (?)
  - ~~"submit" button~~
  - slideshow of book prompts/doodles/guesses (rendered on interval?)
  - "play again" button
- Persistent Sidebar/HUD Stuff
  - player list w/"has submitted" status for the round
  - current round out of total rounds (e.g. "Round 3/5")
  - header with game name
  - footer info?
- Error

## game logic

- keep FE as dumb as possible. Game logic should live on server, and FE just knows how to:
  - render the data it's given
  - submit data it creates
  - respond to game state notifications (sent from server) by showing a different page/interface
- ~~finding that trying to organize/extract separate functions on server is causing a lot of annoying roadblocks re: socket server architecture--for now, I'm going to just be okay with having everything in the one .on("connect") listener, and then I can modularize it later.~~ _handled this ish_

## misc ideas

- dynamically include player names in some prompts (in addition to static list). e.g. "Max barfing"

## design brainstorm

- 8bit?
- pnw native colors (teal, terra cotta, sand, etc)
- match my keyboard (kinda mexican/aztec color palette)
- feel like I want it to be colorful but not garish
- ... circles? just defy the quadrilateral supremacy that runs rampant across most of cyberspace?
  - this could be kinda cool to experiment with
- use my own doodles for game art/theming?
- dark theme?
