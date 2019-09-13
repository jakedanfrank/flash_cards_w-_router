import React from "react";
import { Menu, } from "semantic-ui-react";
import { Link, } from "react-router-dom";

const Navbar = () => {
  return (
  <Menu>
    <Link to="/">
      <Menu.Item>
        HOME
      </Menu.Item>
    </Link>
    <Link to="/about">
      <Menu.Item>
        ABOUT
      </Menu.Item>
    </Link>
    <Link to="/flashcards">
      <Menu.Item>
        FLASHCARDS
      </Menu.Item>
    </Link>
  </Menu>
  )
};

export default Navbar;