// api.ts
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE = 'https://swapi.py4e.com/api/';

export const getPlanet = createAsyncThunk('planets/fetch', async () => {
    const response = await axios.get(`${API_BASE}planets/`);
    return response.data.results;
});

export const getFilm = createAsyncThunk('films/fetch', async () => {
    const response = await axios.get(`${API_BASE}films/`);
    return response.data.results;
});

export const getPeople = createAsyncThunk('people/fetch', async () => {
    const response = await axios.get(`${API_BASE}people/`);
    return response.data.results;
});
