import { AxiosError } from "axios";
import { Request, Response } from "express";
import { handleHttpError } from "./errors";

const mockResponse = () => {
  const res: Partial<Response> = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

describe("handleHttpError", () => {
  const req = {} as Request;
  const res = mockResponse();
  const next = jest.fn();

  it("should respond with the correct status and text", async () => {
    const error = new AxiosError(
      "message",
      "code",
      {},
      {},
      {
        status: 404,
        statusText: "Test status text",
        data: {},
        headers: {},
        config: {},
      }
    );

    await handleHttpError(error, req, res as Response, next);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith("Test status text");
  });

  it("should pass other errors to next", async () => {
    const error = new Error("Test error");

    await handleHttpError(error, req, res as Response, next);
    expect(next).toHaveBeenCalledWith(error);
  });
});
