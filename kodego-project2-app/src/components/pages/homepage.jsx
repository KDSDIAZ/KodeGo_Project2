import React from "react";
import { TabTitle } from "../utilities/Title";
export default function Homepage() {
  TabTitle("Home Page");
  return (
    <main className="container-fluid bg-dark min-vh-100 m-0">
      <div className="text-center p-3 mb-2">
        <h1 className="text-white">KodeGo's Kitchen</h1>
      </div>
      <div className="row d-flex justify-content-center p-2">
        <form class="w-50 h-50 pb-3" role="search">
          <input class="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </div>
      <section className="row min-vh-100 border border-success mb-3">
        <div className="col border border-primary min-vh-100">

        </div>
        <div className="col border border-primary min-vh-100">

        </div>
      </section>
      <section className="row min-vh-100 border border-danger">
        <h4 className="text-white m-0">Recipes you might like</h4>
        <div className="col min-vh-100">

        </div>
      </section>
    </main>
  );
}
