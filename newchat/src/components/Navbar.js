import React from "react";
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
const Navbar = () => {
  return (
    <div>
      <AppBar color={"secondary"} position="static">
        <Toolbar>
          <Grid container justify={"flex-end"}>
            <Button>Login</Button>
            <Button>Exit</Button>

          </Grid>

        </Toolbar>
      </AppBar>
    </div>

  );
};
export default Navbar;