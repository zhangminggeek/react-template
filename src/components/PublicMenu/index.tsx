import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styles from './index.less';
import { Menu } from 'antd';
import config, { configInterface, configItemInterface } from './config';

const { SubMenu } = Menu;
// icon 组件
const icon = (iconClass: string) => <i className={`iconfont ${iconClass} ${styles.iconfont}`}></i>

// 根据 path 匹配点亮项
const matchActive = (path: string) => {
  let active: Array<string> = [];
  const match = (routes: configInterface, p: string) => {
    routes.forEach(route => {
      if (route.path === p) {
        active.push(route.active)
      } else if (route.children) {
        match(route.children, p)
      }
    })
  };
  match(config, path);
  return active;
};

type PublicMenuProps =  RouteComponentProps

const Aside = (props: PublicMenuProps) => {
  // 点亮项
  const [active, setActive] = useState(matchActive(props.location.pathname));

  // 渲染路由组件
  const renderMenuItem = (item: configItemInterface) => {
    const isParent = item.children && item.children.map(item => item.show).every(item => item);
    if (isParent) {
      return (
        item.show &&
        <SubMenu
          key={item.path}
          title={
            <span>
              { item.icon && icon(item.icon) }<span>{item.name}</span>
            </span>
          }
        >
          { item.children && item.children.map(renderMenuItem) }
        </SubMenu>
      )
    } else {
      return (
        item.show &&
        <Menu.Item key={item.path} onClick={() => handleClick(item.path)}>
          { item.icon && icon(item.icon)  }<span>{item.name}</span>
        </Menu.Item>
      )
    }
  };

  // 路由跳转并修改点亮项
  const handleClick = (path: string) => {
    setActive(matchActive(props.location.pathname));
    props.history.push(path);
  };

  return (
    <Menu
      className={styles.mAside}
      defaultSelectedKeys={active}
      mode="inline"
      theme="dark"
    >
      { config.map(renderMenuItem) }
    </Menu>
  );
};

export default withRouter(Aside);
