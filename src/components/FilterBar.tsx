import { CATEGORY_KEYS, CATEGORY_LABELS } from '../types'
import type { CategoryFilter } from '../types'
import { PixelIcon } from './PixelIcon'
import type { IconName } from './PixelIcon'

const CATEGORY_ICONS: Record<CategoryFilter, IconName> = {
  all: 'grid',
  help: 'heart',
  partner: 'people',
  borrow: 'box',
  idle: 'tag',
  other: 'sparkle',
}

interface FilterBarProps {
  query: string
  category: CategoryFilter
  onQueryChange: (value: string) => void
  onCategoryChange: (value: CategoryFilter) => void
}

export function FilterBar({ query, category, onQueryChange, onCategoryChange }: FilterBarProps) {
  const categories: CategoryFilter[] = ['all', ...CATEGORY_KEYS]

  return (
    <section aria-label="搜索与分类" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="relative">
        <label htmlFor="notice-search" className="sr-only">
          搜索校园委托
        </label>
        <PixelIcon
          name="search"
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-wood/75"
        />
        <input
          id="notice-search"
          type="text"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="搜一搜：明德楼、羽毛球、借个工具……"
          className="h-12 w-full rounded-[3px] border-2 border-wood-deep/25 bg-paper/90 py-3 pl-12 pr-12 text-sm text-ink shadow-[inset_0_2px_0_rgba(91,62,43,0.04)] transition-colors placeholder:text-ink-soft/55 hover:border-wood-deep/40 focus:border-pine/55 focus:outline-none focus-visible:outline-none sm:h-[52px] sm:text-[15px]"
        />
        {query ? (
          <button
            type="button"
            onClick={() => onQueryChange('')}
            className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-ink-soft/55 transition-colors hover:text-pine"
            aria-label="清空搜索"
          >
            <PixelIcon name="close" size={14} />
          </button>
        ) : (
          <span
            className="pointer-events-none absolute right-3.5 top-1/2 hidden -translate-y-1/2 border border-wood-deep/15 bg-cream/60 px-1.5 py-1 font-pixel text-[7px] tracking-wider text-ink-soft/45 sm:block"
            aria-hidden="true"
          >
            SEARCH
          </span>
        )}
      </div>

      <div className="mt-3 flex items-center gap-2 sm:mt-4">
        <div
          role="group"
          aria-label="按分类筛选委托"
          className="-mx-4 flex flex-1 flex-wrap gap-2 px-4 py-1 sm:mx-0 sm:px-0"
        >
          {categories.map((item) => {
            const active = category === item
            return (
              <button
                key={item}
                type="button"
                onClick={() => onCategoryChange(item)}
                aria-pressed={active}
                className={`flex shrink-0 items-center gap-1 rounded-[2px] border-2 px-2.5 py-1.5 text-xs font-bold transition-all sm:gap-1.5 sm:px-3 sm:text-[13px] ${
                  active
                    ? 'border-wood-deep bg-pine text-paper shadow-[2px_2px_0_0_#5b3e2b]'
                    : 'border-wood-deep/20 bg-paper/85 text-ink-soft hover:-translate-y-0.5 hover:border-wood-deep/40 hover:bg-sage/40 hover:text-pine'
                }`}
              >
                <PixelIcon
                  name={CATEGORY_ICONS[item]}
                  size={13}
                  className={`hidden sm:block ${active ? 'text-honey' : 'text-leaf/80'}`}
                />
                {CATEGORY_LABELS[item]}
                {active && (
                  <span className="ml-0.5 h-1.5 w-1.5 bg-njtech" aria-hidden="true" />
                )}
              </button>
            )
          })}
        </div>

        <span className="hidden shrink-0 items-center gap-1.5 text-[11px] text-ink-soft/60 md:flex">
          <PixelIcon name="clock" size={12} />
          按最新发布
        </span>
      </div>
    </section>
  )
}
