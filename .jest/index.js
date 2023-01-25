import "@testing-library/jest-dom";
import fileMock from "./fileMock";

fileMock();

window.scrollTo = jest.fn();
