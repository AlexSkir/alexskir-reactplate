import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, QuestionCircleOutlined, ContactsOutlined } from '@ant-design/icons';

const { Footer, Sider } = Layout;

const rootRoutes = ['/', '/about', '/contact'];
const aboutSubRoutes = ['/about/me', '/about/company'];

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    const { children } = this.props;
    return (
      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          {collapsed ? <div className="logo">AS</div> : <div className="logo">AlexSkir</div>}
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[
              aboutSubRoutes.includes(window.location.pathname)
                ? '1'
                : rootRoutes.indexOf(window.location.pathname).toString(),
            ]}
          >
            <Menu.Item key="0">
              <Link to="/">
                <HomeOutlined />
                <span className="menu-item-link">Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to="/about">
                <QuestionCircleOutlined />
                <span className="menu-item-link">About</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/contact">
                <ContactsOutlined />
                <span className="menu-item-link">Contact</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          {children}
          <Footer>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/AlexSkir/alexskir-reactplate"
            >
              GitHub
            </a>
            <span> | </span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.npmjs.com/package/alexskir-reactplate"
            >
              npm
            </a>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
