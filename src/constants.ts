import { EngineName, MoveClassification } from "./types/enums";

export const CLASSIFICATION_COLORS: Record<MoveClassification, string> = {
  [MoveClassification.Book]: "#d5a47d",
  [MoveClassification.Forced]: "#d5a47d",
  [MoveClassification.Brilliant]: "#26c2a3",
  [MoveClassification.Great]: "#4099ed",
  [MoveClassification.Best]: "#3aab18",
  [MoveClassification.Excellent]: "#3aab18",
  [MoveClassification.Good]: "#81b64c",
  [MoveClassification.Inaccuracy]: "#f7c631",
  [MoveClassification.Mistake]: "#ffa459",
  [MoveClassification.Blunder]: "#fa412d",
};

export const DEFAULT_ENGINE: EngineName = EngineName.Stockfish17Lite;
export const STRONGEST_ENGINE: EngineName = EngineName.Stockfish17;

export const ENGINE_LABELS: Record<
  EngineName,
  { small: string; full: string; sizeMb: number }
> = {
  [EngineName.Stockfish17]: {
    full: "Stockfish 17 (75MB)",
    small: "Stockfish 17",
    sizeMb: 75,
  },
  [EngineName.Stockfish17Lite]: {
    full: "Stockfish 17 Lite (6MB)",
    small: "Stockfish 17 Lite",
    sizeMb: 6,
  },
  [EngineName.Stockfish16_1]: {
    full: "Stockfish 16.1 (64MB)",
    small: "Stockfish 16.1",
    sizeMb: 64,
  },
  [EngineName.Stockfish16_1Lite]: {
    full: "Stockfish 16.1 Lite (6MB)",
    small: "Stockfish 16.1 Lite",
    sizeMb: 6,
  },
  [EngineName.Stockfish16NNUE]: {
    full: "Stockfish 16 (40MB)",
    small: "Stockfish 16",
    sizeMb: 40,
  },
  [EngineName.Stockfish16]: {
    full: "Stockfish 16 Lite (HCE)",
    small: "Stockfish 16 Lite",
    sizeMb: 2,
  },
  [EngineName.Stockfish11]: {
    full: "Stockfish 11 (HCE)",
    small: "Stockfish 11",
    sizeMb: 2,
  },
};

export const PIECE_SETS = [
  "alpha",
  "anarcandy",
  "caliente",
  "california",
  "cardinal",
  "cburnett",
  "celtic",
  "chess7",
  "chessnut",
  "chicago",
  "companion",
  "cooke",
  "dubrovny",
  "fantasy",
  "firi",
  "fresca",
  "gioco",
  "governor",
  "horsey",
  "icpieces",
  "iowa",
  "kiwen-suwi",
  "kosal",
  "leipzig",
  "letter",
  "maestro",
  "merida",
  "monarchy",
  "mpchess",
  "oslo",
  "pirouetti",
  "pixel",
  "reillycraig",
  "rhosgfx",
  "riohacha",
  "shapes",
  "spatial",
  "staunty",
  "symmetric",
  "tatiana",
  "xkcd",
] as const satisfies string[];
