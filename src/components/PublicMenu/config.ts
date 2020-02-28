export type configInterface = Array<configItemInterface>

export interface configItemInterface {
  path: string,
  name: string,
  icon?: string,
  active: string,
  show?: boolean,
  children?: configInterface
}

const config: configInterface = [
  {
    path: '/',
    name: '一级菜单',
    icon: '',
    active: '/',
    show: true,
    children: []
  }
]

export default config;