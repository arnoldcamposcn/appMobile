import { createSlice } from '@reduxjs/toolkit';
import { getPlanet, getFilm, getPeople } from '../../services/swapiService.js';
import { Planet } from '../../types/planet.js';
import { Film } from '../../types/film.js';
import { People } from '../../types/people.js';

interface PeopleState {
    data: Planet[];
    films: Film[];
    peoples: People[];
    loading: boolean;
    error: string | null;
}

const initialState: PeopleState = {
    data: [],
    films: [],
    peoples: [],
    loading: false,
    error: null,
};

const planetSlice = createSlice({
    name: 'planet',
    initialState,
    reducers: {},
    extraReducers: builder => {
        // Manejo de getPlanet
        builder
            .addCase(getPlanet.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPlanet.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getPlanet.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Error al obtener datos';
            });

        // Manejo de getFilm
        builder
            .addCase(getFilm.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFilm.fulfilled, (state, action) => {
                state.loading = false;
                state.films = action.payload;
            })
            .addCase(getFilm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Error al obtener películas';
            });

        // Manejo de getPeople
        builder
            .addCase(getPeople.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPeople.fulfilled, (state, action) => {
                state.loading = false;
                state.peoples = action.payload;
            })
            .addCase(getPeople.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Error al obtener personajes';
            });
    },
});

export default planetSlice.reducer;
