import { Checkbox, Button } from 'antd';

export default () => {
  return (
    <div className="site-redirect">
      <div className="inner">
        <h2>User from China? You will enjoy a faster Doit.im service by switching to China Server.</h2>
        <Button>Stay Here</Button>
        <Button>Switch to China Server</Button>
        <Checkbox>Remember my choice</Checkbox>
      </div>
    </div>
  )
}
