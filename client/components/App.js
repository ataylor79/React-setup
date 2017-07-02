import React from 'react';
import { Route, Switch } from 'react-router-dom';

/*
add imports to containers
 */

const App = () => (
	<div>
		<Switch>
			<Route exact path="/" component={} />
			<Route path="/path/:id" component={} />
		</Switch>
	</div>
);

export default App;
