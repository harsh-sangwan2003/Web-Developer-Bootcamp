var movie = [
    { title: "In Burges", rating: 5, hasWatched: true },
    { title: "Frozen", rating: 4.5, hasWatched: false },
    { title: "Mad Max Fury Road", rating: 5, hasWatched: true },
    { title: "Les Miserables", rating: 3.5, hasWatched: false },
]

movie.forEach(m => {

    if (m["hasWatched"])
        console.log('You have watched "', m["title"], '" - ', m["rating"], ' stars')

    else
        console.log('You have not seen "', m["title"], '" - ', m["rating"], ' stars')
})