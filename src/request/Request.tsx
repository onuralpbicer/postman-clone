import React from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { ChangeMethod, ChangeURL, RequestState } from '../store/request.slice'
import RequestOptions from './RequestOptions'
import ResponseOptions from './ResponseOptions'

const StyledRequest = styled('main')`
	flex-grow: 1;
	padding: 0.5rem;
	display: flex;
	flex-direction: column;
`

const InputsContainer = styled('div')`
	display: flex;
`

const StyledSelect = styled('select')`
	padding: 1rem;
`

const StyledInput = styled('input')`
	padding: 1rem;
	flex-grow: 1;
`

const StyledButton = styled('button')`
	padding: 1rem 1.5rem;
	margin-left: 0.5rem;
	background-color: var(--button-primary);
	border-radius: 0.25rem;
	outline: none;
	cursor: pointer;
	:hover {
		background-color: var(--button-primary-hover);
	}
`

const Request: React.FC = () => {
	const dispatch = useAppDispatch()
	const request = useAppSelector(
		(state) => state.requests.requests.byID[state.requests.selectedRequest],
	) as RequestState | undefined

	return (
		<StyledRequest>
			<InputsContainer>
				<StyledSelect
					disabled={!request}
					value={request?.method}
					onChange={(e) => {
						if (request)
							dispatch(
								ChangeMethod({
									id: request.id,
									method: e.target.value as RequestState['method'],
								}),
							)
					}}
				>
					<option value="GET">GET</option>
					<option value="POST">POST</option>
					<option value="PUT">PUT</option>
					<option value="DELETE">DELETE</option>
				</StyledSelect>
				<StyledInput
					disabled={!request}
					value={request?.url}
					onChange={(e) => {
						if (request)
							dispatch(ChangeURL({ id: request.id, url: e.target.value }))
					}}
				/>
				<StyledButton>Send</StyledButton>
			</InputsContainer>
			<RequestOptions />
			<ResponseOptions />
		</StyledRequest>
	)
}

export default Request
