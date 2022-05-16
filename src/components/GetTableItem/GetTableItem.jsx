import React, { useState } from "react";
import { TableCell, TableRow } from "@mui/material";
import ModalItem from "../ModalItem/ModalItem";

const GetTableItem = (props) => {
  const [open, setOpen] = useState(false);
  const modalOpen = () => setOpen(true);

  return (
    <React.Fragment>
      <TableRow
        onClick={modalOpen}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {props.item.id}
        </TableCell>
        <TableCell component="th" scope="row">
          {props.item.name}
        </TableCell>
        <TableCell align="right">{props.item.tagline}</TableCell>
        <TableCell align="right">{props.item.abv}</TableCell>
        <TableCell align="right">{props.item.ibu}</TableCell>
        <TableCell align="right">{props.item.srm}</TableCell>
      </TableRow>
      <ModalItem
        open={open}
        setOpen={setOpen}
        name={props.item.name}
        tagline={props.item.tagline}
        abv={props.item.abv}
        ibu={props.item.ibu}
        srm={props.item.srm}
        img={props.item.image_url}
        description={props.item.description}
        additions={props.item.food_pairing}
      />
    </React.Fragment>
  );
};

export default GetTableItem;
