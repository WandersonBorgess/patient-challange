import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import SearchInput from "../components/SearchInput";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render pagination", () => {
  act(() => {
    render(<SearchInput />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<div class=\\"justify-center align-center flex mt-8 mb-8 relative\\"><input class=\\"border-2 p-2 rounded w-full border-gray-400\\" type=\\"search\\" value=\\"\\"></div>"`
  );

  const change = jest.fn();

  act(() => {
    render(<SearchInput value="It's work" onChange={change} />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<div class=\\"justify-center align-center flex mt-8 mb-8 relative\\"><input class=\\"border-2 p-2 rounded w-full border-gray-400\\" type=\\"search\\" value=\\"\\"></div>"`
  );
});
