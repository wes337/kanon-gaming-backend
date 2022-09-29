import axios from "axios";
import { RestCountry } from "./types";

const REST_API_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async () => {
  const url = `${REST_API_URL}/all`;
  const results = await axios.get(url);
  const allCountries: RestCountry[] = results.data;

  return allCountries;
};

export const getCountryByName = async (name: string) => {
  const url = `${REST_API_URL}/name/${name}?fullText=true`;
  const results = await axios.get(url);
  const country: RestCountry = results.data[0];

  return country;
};

export const findCountries = async (queries: string[]) => {
  const countries: RestCountry[] = [];

  for await (const query of queries) {
    const url = `${REST_API_URL}/name/${query}`;
    const results = await axios.get(url);
    const foundCountries: RestCountry[] = results.data;
    countries.push(...foundCountries);
  }

  return countries;
};
