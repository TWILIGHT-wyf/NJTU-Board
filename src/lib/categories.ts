import type { Category } from '../types'

export const CATEGORY_BADGE: Record<Category, string> = {
  help: 'border-clay/25 bg-clay/10 text-clay-deep',
  partner: 'border-leaf/25 bg-leaf/15 text-pine',
  borrow: 'border-honey-deep/20 bg-honey/20 text-honey-deep',
  idle: 'border-mist-deep/20 bg-mist/40 text-mist-deep',
  other: 'border-wood/20 bg-wood/10 text-wood-deep',
}

export const TAPE_STYLES = [
  'bg-honey/70 border-honey-deep/15',
  'bg-sage/80 border-leaf/15',
  'bg-clay/20 border-clay/10',
  'bg-mist/80 border-mist-deep/10',
] as const

export const CARD_TILTS = [
  'lg:-rotate-[0.35deg]',
  'lg:rotate-[0.3deg]',
  'lg:-rotate-[0.15deg]',
  'lg:rotate-[0.45deg]',
] as const
