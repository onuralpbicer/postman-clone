import styled from 'styled-components'

const StyledContainer = styled('div')`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
`

const StyledPages = styled('div')`
	display: flex;
`

const StyledPage = styled('div')`
	padding: 0.5rem 1.5rem;
	user-select: none;
	cursor: pointer;
	border-bottom-color: var(--selected);
	border-bottom-style: solid;
	:hover {
		color: var(--text-hover-color);
	}
`

const StyledContent = styled('div')`
	flex-grow: 1;
	background: blue;
`

const RequestSections: React.FC<{
	pages: string[]
	selected: string
}> = ({ pages, selected }) => {
	return (
		<StyledContainer>
			<StyledPages>
				{pages.map((page) => (
					<StyledPage
						key={page}
						style={{
							color: selected === page ? 'var(--text-hover-color)' : undefined,
							borderBottomWidth: selected === page ? 2 : 0,
						}}
					>
						{page}
					</StyledPage>
				))}
			</StyledPages>
			<StyledContent></StyledContent>
		</StyledContainer>
	)
}

export default RequestSections
