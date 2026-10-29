import type { ReactNode, SVGProps } from 'react'

export type IconName =
  | 'search'
  | 'plus'
  | 'home'
  | 'clipboard'
  | 'user'
  | 'pin'
  | 'clock'
  | 'location'
  | 'heart'
  | 'leaf'
  | 'close'
  | 'arrow'
  | 'check'
  | 'sparkle'
  | 'people'
  | 'box'
  | 'tag'
  | 'grid'
  | 'building'

const ICON_SHAPES: Record<IconName, ReactNode> = {
  search: (
    <>
      <rect x="3" y="2" width="7" height="2" />
      <rect x="2" y="4" width="2" height="5" />
      <rect x="9" y="4" width="2" height="5" />
      <rect x="3" y="9" width="7" height="2" />
      <rect x="10" y="9" width="2" height="2" />
      <rect x="12" y="11" width="2" height="2" />
      <rect x="13" y="13" width="2" height="1" />
    </>
  ),
  plus: (
    <>
      <rect x="7" y="2" width="2" height="12" />
      <rect x="2" y="7" width="12" height="2" />
    </>
  ),
  home: (
    <>
      <rect x="7" y="2" width="2" height="2" />
      <rect x="5" y="4" width="6" height="2" />
      <rect x="3" y="6" width="10" height="2" />
      <rect x="2" y="8" width="2" height="6" />
      <rect x="12" y="8" width="2" height="6" />
      <rect x="4" y="13" width="8" height="1" />
      <rect x="6" y="8" width="1" height="5" />
      <rect x="9" y="8" width="1" height="5" />
    </>
  ),
  clipboard: (
    <>
      <rect x="4" y="3" width="8" height="1" />
      <rect x="4" y="4" width="2" height="10" />
      <rect x="10" y="4" width="2" height="10" />
      <rect x="6" y="13" width="4" height="1" />
      <rect x="6" y="1" width="4" height="2" />
      <rect x="6" y="6" width="4" height="1" />
      <rect x="6" y="9" width="3" height="1" />
    </>
  ),
  user: (
    <>
      <rect x="6" y="2" width="4" height="1" />
      <rect x="5" y="3" width="6" height="4" />
      <rect x="4" y="8" width="8" height="1" />
      <rect x="3" y="9" width="10" height="5" />
      <rect x="5" y="9" width="6" height="1" />
    </>
  ),
  pin: (
    <>
      <rect x="6" y="1" width="4" height="2" />
      <rect x="4" y="3" width="8" height="3" />
      <rect x="7" y="6" width="2" height="5" />
      <rect x="6" y="11" width="4" height="1" />
      <rect x="7" y="12" width="2" height="2" />
    </>
  ),
  clock: (
    <>
      <rect x="6" y="2" width="4" height="1" />
      <rect x="4" y="3" width="2" height="1" />
      <rect x="10" y="3" width="2" height="1" />
      <rect x="3" y="4" width="1" height="2" />
      <rect x="12" y="4" width="1" height="2" />
      <rect x="2" y="6" width="1" height="5" />
      <rect x="13" y="6" width="1" height="5" />
      <rect x="3" y="11" width="1" height="2" />
      <rect x="12" y="11" width="1" height="2" />
      <rect x="4" y="13" width="2" height="1" />
      <rect x="10" y="13" width="2" height="1" />
      <rect x="6" y="14" width="4" height="1" />
      <rect x="7" y="4" width="1" height="4" />
      <rect x="8" y="7" width="3" height="1" />
    </>
  ),
  location: (
    <>
      <rect x="6" y="2" width="4" height="1" />
      <rect x="4" y="3" width="2" height="2" />
      <rect x="10" y="3" width="2" height="1" />
      <rect x="11" y="4" width="2" height="5" />
      <rect x="3" y="3" width="2" height="5" />
      <rect x="2" y="4" width="1" height="3" />
      <rect x="4" y="8" width="2" height="2" />
      <rect x="10" y="8" width="2" height="2" />
      <rect x="6" y="10" width="4" height="2" />
      <rect x="7" y="12" width="2" height="2" />
    </>
  ),
  heart: (
    <>
      <rect x="3" y="3" width="3" height="2" />
      <rect x="10" y="3" width="3" height="2" />
      <rect x="2" y="5" width="3" height="3" />
      <rect x="11" y="5" width="3" height="3" />
      <rect x="3" y="8" width="3" height="2" />
      <rect x="10" y="8" width="3" height="2" />
      <rect x="5" y="10" width="6" height="2" />
      <rect x="7" y="12" width="2" height="1" />
    </>
  ),
  leaf: (
    <>
      <rect x="8" y="2" width="4" height="1" />
      <rect x="5" y="3" width="4" height="1" />
      <rect x="11" y="3" width="2" height="2" />
      <rect x="3" y="5" width="3" height="2" />
      <rect x="12" y="5" width="2" height="4" />
      <rect x="4" y="7" width="3" height="2" />
      <rect x="9" y="7" width="3" height="2" />
      <rect x="5" y="9" width="4" height="2" />
      <rect x="6" y="11" width="2" height="3" />
    </>
  ),
  close: (
    <>
      <rect x="3" y="3" width="2" height="2" />
      <rect x="11" y="3" width="2" height="2" />
      <rect x="5" y="5" width="2" height="2" />
      <rect x="9" y="5" width="2" height="2" />
      <rect x="7" y="7" width="2" height="2" />
      <rect x="5" y="9" width="2" height="2" />
      <rect x="9" y="9" width="2" height="2" />
      <rect x="3" y="11" width="2" height="2" />
      <rect x="11" y="11" width="2" height="2" />
    </>
  ),
  arrow: (
    <>
      <rect x="2" y="7" width="10" height="2" />
      <rect x="9" y="5" width="2" height="2" />
      <rect x="11" y="7" width="2" height="2" />
      <rect x="9" y="9" width="2" height="2" />
      <rect x="12" y="6" width="1" height="1" />
      <rect x="12" y="9" width="1" height="1" />
    </>
  ),
  check: (
    <>
      <rect x="2" y="8" width="2" height="2" />
      <rect x="4" y="10" width="2" height="2" />
      <rect x="6" y="8" width="2" height="2" />
      <rect x="8" y="6" width="2" height="2" />
      <rect x="10" y="4" width="2" height="2" />
      <rect x="12" y="2" width="2" height="2" />
    </>
  ),
  sparkle: (
    <>
      <rect x="7" y="1" width="2" height="4" />
      <rect x="7" y="11" width="2" height="4" />
      <rect x="1" y="7" width="4" height="2" />
      <rect x="11" y="7" width="4" height="2" />
      <rect x="6" y="6" width="4" height="4" />
      <rect x="12" y="2" width="2" height="2" />
      <rect x="2" y="12" width="2" height="2" />
    </>
  ),
  people: (
    <>
      <rect x="4" y="3" width="3" height="1" />
      <rect x="3" y="4" width="5" height="4" />
      <rect x="10" y="5" width="3" height="1" />
      <rect x="9" y="6" width="5" height="3" />
      <rect x="2" y="9" width="8" height="1" />
      <rect x="1" y="10" width="10" height="4" />
      <rect x="8" y="10" width="7" height="4" />
    </>
  ),
  box: (
    <>
      <rect x="4" y="2" width="8" height="2" />
      <rect x="2" y="4" width="12" height="2" />
      <rect x="3" y="6" width="2" height="8" />
      <rect x="11" y="6" width="2" height="8" />
      <rect x="5" y="13" width="6" height="1" />
      <rect x="7" y="6" width="2" height="3" />
    </>
  ),
  tag: <path fillRule="evenodd" clipRule="evenodd" d="M3 4h7l4 4-4 4H3V4Zm6 2H5v2h4V6Z" />,
  grid: (
    <>
      <rect x="2" y="2" width="5" height="5" />
      <rect x="9" y="2" width="5" height="5" />
      <rect x="2" y="9" width="5" height="5" />
      <rect x="9" y="9" width="5" height="5" />
    </>
  ),
  building: (
    <>
      <rect x="7" y="1" width="2" height="3" />
      <rect x="3" y="4" width="10" height="2" />
      <rect x="2" y="6" width="2" height="7" />
      <rect x="7" y="6" width="2" height="7" />
      <rect x="12" y="6" width="2" height="7" />
      <rect x="5" y="9" width="1" height="4" />
      <rect x="10" y="9" width="1" height="4" />
      <rect x="1" y="13" width="14" height="2" />
    </>
  ),
}

interface PixelIconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName
  size?: number
}

export function PixelIcon({ name, size = 16, className, ...props }: PixelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {ICON_SHAPES[name]}
    </svg>
  )
}
