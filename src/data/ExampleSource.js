import {Catalogue, Content} from './Model.js'

export let sample = [
        new Catalogue(
            "popular",
            [
                new Content("Die Hard", "John McClane, officer of the NYPD, tries to save his wife Holly Gennaro and several others that were taken hostage by German terrorist Hans Gruber during a Christmas party at the Nakatomi Plaza in Los Angeles.", "https://ia.media-imdb.com/images/M/MV5BMzNmY2IwYzAtNDQ1NC00MmI4LThkOTgtZmVhYmExOTVhMWRkXkEyXkFqcGdeQXVyMTk5NDA3Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg"),
                new Content("La La Land", "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.", "static/images/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_UX182_CR0,0,182,268_AL_.jpg"),
                new Content("Alien Covenant", "The crew of a colony ship, bound for a remote planet, discover an uncharted paradise with a threat beyond their imagination, and must attempt a harrowing escape.", "static/images/MV5BNzI5MzM3MzkxNF5BMl5BanBnXkFtZTgwOTkyMjI4MTI@._V1_UX182_CR0,0,182,268_AL_.jpg"),
            ]
        ),
        new Catalogue(
            "disney",
            [
                new Content("Tangled", "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is.", "static/images/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_UX182_CR0,0,182,268_AL_.jpg"),
                new Content("Frozen", "When the newly-crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.", "static/images/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg"),
                new Content("Toy Story", "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.", "static/images/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg"),
                new Content("Monsters Inc.", "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, 2 monsters realize things may not be what they think.", "static/images/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_UX182_CR0,0,182,268_AL_.jpg"),
                new Content("Cinderella", "When her father unexpectedly passes away, young Ella finds herself at the mercy of her cruel stepmother and her scheming step-sisters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger.", "static/images/MV5BMjMxODYyODEzN15BMl5BanBnXkFtZTgwMDk4OTU0MzE@._V1_UX182_CR0,0,182,268_AL_.jpg"),
            ]
        ),
        new Catalogue(
            "comedy",
            [
                new Content("The Simpsons", "After Homer accidentally pollutes the town's water supply, Springfield is encased in a gigantic dome by the EPA and the Simpson family are declared fugitives.", "static/images/MV5BMTgxMDczMTA5N15BMl5BanBnXkFtZTcwMzk1MzMzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg"),
                new Content("Anchorman", "Ron Burgundy is San Diego's top-rated newsman in the male-dominated broadcasting of the 1970s, but that's all about to change for Ron and his cronies when an ambitious woman is hired as a new anchor.", "static/images/MV5BMTQ2MzYwMzk5Ml5BMl5BanBnXkFtZTcwOTI4NzUyMw@@._V1_UX182_CR0,0,182,268_AL_.jpg"),
                new Content("Wayne's World", "Two slacker friends try to promote their public-access cable show.", "static/images/MV5BMDAyNDY3MjUtYmJjYS00Zjc5LTlhM2MtNzgzYjNlOWVkZjkzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"),
                new Content("Blues Brothers", "Jake Blues, just out from prison, puts together his old band to save the Catholic home where he and brother Elwood were raised.", "static/images/MV5BYTdlMDExOGUtN2I3MS00MjY5LWE1NTAtYzc3MzIxN2M3OWY1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"),
                new Content("This is Spinal Tap", "Spinal Tap, one of England's loudest bands, is chronicled by film director Marty DiBergi on what proves to be a fateful tour.", "static/images/MV5BMTQ2MTIzMzg5Nl5BMl5BanBnXkFtZTgwOTc5NDI1MDE@._V1_UX182_CR0,0,182,268_AL_.jpg"),
                new Content("Superbad", "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.", "static/images/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxNDE1MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"),
            ]
        ),
        new Catalogue(
            "horror",
            [
                new Content("The Ring", "A journalist must investigate a mysterious videotape which seems to cause the death of anyone in a week of viewing it.", "static/images/MV5BNDA2NTg2NjE4Ml5BMl5BanBnXkFtZTYwMjYxMDg5._V1_UX182_CR0,0,182,268_AL_.jpg"),
                new Content("The Conjuring", "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.", "static/images/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"),
                new Content("Insidious", "A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further.", "static/images/MV5BMTYyOTAxMDA0OF5BMl5BanBnXkFtZTcwNzgwNTc1NA@@._V1_UX182_CR0,0,182,268_AL_.jpg"),
                new Content("The Thing", "A crew in Antarctica finds a neighboring camp destroyed and its crew dead. Whatever killed them is nowhere to be found, unless it's hidden in plain sight.", "static/images/MV5BNDcyZmFjY2YtN2I1OC00MzU3LWIzZGEtZDA5N2VlNDJjYWI3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"),
            ]
        )
];
