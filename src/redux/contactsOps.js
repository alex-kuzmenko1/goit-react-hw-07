import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://68516cdd8612b47a2c0a078f.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/contacts');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const res = await axios.post('/contacts', contact);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});