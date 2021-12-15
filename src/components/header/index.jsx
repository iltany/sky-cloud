import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "semantic-ui-react";
import useStyles from "./styles";
import BurgerMenu from "../../assets/icons/BurgerMenu";
import SidebarMenu from "./Sidebar";
import { navigationLinks } from "../../constants";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const classes = useStyles();

  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  const location = useLocation();

  return (
    <header
      className={`${location.pathname === "/" ? "" : classes.headerContainer}`}
    >
      <div className={classes.container}>
        <div className={classes.navigationMenu}>
          <div className={classes.logo}>
            <Link to="/">skybox</Link>
          </div>
          <div className={classes.alignCenter}>
            {navigationLinks.map((item) => {
              return (
                <Link
                  key={item.titleLink}
                  to={item.link}
                  className={classes.navigationLink}
                >
                  {item.titleLink}
                </Link>
              );
            })}
            <div className={classes.btnWrapper}>
              <Link to="sign-in">
                <Button type="button" className={classes.btnTransparent}>
                  login
                </Button>
              </Link>
              <Link to="sign-up">
                <Button type="button" className={classes.btnSignUp}>
                  sign up
                </Button>
              </Link>
            </div>
          </div>
          <Button
            type="button"
            className={classes.burgerWrapper}
            icon={<BurgerMenu />}
            onClick={handleToggleSidebar}
          />
          <SidebarMenu
            visible={openSidebar}
            handleClose={handleToggleSidebar}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
