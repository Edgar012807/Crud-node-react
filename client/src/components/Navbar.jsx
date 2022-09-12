import React , {useState} from "react";
/* import {AppBar, Toolbar, Typography,Tab,Tabs,Button} from "@mui/material";

const Test = () => {
  const [value, setValue] = useState();
  return(
    <React.Fragment>
          <AppBar sx={{background: "#063979"}}>
            <Toolbar>
                    <Typography>Logo</Typography>
                    <Tabs textColor="inherit" value={value} onChange={(e,value)=> setValue(value)} indicatorColor="secondary">
                      <Tab label="Home"/>
                      <Tab label="New"/>
                    </Tabs>
 
                    <Button sx={{marginLeft: "auto"}} variant="contained">Home{""}</Button>
                    <Button sx={{marginLeft: "10px"}} variant="contained" on>New{""}</Button>
            </Toolbar>

             
          </AppBar>



    </React.Fragment>

  );
};
export default Test; */


import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-neutral-800 flex justify-between px-20 py-4">
      <Link to="/" className="text-white font-bold">
        <h1>React </h1>
      </Link>

      <ul className="flex gap-x-1">
        <li>
          <Link to="/" className="bg-slate-200 px-2 py-1">Home</Link>
        </li>
        <li>
          <Link to="/new" className="bg-teal-200 px-2 py-1">Create task</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;