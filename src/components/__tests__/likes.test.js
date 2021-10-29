import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

import Likes from "../likes";

let contenedor;

//helpers
beforeEach(() => {
  contenedor = document.createElement("div");
  document.body.appendChild(contenedor);
  act(() => {
    ReactDOM.render(<Likes />, contenedor);
  });
});

afterEach(() => {
  document.body.removeChild(contenedor);
  contenedor = null;
});

//suite
describe("Testing like component", () => {
  it("0 likes por defecto", () => {
    const p = contenedor.querySelector("p");
    expect(p.textContent).toBe("Likes: 0");
  });

  it("likes incrementa", () => {
    const p = contenedor.querySelector("p");
    const incrementar = contenedor.querySelector("#incrementar");
    act(() => {
      incrementar.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(p.textContent).toBe("likes: 1");
  });

  it("likes decrece", () => {
    const p = contenedor.querySelector("p");
    const decrementar = contenedor.querySelector("#decrementar");
    act(() => {
      decrementar.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(p.textContent).toBe("likes: -1");
  });
});
