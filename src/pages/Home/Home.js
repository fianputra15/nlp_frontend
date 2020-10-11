import { Bar, Bubble } from "react-chartjs-2";
import {
  NewsCard,
  PostCard,
  StatCard,
  WeatherCard,
  Wrapper
} from "../../components";
import React, { useState } from "react";
import { mockDashboard, mockFeed } from "../../utils/mock";

import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import EmailIcon from "@material-ui/icons/Email";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import LinearProgress from "@material-ui/core/LinearProgress";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreIcon from "@material-ui/icons/More";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsOffIcon from "@material-ui/icons/NotificationsOff";
import Paper from "@material-ui/core/Paper";
import PhoneIcon from "@material-ui/icons/Phone";
import SettingsIcon from "@material-ui/icons/Settings";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import red from "@material-ui/core/colors/red";
import {Typography} from "@material-ui/core";

let id = 0;
function createData(name, date, progress) {
  id += 1;
  return { id, name, date, progress };
}

const data = [
  createData("UI prototyping", "January 23", 67),
  createData("Design", "February 2", 87),
  createData("Development", "March 30", 54),
  createData("Testing and delivery", "April 12", 34),
  createData("Ongoing maintanance", "May 28", 56),
  createData("Extensive review", "December 3", 56),
  createData("Extensive testing", "December 25", 56)
];

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const chartMenu = (
    <Menu
      id="chart-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <MoreIcon />
        </ListItemIcon>
        <ListItemText primary="View more" />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <NotificationsOffIcon />
        </ListItemIcon>
        <ListItemText primary="Disable notifications" />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Remove panel" />
      </MenuItem>
    </Menu>
  );

  return (
    <Wrapper>
      <Card>
        <CardContent>
          <Typography style={{
            textAlign : "center"
          }} variant="h5" component="h5">Implementasi <i>Natural Languange Processing</i> Pada <i>Query Multi Table</i></Typography>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default Home;
