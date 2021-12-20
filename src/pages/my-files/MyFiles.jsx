import React, { useState } from "react";
import { Button, Checkbox, Select, Table } from "semantic-ui-react";
import TableHeader from "./TableHeader";
import useStyles from "./styles";
import ImageFillIcon from "../../assets/icons/ImageFill";
import { PAGE_SIZE, TABLE_INFO } from "./MOCK";
import EyeIcon from "../../assets/icons/Eye";
import DeleteIcon from "../../assets/icons/Delete";
import PencilIcon from "../../assets/icons/Pencil";
import ArrowLeft from "../../assets/icons/ArrowLeft";
import ArrowRight from "../../assets/icons/ArrowRight";

const MyFiles = () => {
  const classes = useStyles();
  const [data, setData] = useState(TABLE_INFO);

  const handleCheckRow = (checkboxId) => () => {
    const newData = data.map((item) => {
      if (item.id === checkboxId) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setData(newData);
  };

  return (
    <div>
      <div className={classes.filesContainer}>
        <div className="page-title">My files</div>
        <div className="page-subtitle">Online storage</div>
        <div className={classes.tableContainer}>
          <Table striped>
            <TableHeader />
            <Table.Body>
              {data.map((item) => {
                return (
                  <Table.Row
                    key={item.id}
                    className={item.checked ? classes.activeRow : ""}
                  >
                    <Table.Cell>
                      <Checkbox
                        className={classes.tableCheckbox}
                        onChange={handleCheckRow(item.id)}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <ImageFillIcon />
                    </Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell className={classes.alignCenter}>
                      {item.fileCount}
                    </Table.Cell>
                    <Table.Cell className={classes.alignCenter}>
                      {item.dataCreated}
                    </Table.Cell>
                    <Table.Cell className={classes.alignCenter}>
                      {item.dl}
                    </Table.Cell>
                    <Table.Cell className={classes.alignCenter}>
                      {item.size}
                    </Table.Cell>
                    <Table.Cell>
                      <div className={classes.accessContainer}>
                        {item.access}
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className={classes.spaceBetween}>
                        <Button type="button">
                          <EyeIcon />
                        </Button>
                        <Button type="button">
                          <DeleteIcon />
                        </Button>
                        <Button type="button">
                          <PencilIcon />
                        </Button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.Cell colSpan="9">
                  <div className={classes.paginationContainer}>
                    <span>Rows per page:</span>
                    <Select
                      defaultValue="10"
                      options={PAGE_SIZE}
                      className={classes.paginationSelect}
                    />
                    <span>1-10 of 706</span>
                    <div className={classes.btnWrapper}>
                      <Button type="button">
                        <ArrowLeft />
                      </Button>
                      <Button type="button">
                        <ArrowRight />
                      </Button>
                    </div>
                  </div>
                </Table.Cell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default MyFiles;
