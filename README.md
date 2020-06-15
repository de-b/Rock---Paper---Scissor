# Rock Paper Scissor

## Just to demostrate complexity

1. Add name to player 1 and player 2.
2. Once game starts. Ask name of both players
3. Display name instead Player 1 and 2.
4. Also store the count win for player 1 and player 2.
5. After that add Player 3. (not required)

## Covert the Game to React

1. use CRA to create new project. \*
2. Add bootstrap cdn to index.html This is the only page loaded when url is
   invoked.
3. Copy css and import css into App.js The css is used and complied with react
   application.
4. Copy entire html into app as JSX This means all the html is not created by
   react after page is loaded.
5. Work out the game state.

- Hold item for player 1 and 2.
- Display images for rock paper or scissor
- Result - Display who won or draw

6. When clicked gameState should generate random number for player 1 and player
   2 Updating the `gameState` does not work at all. Stupid React. :D

Note: React reacts when data is changed. If react does know that data is changed
then it does not reacts. So let react know that data changed you have do it
react way which is state.

- Old Way: Class component.
- New Way: `useState` hooks.

For react to know state has changed. It should contains the state using Class.
Simple function is not able contain state.

However, from React 16+. hooks were introduced. Using which functional component
are now able know that state modification. The React devs embraced it because
its more efficient and easy to use. (There was lots +1 and -1 when it was
introduced that created the buzz). Also because limitation of JS. Class is way
around and JS does not supports it natively. It was implemented using JS
prototype. (Suggested to do further reading on the topic.) And by design, JS
`this` is really confusing which might be refering to anything. Current
function, class, or global or arrow function. (Sugged to do further reading on
topic.)

We will use hooks. But can demo class component if requried.

## Footnote:

\* There are other options to create app in react like gatsby and nextjs.
