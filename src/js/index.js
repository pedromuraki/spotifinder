/* REACT */
import React from 'react'
import { render } from 'react-dom'

/* ROUTER */
import { Router } from 'react-router-dom'
import history from './router/history'

/* REDUX */
import { Provider } from 'react-redux'
import store from './reducers/store'

/* APP */
import App from './components/App'

/* SERVICE WORKER */
// import registerServiceWorker from './config/registerServiceWorker';
// registerServiceWorker();

/* IMAGES */
// const importAll = r => r.keys().forEach(r);
// importAll(require.context('../img/', true, /\.(jpe?g|png|gif)$/));

/* STYLES */
import GlobalStyle from './styles/globalStyle'

render(
  <Provider store={store}>
    <Router history={history}>
      <>
        <GlobalStyle />
        <App />
      </>
    </Router>
  </Provider>,
  document.getElementById('app')
)
