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
- ~~build out the rest of the lobby (live user list; "everyone's ready" button). As part of process, decide on a convention for managing reactive client/server events, which will be used throughout the rest of the app. i.e., callbacks, imperative events going both ways, promisifying, something else?~~
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

## scratchpad

sample player sketchbook: [{doodle: JSON, artist: username}, {guess: string, author: username}, {doodle: JSON, artist: username}]

- guess/prompt is submitted
- server "gives" that data to "next" player (entry is pushed to sketchbook array of player next in the player list)
- once this has happened for all players, the next round starts
- server sends the .length-1 idx entry of each player's sketchbook to them (i.e., the entry they were "given" on the previous round)

- player init worked well! Gameplay routing works, and players are successfully receiving their first random prompt
- next is figuring out a game loop sort of construct. i.e., how to accomplish "when this state is reached in the game, do this"... feel like there are some distinct approaches, like setting up a while loop, or checking against state every time a client action is completed (e.g., in client submit fn, you increment submissionsCount and then check it against totalPlayers--if it's the final player to submit the "move on" code fires)
- as I'm writing the actual "passing" logic I'm realizing there's an important distinction. Although in the irl game the sketchbook is passed to the "next" player, from a data standpoint, each data object is actually being given to a _previous_ player--i.e., you're inserting data into the collection of a player whose index is lower than your own. This is a subtle but important distinction when wrapping my head around the mental model here. From a data standpoint, no sketchbook is ever "passed" to the next player. The relationship is almost reversed; instead of a player saying "here, higher-idx player, take this book;" a player is saying "here, lower-idx book, take this data"

**checking in after weekend progress**

- bulk of the game logic is working! hot damn I am so stoked about this. I think the server code is pretty concise and elegant, and augmenting/refining it will be easy because it's well-modularized
- ~~current client bug: sketchpad isn't replaced on subsequent rounds, it's added to/layered upon. So round 4 has the drawings from rounds 1 and 3 layered upon each other~~

**running todos**

- ~~create UI state for post-submission but before round ends. (e.g., "Your doodle has been submitted! Waiting on other players.") Particularly ensure the client can't submit again~~ done as a placeholder... kinda feel like doing all the game logic with minimal UI, then going through and doing a design revamp once the game all works
- after final player submits and round ends, it'd be nice to have a little "Starting next round!" screen show for a few seconds, and maybe a basic animation or description of the "passing" going on (rather than just suddenly flashing to the next state)
- ~~detect end game state in server~~
- decide what to do at end of game. Definitely want to display all complete sketchbooks, in sequence, to all players. Could have it more like a controlled slideshow where everyone is shown the same thing at the same time on a timer. Could send all the data to all clients and give them all controls for navigating through sketchbook pages.
  - of those 2, I like the former better. It'd be more connective as a shared gameplay experience if you're all looking at the same thing at the same time (e.g. "Dale started with prompt 'dog helicopter'... and he drew this. ... Audrey guessed that was a 'puppy propeller' ... etc)
- brainstorm and implement some kind of scoring (two kinds... one for correct guesses and their associated doodle, and one that's voting-based for favorite doodles/guesses)
  - so maybe during each sketchbook slideshow, A) the UI announces correct guesses, and the server tracks points, and B) after the end of the sketchbook, each client picks one doodle and one guess as their favorite from the book. After all books are shown, votes-per-username is tallied and the winner is announced along with the correct-guess/doodle winner
  - i'm picturing a slideshow, then a display of thumbnails of all pages at the end, with a ~10 second timer to pick your favorites before the next sketchbook is shown
- continue to think about error/edge handling. One major thing is that I should build a way to easily associate a client back with their player data if they momentarily disconnect--currently that association is based on socket id, which changes on every new connection (e.g., store some id in localstorage and have the reconnecting client send it up so they can be re-associated with their player data)
- need an always-showing player list, with accompanying "has submitted" info/icon
- "Slideshow" at end
  - each entry shows for a set period of time, in same order for all players
  - each "slide" includes the doodle/guess, the artist/author name, and some expository text (e.g., "Then Audrey drew this!")
  - similar timed expository text between sketchbooks as well
  - need to grab some JSON of a final compiled game state so I don't have to play through an entire game every time I want to test this
  - spent an hour+ building a B E S P O K E solution but ended up settling on useInterval for slideshow rendering logic. Whatever. The TimedWrapper will still be useful I think, and even if not, it was fun and educational
  - so instead, I will build a slideshow component which advances through indices based on an "onBookFinished" handler, which is called within the Slide setInterval incrementer so that when a book reaches its final page, it calls onBookFinished which increments the active index of the compiledSketchbooks array
