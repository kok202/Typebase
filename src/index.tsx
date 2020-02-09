import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { Provider } from 'mobx-react'
import { taskStore } from './store/TaskStore';
import { configure } from 'mobx';

configure({
    enforceActions: 'always'
});

ReactDOM.render(
    <Provider taskStore={taskStore}>
        <App />
    </Provider>,
    document.getElementById('root'));