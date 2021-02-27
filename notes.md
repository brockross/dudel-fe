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

## steps

- ~~set up as monorepo w/yarn workspaces~~
- set up FE env:
  - nextjs
  - typescript
  - storybook
- set up BE env:
  - express
  - websockets
  - typescript?

## todos

- ~~experiment with storybook~~
- ~~experiment with TS~~
- read TS handbook
- define components needed for each page I've plotted out
- review usage of Sketchpad API in old app--will inform how I set things up here
- start making components, passing in mock doodle JSON as story

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
  - "submit" button
- Main Game in Prompt State
  - static sketchpad
  - text field for guess
  - timer (?)
  - "submit" button
  - slideshow of book prompts/doodles/guesses (rendered on interval?)
  - "play again" button
- Error

## game logic

- keep FE as dumb as possible. Game logic should live on server, and FE just knows how to:
  - render the data it's given
  - submit data it creates
  - respond to game state notifications (sent from server) by showing a different page/interface
-

## misc ideas

- dynamically include player names in some prompts (in addition to static list). e.g. "Max barfing"
