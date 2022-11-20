import RequestSections from './RequestSections'

const RequestOptions: React.FC = () => {
	return (
		<RequestSections
			pages={['Params', 'Authorization', 'Headers', 'Body']}
			selected="Params"
		></RequestSections>
	)
}

export default RequestOptions
