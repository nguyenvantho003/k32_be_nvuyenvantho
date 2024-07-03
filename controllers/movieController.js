import mongoose from "mongoose";
import Movies from "../models/MovieModel";
import { handleResponseError, handleResponseSuccess } from "../utils/responses.js";

const getMovie = async (req, res) => {
    try {
        const movies = await Movies.find()
        handleResponseSuccess(res, 200, "Get movies successfully", { movies })
    } catch (error) {
        console.log("error", error)
        handleResponseError(res, 500, "Internal sever error")
    }
}

const getMovieByIdID = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        handleResponseError(res, 400, "Incorrect format id")
        return
    }
    const checkMovieIdInDB = await Movies.findByDB(id)
    if (!checkMovieIdInDB) {
        handleResponseError(res, 404, "Movie not found")
        return
    }
    handleResponseSuccess(res, 200, "Get movie successfully", {
        title: checkMovieIdInDB.title,
        year: checkMovieIdInDb.year,
        poster: checkMovieIdInDb.poster
    })
}

const createNewMovie = async (req, res) => {
    const { title, year, poster } = req.body
    if (!title || !year || !poster) {
        handleResponseError(res, 400, "All fields are required")
        return
    }
    const newMovie = await Movies.create({ title, year, poster })
    handleResponseSuccess(res, 201, "Create new movie successfully", { ...newMovie })
}

const updateMovie = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        handleResponseError(res, 400, "Incorrect format id")
        return
    }
    const checkMovieIdInDb = await Movies.findById(id)
    if (!checkMovieIdInDb) {
        handleResponseError(res, 404, "Movie not found")
        return
    }

    const { title, year, poster } = req.body
    if(!title || !year || !poster) {
        handleResponseError(res, 400, "Bad request. All fields are required ")
        return
    }
    checkMovieIdInDb.updateOne({ title, year, poster })
    handleResponseSuccess(res, 200, "Update movie successfully", {...checkMovieIdInDb})

}
const deleteMovie = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        handleResponseError(req, 400, "Incorrect format id")
        return
    }
    const checkMovieIdInDB = await Movies.findById(id)
    if (!checkMovieIdInDb) {
        handleResponseError(res, 404, "Movie not found")
        return
    }
    await Movies.findById
}