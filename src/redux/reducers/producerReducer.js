import { createSlice } from '@reduxjs/toolkit';
import { fetchProducers, fetchProducerById, addProducer } from '../actions/producerActions';

const producerSlice = createSlice({
  name: 'producers',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchProducers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProducerById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducerById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = [action.payload];
      })
      .addCase(fetchProducerById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addProducer.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addProducer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list.push(action.payload);
      })
      .addCase(addProducer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default producerSlice.reducer;
