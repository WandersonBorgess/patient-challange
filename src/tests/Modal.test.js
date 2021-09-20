import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import * as redux from "react-redux";
import Modal from "../components/Modal";
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

it("render", async () => {
  const fakeUser = {
    closeModal: false,
    id: "1234",
    thumbnail: "imagem",
    gender: "male",
    address: "Rue de L Abbé-Patureau",
    date: "1/11/1972",
    fistName: "Pierre-André",
    lastName: "Lacroix",
    phone: "077 708 86 12",
    email: "pierre-andre.lacroix@example.com",
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

  const setOpenUser = jest.fn();

  await act(async () => {
    render(
      <Modal
        closeModal={setOpenUser}
        id={fakeUser.id}
        thumbnail={fakeUser.thumbnail}
        gender={fakeUser.gender}
        address={fakeUser.address}
        date={fakeUser.date}
        fistName={fakeUser.fistName}
        lastName={fakeUser.lastName}
        phone={fakeUser.phone}
        email={fakeUser.email}
      />,
      container
    );
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"modal-bg\\">
      <div class=\\"flex justify-center modal p-16 h-full\\">
        <div class=\\"w-1/3 mb-16, h-full bg-white rounded card\\">
          <div>
            <div class=\\"flex justify-center relative\\">
              <div class=\\"bg-gray-200 w-20 h-20 rounded-full mt-4 absolute picture\\" style=\\"top: -50px;\\"><img src=\\"imagem\\" alt=\\"\\" height=\\"80\\" width=\\"80\\" class=\\"rounded-full\\"></div><i class=\\"fas fa-times absolute right-1 top-1 cursor-pointer p-2 text-gray-600\\" width=\\"30px\\" height=\\"30px\\"></i>
            </div>
            <div class=\\"p-8 mt-8\\">
              <div class=\\"flex p-2\\"></div>
              <div class=\\"flex-column p-2 item\\"><strong class=\\"text-gray-600\\">Name</strong>
                <p>Pierre-André Lacroix</p>
              </div>
              <div class=\\"flex-column p-2 item\\"><strong class=\\"text-gray-600\\">Email</strong>
                <p>pierre-andre.lacroix@example.com</p>
              </div>
              <div class=\\"flex-column p-2 item\\"><strong class=\\"text-gray-600\\">Gender</strong>
                <p>male</p>
              </div>
              <div class=\\"flex-column p-2 item\\"><strong class=\\"text-gray-600\\">Birth date</strong>
                <p>1/11/1972</p>
              </div>
              <div class=\\"flex p-2 item\\"><strong class=\\"text-gray-600 pr-4\\">Address:</strong>
                <p>Rue de L Abbé-Patureau</p>
              </div>
              <div class=\\"flex-column p-2 item\\"><strong class=\\"text-gray-600\\">Phone</strong>
                <p>077 708 86 12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>"
  `);
});
