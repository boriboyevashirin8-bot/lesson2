import React from "react";
import rasm from "../assets/img/logo.svg"


export default function Header() {
    return (
      <header class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 sticky top-0 bg-white" >
      <div class="max-w-screen-xl mx-auto flex items-center justify-between relative">
        <div class="flex items-center">
          <img
            src={rasm}
            alt="SMMFLOW"
            class="h-8 w-auto transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-md"
          />
        </div>
        <nav class="hidden lg:flex items-center space-x-10 text-[15px] font-semibold ml-10">
          <a
            href="#"
            class="text-gray-900 hover:text-blue-500 relative group transition-all duration-300"
          >
            Услуги
            <span
              class="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
          <a
            href="#"
            class="text-gray-900 hover:text-blue-500 relative group transition-all duration-300"
          >
            Преимущества
            <span
              class="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
          <a
            href="#"
            class="text-gray-900 hover:text-blue-500 relative group transition-all duration-300"
          >
            Отзывы
            <span
              class="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"
            ></span>
          </a>
        </nav>
        <div class="hidden lg:flex items-center space-x-3 ml-auto">
          <button
            class="h-[40px] px-4 border border-gray-300 text-[15px] font-semibold text-blue-500 rounded-[6px] transition duration-300 ease-in-out hover:border-blue-500 hover:text-blue-600 hover:scale-105 hover:shadow-md"
          >
            Войти
          </button>
          <button
            class="h-[40px] px-5 bg-blue-500 text-white text-[15px] font-semibold rounded-[6px] transition duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 hover:shadow-lg"
          >
            Быстрый заказ
          </button>
        </div>
        <button
          id="menu-toggle"
          class="lg:hidden ml-auto z-20 focus:outline-none transition duration-300 hover:rotate-6 hover:text-blue-600"
        >
          <svg
            class="w-7 h-7 text-gray-800"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          id="mobile-menu"
          class="hidden absolute top-full left-0 w-full bg-white shadow-md rounded-md p-6 flex flex-col space-y-4 lg:hidden"
        >
          <a href="#" class="text-gray-900 font-semibold hover:text-blue-500">
            Услуги
          </a>
          <a href="#" class="text-gray-900 font-semibold hover:text-blue-500">
            Преимущества
          </a>
          <a href="#" class="text-gray-900 font-semibold hover:text-blue-500">
            Отзывы
          </a>
          <button class="w-full border border-gray-300 text-blue-500 py-2 rounded-md hover:border-blue-500 hover:bg-gray-50 transition">
            Войти
          </button>
          <button class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
            Быстрый заказ
          </button>
        </div>
      </div>
    </header>
    
    );
  }
  