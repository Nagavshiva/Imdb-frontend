import { createAsyncThunk} from '@reduxjs/toolkit';
import actorService from '../services/actorService';

export const fetchActors = createAsyncThunk('actors/fetchActors', async () => {
  const response = await actorService.getAllActors();
  return response;
});

export const fetchActorById = createAsyncThunk('actors/fetchActorById', async (id) => {
  const response = await actorService.getActorById(id);
  return response;
});

export const addActor = createAsyncThunk('actors/addActor', async (actorData) => {
  const response = await actorService.addActor(actorData);
  return response;
});