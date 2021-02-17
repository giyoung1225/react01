import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/_layout.scss'

function Header() {

  return (
    <header id="header">
      <div className="header__inner">
        <div className="header__inner__port">
          <Link to="portfolio" className="page__click">
            Portfolio
          </Link>
        </div>
        <div className="header__inner__logo">
          <Link to="/" className="page__click">
            hong
          </Link>
        </div>
        <div className="header__inner__menu">
          <Link to="#">
            <span className="sr-only">menu</span>
          </Link>
        </div>
      </div>
      <div className="header__bg">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="header__nav">
        <ul>
          <li>
            <Link to="../pages/about.html" className="page__click">
              About
            </Link>
          </li>
          <li>
            <Link to="../pages/reference.html" className="page__click">
              Reference
            </Link>
          </li>
          <li>
            <Link to="../pages/youtube.html" className="page__click">
              Youtube
            </Link>
          </li>
          <li>
            <Link to="../pages/script.html" className="page__click">
              Script
            </Link>
          </li>
          <li>
            <Link to="../pages/contact.html" className="page__click">
              Contact
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="../sign/signup.html">회원가입</Link>
          </li>
          <li>
            <Link to="../sign/login.html">로그인</Link>
          </li>
          <li>
            <Link to="../board/board.html">게시판</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;