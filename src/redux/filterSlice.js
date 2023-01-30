import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  // Ім'я слайсу
  name: 'filter',
  // Початковий стан редюсера слайсу
  initialState: '',
  // Об'єкт редюсерів
  reducers: {
    changeFilter(_, action) {
      return action.payload;
    },
  },
});

// Генератори екшенів
export const { changeFilter } = filterSlice.actions;
// Редюсер слайсу
export const filterReducer = filterSlice.reducer;
