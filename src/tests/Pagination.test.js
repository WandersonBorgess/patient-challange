import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Pagination from "../components/Pagination";

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
    render(<Pagination />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<ul class=\\"flex justify-center p-8 pagination\\">
      <li><button class=\\"btn\\" disabled=\\"\\">Previous</button></li>
      <li><button class=\\"pagination__item--active\\">1</button></li>
      <li><button>2</button></li>
      <li><button>3</button></li>
      <li><button>4</button></li>
      <li><button>5</button></li>
      <li><button class=\\"btn\\">Next</button></li>
    </ul>"
  `);

  act(() => {
    render(
      <Pagination limit={5} total={50} offset={2} setOffset={1} />,
      container
    );
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<ul class=\\"flex justify-center p-8 pagination\\">
      <li><button class=\\"btn\\">Previous</button></li>
      <li><button>1</button></li>
      <li><button>2</button></li>
      <li><button>3</button></li>
      <li><button>4</button></li>
      <li><button>5</button></li>
      <li><button class=\\"btn\\">Next</button></li>
    </ul>"
  `);
});
