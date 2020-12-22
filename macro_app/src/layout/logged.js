import { useEffect, useState } from 'react';
import { Layout, Menu, Button, Space } from 'antd';
import { Link } from 'react-router-dom';
import store from '../microConfig/redux';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const Logged = () => {
  const [ state , setState ] = useState(store.getState());
  const handleClick = ()=>{
    store.dispatch({type: 'Save', payload: {
      name: '1351'
    }})
  }
  store.subscribe((item)=>{
    setState(store.getState())
  })
  return(
    <Layout style={{ height: "100vh" }}>
      <Header style={{ height: "10vh" }}>
        <Space>
          <h1 style={{color: 'white'}}>请忽略这丑陋的界面搭建</h1>
          <h2 style={{color: 'white'}}>这里是全局变量: { Object.keys(state).map((item)=> item+':'+state[item]) }</h2>
          <Button type="primary" onClick={handleClick}>更改全局状态</Button>
        </Space>
      </Header>
      <Content >
        <Layout style={{ height: "90vh" }}>
          <Sider>
            <Menu
              // style={{ width: 256, height: '100%' }}
              defaultOpenKeys={['setting']}
              mode="inline"
              theme="dark"
            >
                
              <SubMenu key="setting"  title="微应用">
                <Menu.Item key="vue">
                  <Link to="/vue">vue项目</Link>
                </Menu.Item>
                <Menu.Item key="react">
                  <Link to="/react">react项目</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content>
            <div id="app-qiankun"></div>
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}

export default Logged;