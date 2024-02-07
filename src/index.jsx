import { render } from 'preact';
import "normalize.css"
import './style.css';
import { TengemTestPage } from './components/TangemTestPage';

export function App() {
	return (
		<TengemTestPage />
	);
}


render(<App />, document.getElementById('app'));
