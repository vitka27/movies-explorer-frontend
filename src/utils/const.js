export const visabilityPathHeaderFooter = [
  "/",
  "/profile",
  "/movies",
  "/saved-movies",
];

export const BASE_URL_MOVIES = "https://api.nomoreparties.co/";
export const BASE_URL_MAIN = "https://api.bitfilmsdb.nomoredomainsrocks.ru";

export const SCREEN_SETTINGS = {
  default: {
    width: 1280,
    cards: {
      initialQuantityMovies: 16,
      stepDisplayMovie: 4,
    },
  },
  desktop: {
    width: 1280,
    cards: {
      initialQuantityMovies: 12,
      stepDisplayMovie: 3,
    },
  },
  tablet: {
    width: 1024,
    cards: {
      initialQuantityMovies: 8,
      stepDisplayMovie: 2,
    },
  },
  mobile: {
    width: 640,
    cards: {
      initialQuantityMovies: 5,
      stepDisplayMovie: 2,
    },
  },
};
