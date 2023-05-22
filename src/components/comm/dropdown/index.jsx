import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Select, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const DropdownBox = () => {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleOptionChange}
      className={classes.formControl}
    >
      <MenuItem value="">None</MenuItem>
      <MenuItem value="option1">Option 1</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
      <MenuItem value="option3">Option 3</MenuItem>
    </Select>
  );
};

export default DropdownBox;
