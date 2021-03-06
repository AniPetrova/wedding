import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyB59JtFpyM_QTHXHocvr4yaXnGi572JZrw",
  authDomain: "petya-and-deyan.firebaseapp.com",
  projectId: "petya-and-deyan",
  storageBucket: "petya-and-deyan.appspot.com",
  messagingSenderId: "868458380394",
  appId: "1:868458380394:web:122d3211b29e6c0347de13",
  measurementId: "G-FPKW5SERK7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

window.addEventListener("load", (e) => {

  const page1 = document.querySelector(".page-1");

  const page2 = document.querySelector(".page-2");

  const page3 = document.querySelector(".page-3");

  const page4 = document.querySelector(".page-4");

 

  let activePage = page1;

 

  const btn1 = document.querySelector("#btn-page-1");

  const btn2Left = document.querySelector("#btn-page-2-left");

  const btn2Right = document.querySelector("#btn-page-2-right");

  const btn3Left = document.querySelector("#btn-page-3-left");

  const btn3Right = document.querySelector("#btn-page-3-right");

  const btn4Left = document.querySelector("#btn-page-4-left");

 

  btn1.addEventListener("click", (e) => {

    e.preventDefault();

    activePage.classList.add("hidden");

    page2.classList.remove("hidden");

    activePage = page2;

  });

 

  btn2Left.addEventListener("click", (e) => {

    e.preventDefault();

    activePage.classList.add("hidden");

    page1.classList.remove("hidden");

    activePage = page1;

  });

 

 

  btn2Right.addEventListener("click", (e) => {

    e.preventDefault();

    activePage.classList.add("hidden");

    page3.classList.remove("hidden");

    activePage = page3;

  });

 

  btn3Left.addEventListener("click", (e) => {

    e.preventDefault();

    activePage.classList.add("hidden");

    page2.classList.remove("hidden");

    activePage = page2;

  });

 

 

  btn3Right.addEventListener("click", (e) => {

    e.preventDefault();

    activePage.classList.add("hidden");

    page4.classList.remove("hidden");

    activePage = page4;

  });

 

  btn4Left.addEventListener("click", (e) => {

    e.preventDefault();

    activePage.classList.add("hidden");

    page3.classList.remove("hidden");

    activePage = page3;

  });

});