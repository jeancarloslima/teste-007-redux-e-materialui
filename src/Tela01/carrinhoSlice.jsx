import { createSlice } from '@reduxjs/toolkit';

export const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: {
    totalItens: 0,
  },
  reducers: {
    adicionarItem: (state) => {
      state.totalItens += 1;
    },
    limparCarrinho: (state) => {
      state.totalItens = 0;
    },
  },
});

export const { adicionarItem, limparCarrinho } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;