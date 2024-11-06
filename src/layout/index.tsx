import {Button, Layout, Menu, theme} from "antd";
import {useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import ChatAIOptionPage from "../pages/Option/ChatAI";
import StorageOptionPage from "../pages/Option/Storage";
import Main from "../pages/Main";


const LayoutWrapper = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Layout.Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Menu>
                    <Menu.Item>
                        <Link to="options/chat-ai">Chat AI</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="options/storage">Storage</Link>
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
            <Layout>
                <Layout.Header style={{padding: 0, background: colorBgContainer}}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Layout.Header>
                <Layout.Content style={{margin: '0 16px'}}>
                    <Routes>
                        <Route path="/" element={<Main />}/>
                        <Route path="options/chat-ai" element={<ChatAIOptionPage/>}/>
                        <Route path="options/storage" element={<StorageOptionPage/>}/>
                    </Routes>
                </Layout.Content>
                <Layout.Footer>
                    <h3>Footer</h3>
                </Layout.Footer>
            </Layout>
        </Layout>
    )
}

export default LayoutWrapper;
