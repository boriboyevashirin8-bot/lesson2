
import React from "react";
import rasm from "../assets/img/logo.svg" 
import mir from "../assets/img/mir.svg" 
import visa from "../assets/img/visa.svg" 
import apel from "../assets/img/apel.svg"
import qiv from "../assets/img/qiv.svg"



export default function Footer() {
  return (
    <footer class="bg-gray-200 px-6 sm:px-10 md:px-[60px] py-10 text-sm text-gray-800 mt-[80px]">
    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    
      <div>
        <div class="flex items-center space-x-2 mb-3">
          <img src={rasm} alt="rasm" class="w-[109px] h-[24px] object-contain" />
        </div>
        <p class="font-bold text-[14px] leading-relaxed mb-4">
          SMMFLOW — сервис, где вы сможете приобрести качественное продвижение в социальных сетях по выгодным ценам.
        </p>
        <div class="flex space-x-3 flex-wrap gap-1">
          <img src={mir} alt="rasm" class="h-6" />
          <img src={visa} alt="rasm" class="h-6" />
          <img src={apel} alt="rasm" class="h-6" />
          <img src={qiv} alt="rasm" class="h-6" />
        </div>
      </div>
      <div class="space-y-2 font-bold">
        <a href="#" class="block hover:underline">Каталог услуг</a>
        <a href="#" class="block hover:underline">Преимущества</a>
        <a href="#" class="block hover:underline">Отзывы</a>
      </div>
      <div class="space-y-2 font-bold">
        <a href="#" class="block hover:underline">Политика конфиденциальности</a>
        <a href="#" class="block hover:underline">Публичная оферта</a>
        <a href="#" class="block hover:underline">Пользовательское соглашение</a>
        <a href="#" class="block hover:underline">Правила сервиса</a>
        <a href="#" class="block hover:underline">Контакты</a>
      </div>
      <div>
        <p class="font-bold mb-3">Нужна помощь?</p>
        <button
          class="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded transition mb-3"
        >
          Онлайн-чат
        </button>
        <p class="font-bold break-words">support@smmflow.net</p>
      </div>
    </div>
  </footer>
  );
}
    