import React from 'react';
import { Container, Menu, Icon, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    const itemStyle = { fontFamily: 'montserrat', fontSize: '20px', color: 'black' };
    const iconStyle = { marginTop: '3.5ex', marginLeft: '2ex' };
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item><Image src="https://cdn.shopify.com/s/files/1/0214/8046/files/LM_logobox_trans_3deb38e7-e330-4234-8526-e2d178d4105f_150x.png?v=1515018559"/></Menu.Item>
            <Menu.Item style={itemStyle} position="right">SHOP</Menu.Item>
            <Menu.Item style={itemStyle}>STORES</Menu.Item>
            <Menu.Item style={itemStyle}>COMPANY</Menu.Item>
            <Menu.Item style={itemStyle}>NEWS</Menu.Item>
            <Menu.Menu><Icon style={iconStyle} name ='user' size='big' /></Menu.Menu>
            <Menu.Menu><Icon style={iconStyle} name ='search' size='big' /></Menu.Menu>
            <Menu.Menu><Icon style={iconStyle} name ='shopping cart' size='big' /></Menu.Menu>
          </Container>
        </Menu>
    );
  }
}
