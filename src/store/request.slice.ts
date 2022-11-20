import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface RequestState {
	id: string
	url: string
	method: 'GET' | 'POST' | 'PUT' | 'DELETE'
}

export interface RequestSlice {
	selectedRequest: string
	requests: {
		list: string[]
		byID: Record<string, RequestState>
	}
}

const initialState: RequestSlice = {
	selectedRequest: '',
	requests: {
		list: [],
		byID: {},
	},
}

const storedState = localStorage.getItem('test')

export const requestSlice = createSlice({
	name: 'request',
	initialState: storedState
		? (JSON.parse(storedState) as RequestSlice)
		: initialState,
	reducers: {
		NewRequest: (state) => {
			const newRequest: RequestState = {
				id: crypto.randomUUID(),
				url: '',
				method: 'GET',
			}

			state.selectedRequest = newRequest.id
			state.requests.list.push(newRequest.id)
			state.requests.byID[newRequest.id] = newRequest
		},
		ChangeURL: (
			state,
			action: PayloadAction<Pick<RequestState, 'id' | 'url'>>,
		) => {
			const request = state.requests.byID[action.payload.id]

			if (!request) return

			request.url = action.payload.url
		},
		ChangeMethod: (
			state,
			action: PayloadAction<Pick<RequestState, 'id' | 'method'>>,
		) => {
			const request = state.requests.byID[action.payload.id]

			if (!request) return

			request.method = action.payload.method
		},
		ChangeSelected: (state, action: PayloadAction<string>) => {
			state.selectedRequest = action.payload
		},
		CloseRequest: (state, action: PayloadAction<string>) => {
			delete state.requests.byID[action.payload]
			state.requests.list = state.requests.list.filter(
				(request) => request !== action.payload,
			)

			state.selectedRequest = state.requests.list[0] || ''
		},
	},
})

// Action creators are generated for each case reducer function
export const {
	NewRequest,
	ChangeSelected,
	CloseRequest,
	ChangeURL,
	ChangeMethod,
} = requestSlice.actions

export default requestSlice.reducer
