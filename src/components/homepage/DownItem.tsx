export interface DownloadItemType {
  type: string;
}

export interface TypeObj {
  title: string,
  version: string,
  img: string,
}

export interface DownloadTypes {
  'android': TypeObj,
  'ios': TypeObj,
  'web': TypeObj,
  'mac': TypeObj,
  'window': TypeObj,
  [attr: string]: any
}

const data: DownloadTypes = {
  'android': {
    title: '4.4.5 for Android',
    version: 'Android 4.0+',
    img: 'android.png'
  },
  'ios': {
    title: '4.4.3 for iPhone',
    version: 'iOS 7+',
    img: 'ios.png'
  },
  'web': {
    title: 'for Web',
    version: 'Firefox 3.6+ Safari 4.0+ Chrome 4.0+',
    img: 'web.png'
  },
  'mac': {
    title: '4.2.6 for Mac Retina',
    version: 'OS X 10.7+',
    img: 'mac.png',
  },
  'window': {
    title: '4.1.34 for Windows',
    version: 'Windows 7+',
    img: 'window.png'
  }
}

export default (props: DownloadItemType) => {
  const obj = data[props.type];
  return (
    <div>
      <div>{obj.title}</div>
      <div>{obj.version}</div>
      <div>{obj.img}</div>
    </div>
  )
}