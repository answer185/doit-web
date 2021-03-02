import { Menu, Select } from 'antd';

const { Option } = Select;

export interface MenuInfo {
  key: React.Key;
  keyPath: React.Key[];
  item: React.ReactInstance;
  domEvent: React.MouseEvent<HTMLElement>;
}

export default () => {
  const handleClick = (e: MenuInfo) => {
    console.log('click ', e);
  }
  return (
    <div>
      <div></div>
      <div>
        <Select defaultValue="international" style={{ width: 120 }} >
          <Option value="international">international</Option>
          <Option value="China">China</Option>
        </Select>
      </div>
      <div>
        <Menu onClick={handleClick}>
          <Menu.Item key="upgrade">Upgrade</Menu.Item>
          <Menu.Item key="download">Download</Menu.Item>
          <Menu.Item key="help">Help</Menu.Item>
          <Menu.Item key="blog">Blog</Menu.Item>
          <Menu.Item key="groups">Groups</Menu.Item>
        </Menu>
      </div>
      <div>
        <span>My Doit.im</span>
        <span> | </span>
        <span>Sign Up</span>
      </div>
    </div>
  )
}
