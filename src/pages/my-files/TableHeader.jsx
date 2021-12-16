import React from "react";
import {
  Button,
  Checkbox,
  Input,
  Search,
  Select,
  Table,
} from "semantic-ui-react";
import AddIcon from "../../assets/icons/Add";
import ArchiveIcon from "../../assets/icons/Archive";
import { PAGE_SIZE } from "./MOCK";
import useStyles from "./styles";

const TableHeader = () => {
  const classes = useStyles();

  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan={5}>
          <div className={classes.spaceBetween}>
            <div className={classes.fileStored}>
              File stored total: 0B / 10GB <br />
              Files will be stored 30 days
            </div>
            <div className={classes.displaying}>
              Displaying 1-10 of 10 results. <span>Page size:</span>
            </div>
          </div>
        </Table.HeaderCell>
        <Table.HeaderCell>
          <Select
            defaultValue="10"
            options={PAGE_SIZE}
            className={classes.selectContainer}
          />
        </Table.HeaderCell>
        <Table.HeaderCell colSpan={3}>
          <div className={classes.dFlex}>
            <Button type="button" className={classes.thBtn}>
              <AddIcon />
              Add Folder
            </Button>
            <Button
              type="button"
              className={`${classes.thBtn} ${classes.uploadBtn}`}
            >
              <ArchiveIcon />
              Upload File
            </Button>
          </div>
        </Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan={2}>
          <Search
            input={{
              icon: "search",
              iconPosition: "left",
              placeholder: "Search type file name and pres Enter",
            }}
            className={classes.searchContainer}
          />
        </Table.HeaderCell>
        <Table.HeaderCell>
          <Input className={classes.tableInput} />
        </Table.HeaderCell>
        <Table.HeaderCell>
          <Input className={classes.tableInput} />
        </Table.HeaderCell>
        <Table.HeaderCell>
          <Input className={classes.tableInput} />
        </Table.HeaderCell>
        <Table.HeaderCell>
          <Input className={classes.tableInput} />
        </Table.HeaderCell>
        <Table.HeaderCell>
          <Input className={classes.tableInput} />
        </Table.HeaderCell>
        <Table.HeaderCell>
          <Button type="button" className={classes.searchBtn}>
            Search
          </Button>
        </Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>
          <Checkbox className={classes.tableCheckbox} />
        </Table.HeaderCell>
        <Table.HeaderCell>
          <Select
            placeholder="Type"
            options={PAGE_SIZE}
            className={classes.selectNoWrapper}
          />
        </Table.HeaderCell>
        <Table.HeaderCell>
          <Select
            placeholder="Name"
            options={PAGE_SIZE}
            className={classes.selectNoWrapper}
          />
        </Table.HeaderCell>
        <Table.HeaderCell>
          <div className={classes.thTitle}>file count</div>
        </Table.HeaderCell>
        <Table.HeaderCell>
          <div className={classes.thTitle}>date created</div>
        </Table.HeaderCell>
        <Table.HeaderCell>
          <div className={classes.thTitle}>DL</div>
        </Table.HeaderCell>
        <Table.HeaderCell>
          <div className={classes.thTitle}>size</div>
        </Table.HeaderCell>
        <Table.HeaderCell>
          <Select
            placeholder="access"
            options={PAGE_SIZE}
            className={classes.selectNoWrapper}
          />
        </Table.HeaderCell>
        <Table.HeaderCell>
          <div className={classes.thTitle}>...</div>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};
export default TableHeader;
