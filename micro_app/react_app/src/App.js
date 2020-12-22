import './App.css';
import { useContext, useState } from 'react';
import { Menu, Layout, Button, Space } from 'antd';
import { Link, Route } from 'react-router-dom';
import routerInfo from './router/index';
import { StoreContext } from './Context';

const { Header, Content } = Layout;
function App() {
  const store = useContext(StoreContext);
  const [state, setState ] = useState(store.getState());
  const handleGlobalStateChange = () => {
    store.dispatch({type: 'Save', payload:{ name: '786786', age: '1321513' }})
  }
  store.subscribe(()=>{
    setState(store.getState())
  })
  return (
    <Layout>
      <Space style={{ display: 'flex', justifyContent: 'center'}}>
        这里是全局变量: { Object.keys(state).map((item)=> item+':'+state[item]) }
        <Button onClick={handleGlobalStateChange}>修改全局变量</Button>
      </Space>
      <Menu mode="horizontal" theme="light" >
        <Menu.Item key="category"><Link to="/category">category</Link></Menu.Item>
        <Menu.Item key="detail"><Link to="/detail">detail</Link></Menu.Item>
        <Menu.Item key="display"><Link to="/display">display</Link></Menu.Item>
      </Menu>
      <Content>
        {
          routerInfo.map((item) => {
            return(
              <Route key={item.name} exact path={item.path} component={item.component}></Route>
            )
          })
        }
      </Content>
    </Layout>
  );
}

export default App;
