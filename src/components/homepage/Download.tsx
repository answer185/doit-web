import { DownloadOutlined } from '@ant-design/icons';
import DownItem from './DownItem';

export default () => {
  return (
    <div>
      <div>
        <DownloadOutlined />
        <span>Download</span>
      </div>
      <div>for all:</div>
      <DownItem type="android"/>
      <DownItem type="ios"/>
      <DownItem type="web"/>
      <div>More for Pro: <span>Upgrade to Pro</span></div>
      <DownItem type="mac" />
      <DownItem type="window" />
    </div>
  )
}
