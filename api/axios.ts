import axios, { AxiosError, AxiosResponse } from "axios";

export async function getPokemonInfo(name: string) {
  try {
    const response: AxiosResponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    if (response.status) {
      return response.data;
    }
  } catch (e) {
    const error = e as AxiosError;
    if (error.isAxiosError) {
      return Promise.reject(error.message);
    } else {
      console.error(error);
    }
  }
}

export async function getPokemons() {
  try {
    const response: AxiosResponse = await axios.get(
      " https://pokeapi.co/api/v2/pokemon/?&limit=10"
    );

    if (response.status) {
      return response.data;
    }
  } catch (e) {
    const error = e as AxiosError;
    if (error.isAxiosError) {
      return Promise.reject(error.message);
    } else {
      console.error(error);
    }
  }
}
