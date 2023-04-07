import React from "react";
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utilities/constants";
const Navbar = () => {
  const user = false;
  return (
    <div>
      <AppBar color={"secondary"} position="static">
        <Toolbar variant={"dense"}>
          <Grid container justify={"flex-end"}>
            {user ?
              <Button variant={"outlined"}>Exit</Button>
              :
              <NavLink to={LOGIN_ROUTE}>
                <Button variant={"outlined"}>Log in</Button>
              </NavLink>
            }
          </Grid>

        </Toolbar>
      </AppBar>
    </div>

  );
};
export default Navbar;