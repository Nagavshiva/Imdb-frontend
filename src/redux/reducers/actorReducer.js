import { createSlice } from '@reduxjs/toolkit';
import { fetchActors, fetchActorById, addActor } from '../actions/actorActions';

const actorSlice = createSlice({
    name: 'actors',
    initialState: {
        list: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchActors.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchActors.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = action.payload;
            })
            .addCase(fetchActors.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchActorById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchActorById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log([action.payload])
                // Assuming the response contains a single actor, update the list or store it in a separate field as needed
                state.list = [action.payload];
            })
            .addCase(fetchActorById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addActor.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addActor.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list.push(action.payload);
            })
            .addCase(addActor.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default actorSlice.reducer;
