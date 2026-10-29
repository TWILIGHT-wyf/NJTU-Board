import { PixelIcon } from './PixelIcon'

interface EmptyStateProps {
  hasFilters: boolean
  onClear: () => void
}

export function EmptyState({ hasFilters, onClear }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-dashed border-wood-deep/25 bg-paper/65 px-6 py-14 text-center">
      <div className="relative flex h-20 w-20 items-center justify-center border-2 border-wood-deep/25 bg-cream/60">
        <span className="absolute -top-2 left-1/2 h-4 w-12 -translate-x-1/2 -rotate-2 bg-sage/80" aria-hidden="true" />
        <PixelIcon name="search" size={34} className="text-wood/55" />
        <span className="absolute bottom-2 right-3 h-2 w-2 bg-honey/80" aria-hidden="true" />
      </div>
      <p className="mt-5 font-display text-xl text-ink">公告栏这一角还空着</p>
      <p className="mt-2 max-w-sm text-xs leading-6 text-ink-soft/70">
        {hasFilters
          ? '换个关键词或分类再看看，也许明德楼那边正有新的告示。'
          : '今天还没有人贴出告示，要不要做第一个？'}
      </p>
      {hasFilters && (
        <button
          type="button"
          onClick={onClear}
          className="pixel-btn pixel-btn-paper mt-5 h-9 px-4 text-xs"
        >
          清除筛选
          <PixelIcon name="close" size={12} />
        </button>
      )}
    </div>
  )
}
