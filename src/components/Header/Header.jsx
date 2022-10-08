import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import style from "./Header.module.css";
import { useDispatch } from "react-redux";
import { toggleFilter } from "../../redux/actions/news-actions";


export const Header = () => {
  const [filter, setFilter] = useState(false);
  const dispatch = useDispatch();

  const onFilter = () => {
    setFilter(!filter);
    dispatch(toggleFilter(!filter));
  };

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>

            <IconButton aria-label="filter" onClick={onFilter}>
              {!filter ? <Typography variant="body2" component="span" sx={{ flexGrow: 1 }}>
                Показать понравившиеся
              </Typography> : <Typography className={style.active} variant="body2" component="span" sx={{ flexGrow: 1 }}>
                Показать все
              </Typography>}
              <FilterAltIcon className={`${filter ? style.active : style.filter}`} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};