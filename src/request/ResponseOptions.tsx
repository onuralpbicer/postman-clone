import RequestSections from './RequestSections'

const ResponseOptions: React.FC = () => {
	return (
		<RequestSections
			pages={['Params', 'Authorization', 'Headers', 'Body']}
			selected="Authorization"
		></RequestSections>
	)
}

export default ResponseOptions
