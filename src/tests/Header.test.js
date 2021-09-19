import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Header from "../components/Header";

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

it("render", () => {
  act(() => {
    render(<Header />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<header class=\\"bg-white flex p-2\\">
      <div class=\\"flex-1 align-center flex\\"><strong></strong></div>
      <div class=\\"p-4 rounded-full bg-gray-200 flex justify-center align-center\\"><i class=\\"fas fa-user\\"></i></div>
    </header>"
  `);

  act(() => {
    render(<Header title="is Header" />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<header class=\\"bg-white flex p-2\\">
      <div class=\\"flex-1 align-center flex\\"><strong>is Header</strong></div>
      <div class=\\"p-4 rounded-full bg-gray-200 flex justify-center align-center\\"><i class=\\"fas fa-user\\"></i></div>
    </header>"
  `);

  act(() => {
    render(<Header title="is important Header" />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<header class=\\"bg-white flex p-2\\">
      <div class=\\"flex-1 align-center flex\\"><strong>is important Header</strong></div>
      <div class=\\"p-4 rounded-full bg-gray-200 flex justify-center align-center\\"><i class=\\"fas fa-user\\"></i></div>
    </header>"
  `);
});
