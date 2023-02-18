import React from 'react'
import Sidebar from '../semantics/Sidebar';
import { TabTitle } from '../utilities/Title';
import '../css/style.css'
export default function Dashboard() {
TabTitle('Dashboard');
  return(
  <main className='container-fluid row max-vh-100 m-0 p-0'>
    <Sidebar/>
    <section className='col-8 w-75 min-vh-100 m-0 p-0'></section>
  </main>
  )}

