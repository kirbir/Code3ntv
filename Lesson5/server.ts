import express from "express";

const app = express();
const port = 8000;



app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

/// GET MOVIE BY ID
app.get("/movies/:id", (request, response)=>{
    const {id} request.params as {id:string};
    const movies = loadMovies();

    const movie = movies.find((movie)=> {
        return movie.id === id;
    });

    if (!movie) {
        response.status(404);
        return;
    }

    response.status(200).json(movie);
})
