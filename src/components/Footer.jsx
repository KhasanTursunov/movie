import React from 'react'
import LogoLeft from '../assets/svg/logo_left.svg'
import PlayMarket from '../assets/svg/playmarket.svg'
import AppStore from "../assets/svg/appstore.svg";
import { Link } from 'react-router-dom';
import F1 from '../assets/svg/f1.svg'
import F2 from '../assets/svg/f2.svg'
import F3 from '../assets/svg/f3.svg'
import F4 from '../assets/svg/f4.svg'
import F5 from '../assets/svg/f5.svg'
import F6 from '../assets/svg/f6.svg'
import F7 from '../assets/svg/f7.svg'
import F8 from '../assets/svg/f8.svg'
import F9 from '../assets/svg/f9.svg'
import F10 from '../assets/svg/f10.svg'
import F11 from '../assets/svg/f11.svg'

const Footer = () => {
  return (
    <footer className="flex items-center justify-between dark:bg-[#111111] p-10 flex-wrap gap-12">
      <div className="logo_footer flex flex-col gap-6">
        <div>
          <Link to={"/"}>
          <img src={LogoLeft} alt="" />
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <img className='cursor-pointer' src={PlayMarket} alt="" />
          <img className='cursor-pointer' src={AppStore} alt="" />
        </div>
      </div>

      <div className="first_footer flex flex-col gap-3">
        <div>
          <Link className='hover:text-red-500' to={"/"}>О нас</Link>
        </div>

        <div className="flex items-center gap-3">
          <img src={F1} alt="" />
          <h3 className="hover:text-red-500 hover:underline cursor-pointer">
            Публичная оферта
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <img src={F2} alt="" />
          <h3 className="hover:text-red-500 hover:underline cursor-pointer">
            Реклама
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <img src={F3} alt="" />
          <h3 className="hover:text-red-500 hover:underline cursor-pointer">
            F.A.Q
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <img src={F4} alt="" />
          <h3 className="hover:text-red-500 hover:underline cursor-pointer">
            Контакты
          </h3>
        </div>
      </div>

      <div className="first_footer flex flex-col gap-3">
        <div>
          <Link className='hover:text-red-500' to={"/"}>Категории</Link>
        </div>

        <div className="flex items-center gap-3">
          <img src={F5} alt="" />
          <h3 className="hover:text-red-500 hover:underline cursor-pointer">
            Кино
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <img src={F6} alt="" />
          <h3 className="hover:text-red-500 hover:underline cursor-pointer">
            Театр
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <img src={F7} alt="" />
          <h3 className="hover:text-red-500 hover:underline cursor-pointer">
            Концерты
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <img src={F8} alt="" />
          <h3 className="hover:text-red-500 hover:underline cursor-pointer">
            Спорт
          </h3>
        </div>
      </div>

      <div className="fourth_footer">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <Link className='hover:text-red-500' >Связаться с нами</Link>
            <a className='text-red-500 hover:underline' href="tel:+998 (95) 897-33-38">+998 (95) 897-33-38</a>
          </div>
          <div className="flex flex-col gap-4">
            <h3>Социальные сети</h3>
            <div className="flex items-center gap-7">
              <img className='cursor-pointer' src={F9} alt="" />
              <img className='cursor-pointer' src={F10} alt="" />
              <img className='cursor-pointer' src={F11} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer