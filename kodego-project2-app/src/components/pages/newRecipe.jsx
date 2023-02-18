import React from 'react'
import Sidebar from '../semantics/Sidebar'

export default function NewRecipe() {
  return (
    <main className="container-fluid row max-vh-100 m-0 p-0">
      <Sidebar />
      <section className="col-8 max-vw-75 min-vh-100 ms-5 ps-5">
        <section className="row">
          <div className="position-absolute top-50 start-50 translate-middle w-50 vh-25 p-5">
            <div>
              <form className="row ms-5">
                <section className="col">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label fs-6">
                      Dish Name
                    </label>
                    <input type="email" class="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text"></div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label fs-6">
                      Description
                    </label>
                    <textarea type="email" class="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text"></div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label fs-6">
                      Ingredients
                    </label>
                    <textarea type="email" class="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text"></div>
                  </div>
                </section>
                <section className="col">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label fs-6">
                      Instructions
                    </label>
                    <textarea type="textarea" class="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text"></div>
                  </div>
                  <button type="submit" class="btn btn-warning mb-2 px-3 fs-5">
                    Add Recipe
                  </button>
                </section>
              </form>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

 