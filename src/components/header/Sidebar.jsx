import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Menu, Sidebar } from "semantic-ui-react";
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
      <Menu.Item as={Link} to="/" className={classes.navigationLink}>
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/pricing" className={classes.navigationLink}>
        Pricing
      </Menu.Item>
      <Menu.Item as={Link} to="/contacts" className={classes.navigationLink}>
        Contact
      </Menu.Item>
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
