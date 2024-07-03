import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import { authRoutes } from './routes/authRoutes.js';
import { movieRoutes } from './routes/movieRoutes.js';

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
