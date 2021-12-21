import React from "react";
import { Button, Checkbox } from "semantic-ui-react";
import MainModal from "../../common/modal/MainModal";
import { UPLOAD_INFO } from "./MOCK";
import useStyles from "./styles";
import ImageFillIcon from "../../assets/icons/ImageFill";
import AddIcon from "../../assets/icons/Add";
import ArchiveIcon from "../../assets/icons/Archive";

const ModalUploadFiles = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <MainModal
      open={open}
      handleClose={handleClose}
      modalTitle="File uploading"
    >
      <Button type="button" className={classes.thBtn}>
        <AddIcon />
        Select Files
      </Button>
      <div className={classes.uploadContainer}>
        {UPLOAD_INFO.map((item) => {
          return (
            <div key={item.id} className={classes.uploadContent}>
              <div className={classes.dFlex}>
                <ImageFillIcon />
                <div className={classes.marginName}>{item.name}</div>
              </div>
              <div className={classes.dFlex}>
                <div className={classes.marginStatus}>{item.status}</div>
                <div className={classes.alignCenter}>{item.size}</div>
              </div>
            </div>
          );
        })}
      </div>
      <Checkbox
        className={`${classes.tableCheckbox} ${classes.positionCheckbox}`}
        label="I agree to the Terms of Use"
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
export default ModalUploadFiles;
