import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useAppSelector } from '../store/hooks'
import { ChangeSelected, NewRequest } from '../store/request.slice'
import Tab from './Tab'

const StyledTabsContainer = styled('div')`
	display: flex;
`

function TabsContainer() {
	const dispatch = useDispatch()
	const tabs = useAppSelector((state) => state.requests.requests.list)
	const selected = useAppSelector((state) => state.requests.selectedRequest)

	return (
		<StyledTabsContainer>
			{tabs.map((tab) => (
				<Tab
					key={tab}
					selected={selected === tab}
					onClick={() => {
						dispatch(ChangeSelected(tab))
					}}
					id={tab}
				/>
			))}
			<svg
				viewBox="0 0 100 100"
				width="24"
				height="24"
				stroke="gray"
				onClick={() => {
					dispatch(NewRequest())
				}}
			>
				<line x1={50} y1={10} x2={50} y2={90} strokeWidth={10} />
				<line x1={10} y1={50} x2={90} y2={50} strokeWidth={10} />
			</svg>
		</StyledTabsContainer>
	)
}

export default TabsContainer
