import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Modal from "../components/Modal";
import * as redux from "react-redux";
import pretty from "pretty";

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

it("renders user data", async () => {
  const fakeUser = {
    id: 1,
    name: "Joni Baez",
    email: "matilda.li@example.com",
    gender: "male",
    birth: "12/13/1945",
    address: "123, Charming Avenue",
    phone: "(559)-433-0429",
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    })
  );

  const spy = jest.spyOn(redux, "useSelector");
  spy.mockReturnValue({ username: "testUseSelector" });

  const spyUseDispatch = jest.spyOn(redux, "useDispatch");
  spyUseDispatch.mockReturnValue({ username: "testUseDispatch" });

  const setOpenUser  = jest.fn()

  await act(async () => {
    render(() => {
      return <Modal closeModal={setOpenUser} id={fakeUser.id}  />;
    }, container);
  });

  //expect(pretty(container.innerHTML)).toMatchInlineSnapshot(fakeUser.name);
});
