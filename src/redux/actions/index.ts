import {
  FLAG_LOCATION,
  REVEAL_LOCATION,
  RESET_GAME,
  INCREMENT_TRIES,
} from './../constants';

import { Options } from './../../types/';

export interface FlagLocation {
  type: FLAG_LOCATION;
  xy: string;
}

export function flagLocation(xy: string): FlagLocation {
  return {
    type: FLAG_LOCATION,
    xy,
  };
}

export interface RevealLocation {
  type: REVEAL_LOCATION;
  xy: string;
}

export function revealLocation(xy: string): RevealLocation {
  return {
    type: REVEAL_LOCATION,
    xy,
  };
}

export interface ResetGame {
  type: RESET_GAME;
  options: Options;
}

export function resetGame(options: Options): ResetGame {
  return {
    type: RESET_GAME,
    options,
  };
}

export interface IncrementTries {
  type: INCREMENT_TRIES;
}

export function incrementTries(): IncrementTries {
  return {
    type: INCREMENT_TRIES,
  };
}

export type GameAction =
  | FlagLocation
  | RevealLocation
  | ResetGame
  | IncrementTries;
