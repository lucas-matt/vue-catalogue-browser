import { Catalogue, Content } from './Model.js'

export let sample = new Catalogue(
    "root",
    [
          new Catalogue(
              "popular",
              [],
              [
                  new Content("Die Hard", "https://ia.media-imdb.com/images/M/MV5BMzNmY2IwYzAtNDQ1NC00MmI4LThkOTgtZmVhYmExOTVhMWRkXkEyXkFqcGdeQXVyMTk5NDA3Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg"),
                  new Content("La La Land", "https://ia.media-imdb.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_UX182_CR0,0,182,268_AL_.jpg"),
                  new Content("Alien Covenant", "https://ia.media-imdb.com/images/M/MV5BNzI5MzM3MzkxNF5BMl5BanBnXkFtZTgwOTkyMjI4MTI@._V1_UX182_CR0,0,182,268_AL_.jpg"),
              ]
          )
    ],
    []
);
