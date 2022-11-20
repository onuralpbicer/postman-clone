import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { CloseRequest, RequestState } from '../store/request.slice'

const StyledClose = styled('svg')`
	position: absolute;
	top: 2px;
	right: 2px;
	display: none;
	padding: 0.5rem;
	border-radius: 0.25rem;
	background: var(--main-bg);
	:hover {
		background: var(--bg-hover);
	}
`

const StyledTab = styled('div')`
	min-width: 100px;
	max-width: 200px;
	padding: 0.5rem 1rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	border-right: 1px solid gray;
	border-bottom-style: solid;
	border-bottom-color: gray;
	cursor: pointer;
	user-select: none;
	border-top-style: solid;
	border-top-color: var(--selected);
	position: relative;
	:hover > ${StyledClose} {
		display: block;
	}
`

const StyledMethod = styled('span')`
	text-transform: uppercase;
`

const StyledTabName = styled('span')`
	overflow: hidden;
	text-overflow: ellipsis;
`

interface TabProps {
	onClick: () => void
	selected: boolean
	id: string
}

function getMethodColor(method: RequestState['method']) {
	switch (method) {
		case 'GET':
			return 'green'
		case 'POST':
			return 'orange'
		case 'PUT':
			return 'blue'
		case 'DELETE':
			return 'red'
		default:
			return 'darkgray'
	}
}

const Tab: React.FC<TabProps> = ({ onClick, selected, id }) => {
	const url = useAppSelector((state) => state.requests.requests.byID[id]?.url)
	const method = useAppSelector(
		(state) => state.requests.requests.byID[id]?.method,
	)

	const dispatch = useAppDispatch()

	return (
		<StyledTab
			onClick={onClick}
			style={{
				borderTopWidth: selected ? 2 : 0,
				borderBottomWidth: selected ? 0 : 2,
			}}
		>
			<StyledMethod style={{ color: getMethodColor(method) }}>
				{method}
			</StyledMethod>
			<StyledTabName>{url || 'New Request'}</StyledTabName>
			<StyledClose
				viewBox="0 0 100 100"
				width="20"
				height="20"
				stroke="darkgray"
				onClick={(e) => {
					dispatch(CloseRequest(id))
					e.stopPropagation()
				}}
			>
				<line x1={10} y1={10} x2={90} y2={90} strokeWidth={10} />
				<line x1={10} y1={90} x2={90} y2={10} strokeWidth={10} />
			</StyledClose>
		</StyledTab>
	)
}

export default Tab
