import React from "react";
import { Table } from "react-bootstrap";

function TableList({ headers, data }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TableList;
