# Guidance
1. Make each cell of the maze a DIV.
2. Make each row of the maze a DIV using "display: flex;"
Either A) use an absolutely-positioned DIV to represent the player's current position in the maze, or B) have your player DIV appended to a cell DIV for the same reason.
3. You need to keep track of (or retrieve on demand) the player's current position in the maze (row index and column index). You could do this one of several ways. You could keep a persistent record of the player's position in, say, a global array or object whose sole job is keeping track of the player's current position. You could constantly update your map array to reflect your player's movement (move the "S" around). You could keep your indexes in data attributes in your HTML and access them through player DIV's "parentElement" property (in the case of 3B). Or you could do a little math on the player DIV's current position on the screen, relative to the start element's current position on the screen and the size of your cells (in the case of 3A).
5. Movement can be performed a couple different ways: In the case of 3A, change the absolute position of the player DIV. Or, in the case of 3B, append the player DIV to the next cell DIV. (You could use "document.querySelector()", and the CSS selector for attributes to get the next cell element by the indexes you set on it via data attributes.)
   

# Requirements
1. The player must start on the start square.
2. Set up an event handler(s) to move your player DIV around the same way you did for the previous assessment on keyboard events.
3. Don't allow the player to move into a wall or outside the boundary of the maze.
4. When the player moves onto the finish square, show the user that they have won (don't use console.log or alert for this).
For 