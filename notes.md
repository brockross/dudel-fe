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
- keep making components from list
- ~~start on server~~
- start setting up actual Next app
- init socket in Context and provide at root
-

## pages and their components

- Start Page (set up new game or join existing)
  - splash image/logo
  - button for "start new game"
  - text field + button for "join existing game"
- Game Setup (username setup + lobby)
  - "add name" field + button
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
-

## misc ideas

- dynamically include player names in some prompts (in addition to static list). e.g. "Max barfing"

## design brainstorm

- 8bit?
- pnw native colors (teal, terra cotta, sand, etc)
- match my keyboard (kinda mexican/aztec color palette)
- feel like I want it to be colorful but not garish
- ... circles? just defy the quadrilateral supremacy that runs rampant across most of cyberspace?
  - this could be kinda cool to experiment with
