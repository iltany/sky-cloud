import React from "react";
import { Button, Checkbox, Input, Select } from "semantic-ui-react";
import MainModal from "../../common/modal/MainModal";
import useStyles from "./styles";
import ArchiveIcon from "../../assets/icons/Archive";
import { ACCESS, CONTAINER } from "./MOCK";

const ModalCreateFolder = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <MainModal
      open={open}
      handleClose={handleClose}
      modalTitle="create folder"
      modalTitleClass={classes.modalTitle}
      modalContentClass={classes.contentCreateFolder}
      modalContainer={classes.smallModal}
    >
      <div className={classes.inputTitle}>Name</div>
      <Input className={classes.tableInput} />
      <div className={classes.inputTitle}>New Access</div>
      <Select
        defaultValue="public"
        options={ACCESS}
        className={classes.selectContainer}
      />
      <div className={classes.inputTitle}>Container</div>
      <Select
        defaultValue="/"
        options={CONTAINER}
        className={classes.selectContainer}
      />
      <Checkbox
        className={`${classes.tableCheckbox} ${classes.positionCheckbox}`}
        label="Public Folder"
      />
      <Button
        type="button"
        className={`${classes.thBtn} ${classes.modalUploadBtn}`}
      >
        <ArchiveIcon />
        Upload File
      </Button>
    </MainModal>
  );
};
export default ModalCreateFolder;
