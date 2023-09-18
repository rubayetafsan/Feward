// import '../../styles/global.css';
import type { AppProps } from 'next/app';
import Layout from 'components/containers/layout';

const App: React.FC<AppProps> = (props) => {
    
    const { Component, pageProps } = props;
    
    return (
      <Layout>
          <Component {...pageProps} />
      </Layout>
    )
};

export default App;