import { PixelIcon } from './PixelIcon'
import type { IconName } from './PixelIcon'
import type { BoardView } from '../types'

export type NavKey = 'home' | 'mine' | 'profile'

const NAV_ITEMS: { key: NavKey; label: string; icon: IconName }[] = [
  { key: 'home', label: '首页', icon: 'home' },
  { key: 'mine', label: '我的委托', icon: 'clipboard' },
  { key: 'profile', label: '个人主页', icon: 'user' },
]

interface BottomNavProps {
  activeView: BoardView
  onNavigate: (key: NavKey) => void
}

export function BottomNav({ activeView, onNavigate }: BottomNavProps) {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 md:hidden"
      aria-label="移动端主导航"
    >
      <div className="wood-grain border-t-[3px] border-wood-deep px-3 pb-[calc(0.4rem+env(safe-area-inset-bottom))] pt-1.5 shadow-[0_-8px_24px_rgba(60,43,29,0.18)]">
        <div className="mx-auto flex max-w-sm items-stretch gap-1">
          {NAV_ITEMS.map((item) => {
            const active = item.key === activeView
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => onNavigate(item.key)}
                aria-current={active ? 'page' : undefined}
                className={`relative flex min-h-[52px] flex-1 flex-col items-center justify-center gap-1 border-2 px-2 py-1.5 transition-colors ${
                  active
                    ? 'border-wood-deep bg-paper text-pine shadow-[inset_0_-2px_0_#ded0b6]'
                    : 'border-transparent text-paper/75 hover:bg-white/5 hover:text-paper'
                }`}
              >
                {active && (
                  <span
                    className="absolute -top-2 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l-2 border-t-2 border-wood-deep bg-njtech"
                    aria-hidden="true"
                  />
                )}
                <PixelIcon
                  name={item.icon}
                  size={18}
                  className={active ? 'text-pine' : 'text-honey/85'}
                />
                <span className="text-[11px] font-bold leading-none tracking-wide">{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
