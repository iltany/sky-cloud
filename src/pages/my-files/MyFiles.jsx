import React from "react";
import { Table } from "semantic-ui-react";
import TableHeader from "./TableHeader";
import useStyles from "./styles";

const MyFiles = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.filesContainer}>
        <div className="page-title">My files</div>
        <div className="page-subtitle">Online storage</div>
        <div className={classes.tableContainer}>
          <Table striped>
            <TableHeader />
            <Table.Body>
              <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>No</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie Harington</Table.Cell>
                <Table.Cell>January 11, 2014</Table.Cell>
                <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                <Table.Cell>Yes</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default MyFiles;
