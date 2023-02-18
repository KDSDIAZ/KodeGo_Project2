import React from 'react'
import { TabTitle } from '../utilities/Title'
export default function Register() {
TabTitle('Admin Register')
  return (
    <main className="container-fluid bg-dark vh-100">
      <section className="d-flex justify-content-center align-center text-center">
        <div className="card position-absolute top-50 start-50 translate-middle w-25 vh-25 p-5">
          <div className="card-body">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label fs-4">
                  Full Name
                </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text"></div>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label fs-4">
                  Email address
                </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text"></div>
              </div>
              <div class="mb-4">
                <label class="form-label fs-4">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <button type="submit" class="btn btn-warning mb-2 px-3 fs-5">
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );}

