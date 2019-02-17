import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddBoxtIcon from '@material-ui/icons/AddBox';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import InfoIcon from '@material-ui/icons/Info';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { NavLink } from 'react-router-dom'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import store from '../config/store'
import * as actionCreators from '../config/actions';
import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';



      


export class ListItems extends Component {
  constructor(props) {
    super(props);
    // this.state = {
      //   portfolios: null,
      //   // portfolio_id: this.props.portfolios
      // }
      // this.updateSelectedFund = this.updateSelectedFund.bind(this)
      
    }  
    
    componentDidMount() {
      
    }
    
    
    render() {
      const mainListItems = ( 
        <div>
          <Divider />
        <List>
          {/* <Link to={process.env.PUBLIC_URL + '/dashboard'} style={{ textDecoration: 'none' }} > */}
          {/* <Link to={process.env.PUBLIC_URL + '/new'} style={{ textDecoration: 'none' }} > */}
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              {/* <NavLink to='/'><ListItemText primary="Dashboard" /></NavLink> */}
                <ListItemText primary="Dashboard" />
              </ListItem>
            <ListItem button>
            <ListItemIcon>
              <AddBoxtIcon />
            </ListItemIcon>
              <ListItemText primary="New SmartFund" />
            </ListItem>
            <ListItem button onClick={() => { this.props.setSelectedFund(-1)}} >
              <ListItemIcon>
                <InsertChartIcon />
              </ListItemIcon>
                <ListItemText primary="Performance" />
            </ListItem>
            </List>
          <Divider />
        </div>
      )

      let openListItems = this.props.portfolios.map((item) => {
        if (item.status === 'open') {
          return (
            <ListItem button onClick={() => { this.props.setSelectedFund(item.id)}} key={item.id} >
              <ListItemIcon>
                <ShowChartIcon />
              </ListItemIcon>
              <ListItemText primary={ item.portfolio_name } />
            </ListItem>
        )
      }
    })

    let closedListItems = this.props.portfolios.map((item) => {     
      if (item.status === 'closed') {
        return (
            <ListItem button onClick={() => { this.props.setSelectedFund(item.id)}} key={item.id} >
              <ListItemIcon>
                <ShowChartIcon />
              </ListItemIcon>
              <ListItemText primary={ item.portfolio_name } />
            </ListItem>
        )
      }
    })
    
    return ( 
      <div>
        {mainListItems}
        <ListSubheader inset>Open Portfolios</ListSubheader>
        <List>{openListItems}</List>
        <Divider />
        <ListSubheader inset>Liquidated Portfolios</ListSubheader>
        <List>{closedListItems}</List>
      </div>   
    )
  }
}
      
const mapStateToProps=(state) => {
  const { btc_price, interval, count, portfolios, historical_price_data } = state
  return { btc_price, interval, count, portfolios, historical_price_data }
}

export default connect (mapStateToProps, actionCreators)(ListItems)

