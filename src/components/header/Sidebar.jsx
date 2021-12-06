import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Menu, Sidebar } from "semantic-ui-react";
import { navigationLinks } from "../../constants";
import useStyles from "./styles";

const SidebarMenu = ({ visible, handleClose }) => {
  const classes = useStyles();

  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      vertical
      visible={visible}
      width="thin"
      className={classes.sidebarWrapper}
    >
      <Menu.Item className={classes.sidebarTop}>
        skybox
        <Icon name="close" onClick={handleClose} />
      </Menu.Item>
      {navigationLinks.map((item) => {
        return (
          <Menu.Item
            as={Link}
            key={item.titleLink}
            to={item.link}
            className={classes.navigationLink}
          >
            {item.titleLink}
          </Menu.Item>
        );
      })}
      <div className={classes.btnSidebar}>
        <Button type="button" className={classes.btnTransparent}>
          login
        </Button>
        <Button type="button" className={classes.btnSignUp}>
          sign up
        </Button>
      </div>
    </Sidebar>
  );
};

export default SidebarMenu;
