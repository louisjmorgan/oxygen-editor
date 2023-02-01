import { act, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import {
  testAddresses,
  testAddresses2,
  testAuthToken,
} from "./Utils/mocks/testObjects";
import * as auth from "./Utils/auth";
import { fetchTrees } from "./Model/Server";
import mockGetTrees from "./Utils/mocks/responses/mockGetTrees.json";
import mockGetTreesFail from "./Utils/mocks/responses/mockGetTreesFail.json";

// jest.mock("./Utils/auth", () => ({ getUser: jest.fn(), logout: jest.fn(() => logout()) }));
jest.mock("./Model/Server", () => ({ fetchTrees: jest.fn() }));

beforeEach(() => jest.clearAllMocks());

test("renders default tree when no user information is present", () => {
  jest.spyOn(auth, "getUser").mockImplementationOnce(() => null);
  const { getByTestId } = render(<App />);
  const elements = testAddresses.map((address) =>
    getByTestId(address.toString())
  );
  elements.forEach((el) => {
    expect(el).toBeInTheDocument;
  });
});

test("renders correct tree when test account key is present", () => {
  jest.spyOn(auth, "getUser").mockImplementationOnce(() => testAuthToken);
  fetchTrees.mockImplementation(() => Promise.resolve(mockGetTrees));
  act(() => {
    const { getByTestId } = render(<App />);
  });

  const elements = testAddresses2.map(
    async (address) => await waitFor(() => getByTestId(address.toString()))
  );
  elements.forEach((el) => {
    expect(el).toBeInTheDocument;
  });
});

test("renders default tree and logs out when invalid account key is present", () => {
  jest.spyOn(auth, "getUser").mockImplementationOnce(() => "Bearer 12345");

  fetchTrees.mockImplementation(() => {
    return Promise.resolve(mockGetTreesFail);
  });

  act(() => {
    const { getByTestId } = render(<App />);
  });

  const elements = testAddresses.map(
    async (address) => await waitFor(() => getByTestId(address.toString()))
  );
  elements.forEach((el) => {
    expect(el).toBeInTheDocument;
  });
});
