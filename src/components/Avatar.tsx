import type { AvatarVariant } from '../types'

const PALETTES: Record<
  AvatarVariant,
  { bg: string; hair: string; skin: string; shirt: string; detail: string }
> = {
  chestnut: { bg: '#f3e3c0', hair: '#6d4a34', skin: '#f0c49a', shirt: '#4d7157', detail: '#5d8a62' },
  sprout: { bg: '#dfe9ce', hair: '#405740', skin: '#e8bd93', shirt: '#d3a447', detail: '#7fa05e' },
  peach: { bg: '#f2d8ca', hair: '#8b5542', skin: '#f1c5a4', shirt: '#b96048', detail: '#e2a98a' },
  cloud: { bg: '#dce6df', hair: '#6f6553', skin: '#efd0b0', shirt: '#6f8791', detail: '#d9a84f' },
  pear: { bg: '#f2e3be', hair: '#5f5235', skin: '#e7bb8e', shirt: '#788c4b', detail: '#c86a4c' },
  bean: { bg: '#e9dfcc', hair: '#3b342b', skin: '#d9a97d', shirt: '#38543f', detail: '#b8754a' },
}

interface AvatarProps {
  variant: AvatarVariant
  size?: number
  className?: string
}

export function Avatar({ variant, size = 32, className = '' }: AvatarProps) {
  const { bg, hair, skin, shirt, detail } = PALETTES[variant]

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden border-2 border-wood-deep/80 bg-paper ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 16 16"
        width="100%"
        height="100%"
        shapeRendering="crispEdges"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="16" height="16" fill={bg} />
        <rect x="3" y="13" width="10" height="3" fill={shirt} />
        <rect x="5" y="4" width="6" height="1" fill={hair} />
        <rect x="4" y="5" width="8" height="2" fill={hair} />
        <rect x="4" y="7" width="1" height="4" fill={hair} />
        <rect x="11" y="7" width="1" height="4" fill={hair} />
        <rect x="5" y="7" width="6" height="5" fill={skin} />
        <rect x="6" y="9" width="1" height="1" fill="#33362a" />
        <rect x="9" y="9" width="1" height="1" fill="#33362a" />
        <rect x="7" y="11" width="2" height="1" fill="#b06d56" />
        <rect x="5" y="12" width="6" height="1" fill={shirt} />

        {variant === 'chestnut' && (
          <>
            <rect x="10" y="1" width="3" height="1" fill={detail} />
            <rect x="11" y="2" width="1" height="2" fill={detail} />
            <rect x="13" y="2" width="2" height="1" fill="#8aab6f" />
          </>
        )}
        {variant === 'sprout' && (
          <>
            <rect x="11" y="1" width="1" height="3" fill="#4f7048" />
            <rect x="12" y="1" width="2" height="1" fill="#7fa05e" />
            <rect x="9" y="2" width="2" height="1" fill="#7fa05e" />
          </>
        )}
        {variant === 'peach' && (
          <>
            <rect x="2" y="3" width="3" height="3" fill={hair} />
            <rect x="11" y="3" width="3" height="3" fill={hair} />
            <rect x="6" y="3" width="4" height="1" fill={hair} />
          </>
        )}
        {variant === 'cloud' && (
          <>
            <rect x="4" y="8" width="8" height="1" fill="#4a4a3e" />
            <rect x="4" y="9" width="2" height="2" fill="#4a4a3e" />
            <rect x="10" y="9" width="2" height="2" fill="#4a4a3e" />
          </>
        )}
        {variant === 'pear' && (
          <>
            <rect x="4" y="3" width="8" height="3" fill={detail} />
            <rect x="4" y="6" width="8" height="1" fill="#e6c98b" />
          </>
        )}
        {variant === 'bean' && (
          <>
            <rect x="4" y="3" width="8" height="2" fill={hair} />
            <rect x="11" y="4" width="2" height="1" fill={hair} />
          </>
        )}
      </svg>
    </span>
  )
}
