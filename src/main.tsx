// main.tsx or index.tsx
import '@ant-design/v5-patch-for-react-19'; // 👈 Must come first
import { ConfigProvider, unstableSetRender } from 'antd';
import { createRoot } from 'react-dom/client';

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
  ><App /></ConfigProvider>);
