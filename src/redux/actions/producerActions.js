import { createAsyncThunk } from '@reduxjs/toolkit';
import producerService from '../services/producerService';

export const fetchProducers = createAsyncThunk('producers/fetchProducers', async () => {
  const response = await producerService.getAllProducers();
  return response;
});

export const fetchProducerById = createAsyncThunk('producers/fetchProducerById', async (id) => {
  const response = await producerService.getProducerById(id);
  return response;
});

export const addProducer = createAsyncThunk('producers/addProducer', async (producerData) => {
  const response = await producerService.addProducer(producerData);
  return response;
});
