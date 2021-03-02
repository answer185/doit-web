import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';


export default () => {
  return (
    <div>
      <Button>
        <span>Sign Up for free</span>
        <span>with a free 30-day trial of Doit.im Pro</span>
      </Button>
      <Button>
        <span>Take a Quick Tour</span>
        <span><PlayCircleOutlined /></span>
      </Button>
    </div>
  )
}
