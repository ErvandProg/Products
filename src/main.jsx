import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

export const ProductContext = createContext({productInfo: {},setProductInfo: () => {}});

const Main = () => {
	const [productInfo, setProductInfo] = useState({});

	return (
		<ProductContext.Provider value={{ productInfo, setProductInfo }}>
			<App />
		</ProductContext.Provider>
	);
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
