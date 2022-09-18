import '../styles/globals.css'

import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps, ...appProps}) {
    const isLogin = appProps.router.pathname.includes('login');
    const isRegister = appProps.router.pathname.includes('signup');

    const page = <Component {...pageProps}/>

    if (isLogin || isRegister) {
        return page;
    }
    return (
        <Layout>
            {page}
        </Layout>
    );
}

export default MyApp
