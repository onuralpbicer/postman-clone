import { useState } from 'react'
import styled from 'styled-components'
import Request from './request/Request'
import TabsContainer from './tabs/TabsContainer'

const MainContainer = styled('div')`
	background-color: var(--main-bg);
	height: 100%;
	display: flex;
	flex-direction: column;
`

function App() {
	const [count, setCount] = useState(0)

	return (
		<MainContainer>
			<TabsContainer />
			<Request />
		</MainContainer>
	)
}

export default App
