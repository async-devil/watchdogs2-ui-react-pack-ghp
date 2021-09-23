import * as React from "react";

import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";

const Header = styled.h1`
	margin: 2rem;
	font-size: 4rem;
`;

const CustomButton = styled(Button)`
	background-color: #722;
`;

function App(): JSX.Element {
	return (
		<div id="app">
			<Header>It works!</Header>
			<CustomButton variant="contained" color="primary">
				It works too!
			</CustomButton>
		</div>
	);
}

export default App;
