import React from "react";
import { Header, Modal } from "semantic-ui-react";
import useStyles from "./styles";

const MainModal = ({
  modalContainer = " ",
  children,
  modalTitle,
  modalTitleClass = " ",
  modalContentClass,
  open,
  handleClose,
}) => {
  const classes = useStyles();

  return (
    <Modal
      closeIcon
      open={open}
      onClose={handleClose}
      className={`${modalContainer} ${classes.modalContainer}`}
    >
      <Header
        content={modalTitle}
        className={`${modalTitleClass} ${classes.modalTitle}`}
      />
      <Modal.Content className={modalContentClass}>{children}</Modal.Content>
    </Modal>
  );
};

export default MainModal;
