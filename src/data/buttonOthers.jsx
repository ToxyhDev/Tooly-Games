import { IconBook, IconSettings, IconCofee } from '../assets/svgButtonOthers'

export const buttonOthers = [
  {
    id: 1,
    className: 'button__small',
    icon: <IconBook />,
    path: '/information',
  },
  {
    id: 2,
    className: 'button__small',
    icon: <IconSettings />,
    path: '/settings',
  },
  {
    id: 3,
    className: 'button__small button__donation',
    icon: <IconCofee />,
    path: 'https://ko-fi.com/tomwebdev',
    target: '_blank',
  },
]
