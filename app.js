import gameClient, { Game as GameClient, GameSavingData as GameSavingDataClient, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';

const game = new Game();
game.start();