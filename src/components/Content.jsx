import React from "react";
import qiz from "../assets/img/qiz.svg"
import qiz2 from "../assets/img/qiz2.svg"
import boy from "../assets/img/boy.svg"
import insta from "../assets/img/insta.svg"
import wk from "../assets/img/wk.svg"
import tik from "../assets/img/tik.svg"
import tel from "../assets/img/tel.svg"
import you from "../assets/img/you.svg"
import fake from "../assets/img/fake.svg"
import tiv from "../assets/img/tiv.svg"
import tw from "../assets/img/tw.svg"
import ru from "../assets/img/ru.svg"




export default function Content() {
    return (
        <main>
        <div className="max-w-7xl mx-auto p-6 sm:p-8 lg:p-12 rounded-md bg-gray-100 flex flex-col-reverse md:flex-row justify-between items-center mt-[2px] gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-snug">
              Продвижение во всех <br /> соцсетях за пару кликов
            </h1>
            <p className="mt-4 max-w-md text-sm sm:text-base mx-auto md:mx-0">
              Получайте подписчиков, лайки, репосты, просмотры, прослушивания и любую
              другую активность на свои профили в социальных сетях по самым низким
              ценами на рынке и в самые быстрые сроки!
            </p>
            <button className="w-[200px] sm:w-[220px] md:w-[240px] h-[55px] bg-blue-500 mt-10 sm:mt-12 md:mt-20 rounded-lg text-white font-semibold hover:bg-blue-600 transition">
              Начать продвижение
            </button>
          </div>
          <div className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[450px]">
            <img className="w-full" src={qiz} alt="rasm" />
          </div>
        </div>
      
       
        <div className="max-w-7xl mx-auto bg-[#0058FF] text-white p-6 sm:p-8 rounded-md mt-12">
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-center mb-8 sm:mb-12">
            Быстрый заказ
          </h1>
      
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <button className="flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-md text-sm sm:text-base hover:bg-gray-200 transition">
                <img src={insta} alt="Instagram" className="w-5 h-5" /> Instagram
              </button>
              <button className="flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-md text-sm sm:text-base hover:bg-gray-200 transition">
                <img src={wk} alt="VK" className="w-5 h-5" /> VK
              </button>
              <button className="flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-md text-sm sm:text-base hover:bg-gray-200 transition">
                <img src={tik} alt="TikTok" className="w-5 h-5" /> TikTok
              </button>
              <button className="flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-md text-sm sm:text-base hover:bg-gray-200 transition">
                <img src={tel} alt="Telegram" className="w-5 h-5" /> Telegram
              </button>
              <button className="flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-md text-sm sm:text-base hover:bg-gray-200 transition">
                <img src={you} alt="YouTube" className="w-5 h-5" /> YouTube
              </button>
              <button className="flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-md text-sm sm:text-base hover:bg-gray-200 transition">
                <img src={fake} alt="Facebook" className="w-5 h-5" /> Facebook
              </button>
              <button className="flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-md text-sm sm:text-base hover:bg-gray-200 transition">
                <img src={tiv} alt="Twitter" className="w-5 h-5" /> Twitter
              </button>
              <button className="flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-md text-sm sm:text-base hover:bg-gray-200 transition">
                <img src={tw} alt="Twitch" className="w-5 h-5" /> Twitch
              </button>
              <button className="flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-md text-sm sm:text-base hover:bg-gray-200 transition">
                <img src={ru} alt="RuTube" className="w-5 h-5" /> RuTube
              </button>
            </div>
          </div>
      
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            <div className="bg-white text-black rounded-xl p-5 flex flex-col items-center justify-center text-center hover:bg-gray-100 transition h-[140px] sm:h-[160px]">
              <div className="text-3xl sm:text-4xl mb-2">👤</div>
              <p className="text-sm sm:text-base font-semibold leading-tight">Подписчики</p>
            </div>
            <div className="bg-white text-black rounded-xl p-5 flex flex-col items-center justify-center text-center hover:bg-gray-100 transition h-[140px] sm:h-[160px]">
              <div className="text-3xl sm:text-4xl mb-2">❤️</div>
              <p className="text-sm sm:text-base font-semibold leading-tight">Лайки</p>
            </div>
            <div className="bg-white text-black rounded-xl p-5 flex flex-col items-center justify-center text-center hover:bg-gray-100 transition h-[140px] sm:h-[160px]">
              <div className="text-3xl sm:text-4xl mb-2">👀</div>
              <p className="text-sm sm:text-base font-semibold leading-tight">Просмотры</p>
            </div>
            <div className="bg-white text-black rounded-xl p-5 flex flex-col items-center justify-center text-center hover:bg-gray-100 transition h-[140px] sm:h-[160px]">
              <div className="text-3xl sm:text-4xl mb-2">💬</div>
              <p className="text-sm sm:text-base font-semibold leading-tight">Комментарии</p>
            </div>
            <div className="bg-white text-black rounded-xl p-5 flex flex-col items-center justify-center text-center hover:bg-gray-100 transition h-[140px] sm:h-[160px]">
              <div className="text-3xl sm:text-4xl mb-2">📷</div>
              <p className="text-sm sm:text-base font-semibold leading-tight">Просмотры</p>
            </div>
            <div className="bg-white text-black rounded-xl p-5 flex flex-col items-center justify-center text-center hover:bg-gray-100 transition h-[140px] sm:h-[160px]">
              <div className="text-3xl sm:text-4xl mb-2">🙋‍♀️</div>
              <p className="text-sm sm:text-base font-semibold leading-tight text-center">
                Зрители в прямой эфир
              </p>
            </div>
            <div className="bg-white text-black rounded-xl p-5 flex flex-col items-center justify-center text-center hover:bg-gray-100 transition h-[140px] sm:h-[160px]">
              <div className="text-3xl sm:text-4xl mb-2">📈</div>
              <p className="text-sm sm:text-base font-semibold leading-tight">Статистика</p>
            </div>
            <div className="bg-white text-black rounded-xl p-5 flex flex-col items-center justify-center text-center hover:bg-gray-100 transition h-[140px] sm:h-[160px]">
              <div className="text-3xl sm:text-4xl mb-2">🎬</div>
              <p className="text-sm sm:text-base font-semibold leading-tight">IGTV</p>
            </div>
            <div className="bg-white text-black rounded-xl p-5 flex flex-col items-center justify-center text-center hover:bg-gray-100 transition h-[140px] sm:h-[160px]">
              <div className="text-3xl sm:text-4xl mb-2">💥</div>
              <p className="text-sm sm:text-base font-semibold leading-tight">Reels</p>
            </div>
          </div>
        </div>
      
    
        <div className="max-w-7xl mx-auto mt-12 px-4">
          <h2 className="text-center font-bold text-2xl sm:text-3xl mb-6">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col">
              <div className="flex items-center mb-2">
                <img src={boy} alt="rasm" className="w-10 h-10 rounded-full mr-2" />
                <div>
                  <p className="font-bold text-sm sm:text-base">Александр</p>
                  <p className="text-yellow-400 text-xs">★★★★★</p>
                </div>
              </div>
              <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                SMMFLOW помог мне продвинуть канал на YouTube. Заказывал подписчиков и лайки, все прошло быстро и качественно, всем рекомендую!
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col">
              <div className="flex items-center mb-2">
                <img src={boy} alt="rasm" className="w-10 h-10 rounded-full mr-2" />
                <div>
                  <p className="font-bold text-sm sm:text-base">Анна</p>
                  <p className="text-yellow-400 text-xs">★★★★★</p>
                </div>
              </div>
              <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                Я не ожидала, что продвижение в Instagram может быть таким простым. Заказала подписчиков через SMMFLOW и очень довольна результатом.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col">
              <div className="flex items-center mb-2">
                <img src={boy} alt="rasm" className="w-10 h-10 rounded-full mr-2" />
                <div>
                  <p className="font-bold text-sm sm:text-base">Дмитрий</p>
                  <p className="text-yellow-400 text-xs">★★★★★</p>
                </div>
              </div>
              <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                Приобрел подписчиков и лайки на TikTok, результат превзошел все ожидания. Быстро, качественно, оправдало свои деньги. Рекомендую!
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col">
              <div className="flex items-center mb-2">
                <img src={boy} alt="rasm" className="w-10 h-10 rounded-full mr-2" />
                <div>
                  <p className="font-bold text-sm sm:text-base">Ксения</p>
                  <p className="text-yellow-400 text-xs">★★★★★</p>
                </div>
              </div>
              <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                Воспользовалась услугами SMMFLOW для продвижения своего TikTok аккаунта, рада результатам, множество новых подписчиков и лайков!
              </p>
            </div>
          </div>
        </div>
      
       
        <div className="bg-[#0057FF] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mt-16 text-white">
          <div className="text-center md:text-left mb-6 md:mb-0 max-w-md">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-snug">
              Скидки до 50% <br /> в нашем телеграм-канале
            </h2>
            <p className="mt-4 text-sm md:text-base opacity-90">
              Раздаем промокоды в Telegram каждую неделю
            </p>
            <a
              href="#"
              className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Получить промокод
            </a>
          </div>
          <div className="w-28 sm:w-40 md:w-52 lg:w-60">
            <img src={qiz2} alt="rasm" className="w-full h-auto" />
          </div>
        </div>
      </main>
    );
}