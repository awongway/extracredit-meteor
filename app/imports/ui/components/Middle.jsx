import React from 'react';
import { Image, Container } from 'semantic-ui-react';

export default class Middle extends React.Component {
  render() {
    const picStyle = { marginTop: '-2ex' };
    return (
        <Container>
          <Image style = {picStyle} src='https://cdn.shopify.com/s/files/1/0214/8046/files/ASH_LM-9987_1512x.jpg?v=1526929086' fluid/>
        </Container>
    );
  }
}
