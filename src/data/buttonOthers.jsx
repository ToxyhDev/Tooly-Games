import { IconBook, IconSettings, IconCofee } from '../assets/svgButtonOthers'

export const buttonOthers = [
  {
    id: 1,
    className: 'button--small button-others button-others-fill',
    icon: <IconBook />,
    path: '/information',
  },
  {
    id: 2,
    className: 'button--small button-others button-others-fill',
    icon: <IconSettings />,
    path: '/settings',
  },
  {
    id: 3,
    className:
      'button--small button-others button-others-fill button__donation',
    icon: <IconCofee />,
    path: 'https://ko-fi.com/toxdev',
    target: '_blank',
  },
]
