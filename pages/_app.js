import Layout from '../components/Layout'

import '../styles/globals.css'
import '../public/index.css'
import 'tailwindcss/tailwind.css'
import store from '../redux/store'
import { Provider } from 'react-redux'
import {AuthProvider} from '../components/AuthProvider'

function MyApp({ Component, pageProps }) {
  
  return (
    <Provider store={store}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp
