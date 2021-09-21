import * as React from "react";

import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";

const Header = styled.h1`
	margin: 2rem;
	font-size: 4rem;
`;

function App(): JSX.Element {
	return (
		<div id="app">
			<Header>It works!</Header>
			<Button variant="contained" color="primary">
				It works too!
			</Button>
		</div>
	);
}

export default App;
