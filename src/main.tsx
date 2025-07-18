// main.tsx or index.tsx
import '@ant-design/v5-patch-for-react-19'; // 👈 Must come first
import { ConfigProvider, unstableSetRender } from 'antd';
import { createRoot } from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3100/graphql',
  cache: new InMemoryCache(),
});


// 👇 Custom render patch for AntD compatibility
unstableSetRender((node, container:any) => {
  container._reactRoot ||= createRoot(container);
  const root = container._reactRoot;
  root.render(node);
  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});


 
import './index.css';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
<ConfigProvider
    theme={{
      token: {
      
        colorPrimary: '#f84464',
        borderRadius: 4,
     
      },
    }}
  >
    <ApolloProvider client={client}><App /></ApolloProvider>
    </ConfigProvider>);
