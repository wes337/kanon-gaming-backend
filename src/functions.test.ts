import axios from "axios";
import { findCountries } from "./functions";

jest.mock("axios");

describe("findCountries", () => {
  it("should search for each string in the array", async () => {
    const queries = ["Canada", "Finland", "Sweden"];
    (axios.get as jest.Mock).mockResolvedValue({ data: [] });
    await findCountries(queries);
    expect(axios.get).toHaveBeenCalledTimes(queries.length);
  });
});
