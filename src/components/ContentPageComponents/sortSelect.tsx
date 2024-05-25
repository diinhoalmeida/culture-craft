import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

interface Option {
  value: string;
  label: React.ReactNode;
}

interface SortSelectProps {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: Option[];
}

export const SortSelect: React.FC<SortSelectProps> = ({
  label,
  value,
  onChange,
  options,
}) => (
  <FormControl variant="outlined" style={{ minWidth: 120 }}>
    <InputLabel sx={{ color: "#fff" }}>{label}</InputLabel>
    <Select
      labelId={`${label.toLowerCase().replace(" ", "-")}-label`}
      value={value}
      onChange={onChange}
      label={label}
      sx={{ backgroundColor: "#1375c0", color: "#fff" }}
    >
      {options.map((option, index) => (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
