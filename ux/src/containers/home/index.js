
import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'

// import RouteWithSubRoutes from './components/common/route-with-sub-routes'
// import routes from './routes'

import srcLogo from '../../static/image/logo.svg'


class Home extends Component {

	render() {
    return (
      <div>
        <Grid centered columns={2}>
          <Grid.Column>
            <Image src={srcLogo} size='small' />
          </Grid.Column>
        </Grid>
        {/* {_.map(routes, (route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))} */}
      </div>
    )
  }
}

export default Home