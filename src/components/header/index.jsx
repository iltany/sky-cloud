import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <header className={classes.container}>
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
            <Button type="button" className={classes.btnTransparent}>
              login
            </Button>
            <Button type="button" className={classes.btnSignUp}>
              sign up
            </Button>
          </div>
        </div>
        <Button
          type="button"
          className={classes.burgerWrapper}
          icon={<BurgerMenu />}
          onClick={handleToggleSidebar}
        />
        <SidebarMenu visible={openSidebar} handleClose={handleToggleSidebar} />
      </div>
    </header>
  );
};
export default Header;
