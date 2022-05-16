import React from "react";
import { TableBody } from "@mui/material";
import GetTableItem from "../GetTableItem/GetTableItem";
import { getComparator, sortedRowInformation } from "../../utils/filters";

const GetTableList = ({ items, orderDirection, valueToOrderBy }) => {
  return (
    <TableBody>
      {sortedRowInformation(
        items,
        getComparator(orderDirection, valueToOrderBy)
      ).map((item) => (
        <GetTableItem key={item.id} item={item} />
      ))}
    </TableBody>
  );
};

export default GetTableList;
