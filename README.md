# Memory Matching Game - Project 3 (JavaScript)

## Overview
This project is a simple **Memory Matching Game** built using **HTML**, **CSS**, and **JavaScript**. The goal of the game is to match pairs of cards by flipping them over two at a time. The game ends when all the cards have been matched. It's a fun way to test and improve your memory skills!

### Features
- **Card Matching Mechanism:** Players can click to flip cards, revealing images. The aim is to match two cards with the same image.
- **Timer:** A countdown timer that tracks how long it takes to match all the cards.
- **Move Counter:** Displays the number of moves taken to complete the game.
- **Winning Condition:** The game ends when all card pairs are matched, and a "You Win!" message is displayed.
- **Card Shuffle:** The cards are shuffled randomly each time the game starts.

## Demo
You can view the game in action here: [Memory Matching Game](#)

## Technologies Used
- **HTML** - For creating the structure of the game.
- **CSS** - For styling the game elements and creating an interactive user interface.
- **JavaScript** - For handling the game logic, including flipping cards, matching pairs, updating the timer, and managing the game flow.

## How to Play
1. **Start the Game**: Click the "Start Game" button to shuffle the cards and begin playing.
2. **Flip Cards**: Click on any card to flip it. The game will show the image on the card.
3. **Match Pairs**: Try to match two cards with the same image. If they match, they will stay flipped over.
4. **Game End**: The game will end when all pairs are matched, and a "You Win!" message will be displayed, showing your time and move count.

## Game Controls
- **Start/Restart Button**: Allows the user to start a new game or restart the current game.
- **Move Counter**: Tracks the number of moves you make.
- **Timer**: Counts how much time you take to finish the game.
- **Cards**: Clickable elements that reveal their face when clicked.

## Code Structure
### HTML
The structure consists of:
- A `div` container for the card deck.
- `section` for game controls, including the timer and move counter.
- A restart button to start a new game.

### CSS
The styling includes:
- Flexbox layout to arrange the cards in a grid.
- CSS transitions for smooth card flipping animations.
- Visual cues for matching pairs (cards turning green when they match).
  
### JavaScript
The script handles:
- Card shuffling and arrangement at the start of the game.
- Event listeners for card flipping.
- Logic for checking if two flipped cards match.
- Timer and move counter updates.
- Winning condition and restart functionality.

## Installation

1. Clone this repository to your local machine using:
   ```bash
   git clone https://github.com/yourusername/memory-matching-game.git
   ```

2. Navigate into the project directory:
   ```bash
   cd memory-matching-game
   ```

3. Open the `index.html` file in your preferred browser to play the game.

## How It Works
### 1. **Shuffling Cards**
Cards are represented as HTML `div` elements. When the game starts, the cards are shuffled using JavaScript's `Math.random()` to randomize their positions.

### 2. **Flipping Cards**
Each card has an event listener attached to it that listens for a click. When a card is clicked, it reveals its content (image or number). After two cards are flipped, the game checks if they match.

### 3. **Matching Logic**
- When two cards are flipped, their images are compared.
- If they match, they stay flipped; otherwise, they are flipped back after a short delay.

### 4. **Game Timer**
A timer is activated when the game begins, counting down the seconds until the user matches all the pairs.

### 5. **Move Counter**
Each time a player flips two cards, it counts as a move. The move counter updates to reflect the number of moves taken to complete the game.

### 6. **Winning Condition**
Once all pairs are matched, the game ends, and the "You Win!" message appears. The time taken and the number of moves are displayed.

## Example of the Game Flow
1. The player starts the game.
2. Cards are shuffled and displayed face-down.
3. The player clicks to flip cards and tries to match pairs.
4. If two cards are flipped and match, they remain visible.
5. The game continues until all pairs are matched.
6. The player wins and sees their total time and moves taken.

## Contributing
Feel free to fork this project, make changes, and submit pull requests. Contributions are welcome!

Enjoy playing and experimenting with the **Memory Matching Game**!
