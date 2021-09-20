import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import * as redux from "react-redux";
import pretty from "pretty";
import PatientData from "../screens/List/components/PatientData";

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

it("render", async () => {
  const fakeUser = {
    onclick: false,
    gender: "male",
    date: "1/11/1972",
    fistName: "Pierre-André",
    lastName: "Lacroix",
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    })
  );

  const setClick = jest.fn();

  await act(async () => {
    render(
      <PatientData
        onclick={setClick}
        firstName={fakeUser.firstName}
        lastName={fakeUser.lastName}
        gender={fakeUser.gender}
        date={fakeUser.date}
      />,
      container
    );
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<ul class=\\"flex list-row\\">
      <li class=\\"border-r-2 border-gray-600 p-2 w-1/4 bg-white-100 flex align-center justify-center\\">
        <div><strong class=\\"text-gray-600\\"></strong><strong class=\\"text-gray-600 pl-2\\">Lacroix</strong></div>
      </li>
      <li class=\\"border-r-2 border-gray-600 p-2 w-1/4 bg-white-100 flex align-center justify-center\\">
        <p class=\\"text-gray-600\\">Male</p>
      </li>
      <li class=\\"border-r-2 border-gray-600 p-2 w-1/4 bg-white-100 flex align-center justify-center\\">
        <p class=\\"text-gray-600\\">11/01/1972</p>
      </li>
      <li class=\\"border-gray-600 p-2 w-1/4 bg-white-100 flex align-center justify-center\\"><span class=\\"bg-gray-600 cursor-pointer text-center rounded p-2 w-1/2\\"><strong class=\\"text-white\\">View</strong></span></li>
    </ul>"
  `);
});
