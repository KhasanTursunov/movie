import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import LogoFull from "../assets/svg/logo_full.svg";
import HomeImg1 from "../assets/svg/h1.svg";
import HomeImg2 from "../assets/svg/h2.svg";
import HomeImg5 from "../assets/svg/h5.svg";
import HomeImg4 from "../assets/svg/h4.svg";
import { Dropdown, Menu, Button } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { MdMenuOpen } from "react-icons/md";
import { MdClose } from "react-icons/md"; 
import { FaSun } from "react-icons/fa6";

const Header = () => {
  const [dark, setDark] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false); 

  const handleDarkMode = () => {
    if (dark === "light") {
      setDark("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "dark");
    } else {
      setDark("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "light");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("dark-mode") === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const menu = (
    <Menu>
      <Menu.Item key="1">English</Menu.Item>
      <Menu.Item key="2">Русский</Menu.Item>
      <Menu.Item key="3">O'zbekcha</Menu.Item>
    </Menu>
  );

  return (
    <div className=" bg-white dark:bg-[#111111] sticky top-0 left-0">
      <div className="header_wrapper max-w-7xl sm:px-6 lg:px-8 py-8 flex container mx-auto h-20 items-center gap-8 justify-between px-20 sticky top-0 left-0 z-99  ">
        <div className="navbar">
          <NavLink to={"/"} className="text-2xl font-medium flex-1 ">
            <img src={LogoFull} alt="" />
          </NavLink>
        </div>

        <input
          type="checkbox"
          id="check"
          className="hidden"
          checked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
        />

        <div
          className={`header_links flex items-center gap-14 ${
            menuOpen ? "left-0" : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <img src={HomeImg1} alt="" />
            <NavLink to={"/"}>Home</NavLink>
          </div>

          <div className="flex items-center gap-2">
            <img src={HomeImg2} alt="" />
            <NavLink to={"/movies"}>Movies</NavLink>
          </div>

          <div className="flex items-center gap-2">
            <img src={HomeImg5} alt="" />
            <NavLink to={"/saved"}>Saved</NavLink>
          </div>

          <div className="flex items-center gap-2">
            <img src={HomeImg4} alt="" />
            <NavLink to={"/search"}>Search</NavLink>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <Dropdown
            className="dropdown"
            overlay={menu}
            placement="bottomRight"
            arrow
          >
            <Button icon={<GlobalOutlined />}>Eng</Button>
          </Dropdown>

          <button className="cursor-pointer" onClick={handleDarkMode}>
            {dark === "light" ? <FaRegMoon /> : <FaSun />}
          </button>

          <label htmlFor="check" className="navbar_button cursor-pointer">
            {menuOpen ? (
              <MdClose
                style={{
                  width: "30px",
                  height: "30px",
                  color: dark === "dark" ? "white" : "black",
                }}
              />
            ) : (
              <MdMenuOpen
                style={{
                  width: "30px",
                  height: "30px",
                  color: dark === "dark" ? "white" : "black",
                  cursor: "pointer",
                }}
              />
            )}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
