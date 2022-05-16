import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import {persistor, store} from "./store";
import "./firebase"
import {PersistGate} from "redux-persist/integration/react";


const root = createRoot(document.getElementById('root'))
root.render(<React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
</React.StrictMode>,)


