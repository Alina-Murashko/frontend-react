import { Provider } from 'react-redux'

import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import '@radix-ui/themes/styles.css'

import { App } from './app/App'
import { store } from './app/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
