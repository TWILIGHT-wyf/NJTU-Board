import { Avatar } from './Avatar'
import { BrandMark } from './BrandMark'
import { PixelIcon } from './PixelIcon'

interface HeaderProps {
  onPublish: () => void
  onProfile: () => void
}

export function Header({ onPublish, onProfile }: HeaderProps) {
  const hour = new Date().getHours()
  const greeting =
    hour < 5 ? '夜深了，' : hour < 11 ? '早上好，' : hour < 14 ? '中午好，' : hour < 18 ? '下午好，' : '晚上好，'

  return (
    <header className="sticky top-0 z-30">
      <div className="h-2 wood-grain border-b border-wood-deep/70" aria-hidden="true" />
      <div className="border-b-[3px] border-wood-deep/80 bg-paper/92 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] max-w-6xl items-center gap-3 px-4 sm:h-[76px] sm:px-6">
          <a
            href="#home"
            className="flex items-center gap-3 rounded-sm focus-visible:outline-clay"
            aria-label="南工告示板首页"
          >
            <BrandMark size={46} />
            <span className="block min-w-0">
              <span className="flex items-center gap-2">
                <span className="font-display text-[1.35rem] leading-tight text-pine text-pixel-shadow sm:text-[1.65rem]">
                  南工告示板
                </span>
                <span className="hidden items-center gap-1 border border-njtech/45 bg-paper px-1.5 py-0.5 font-pixel text-[7px] leading-none tracking-wide text-njtech-deep min-[380px]:inline-flex">
                  <span className="h-1 w-1 bg-njtech" aria-hidden="true" />
                  NJTech
                </span>
              </span>
              <span className="mt-0.5 block text-[10px] font-medium tracking-[0.08em] text-ink-soft/80 sm:text-[11px]">
                南京工业大学 · 江浦校区
              </span>
            </span>
          </a>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onPublish}
              className="pixel-btn pixel-btn-honey hidden h-10 px-4 text-sm md:inline-flex"
            >
              <PixelIcon name="plus" size={14} />
              发布委托
            </button>
            <div className="hidden h-8 w-px bg-wood-deep/15 sm:block" aria-hidden="true" />
            <button
              type="button"
              onClick={onProfile}
              className="group flex items-center gap-2.5 rounded-sm border-2 border-transparent p-1 transition-colors hover:border-wood-deep/20 hover:bg-cream/80"
              aria-label="打开个人主页"
            >
              <Avatar variant="chestnut" size={35} className="rounded-[2px] transition-transform group-hover:-rotate-2" />
              <span className="hidden text-left sm:block">
                <span className="block text-[10px] leading-tight text-ink-soft/75">{greeting}</span>
                <span className="block text-sm font-bold leading-tight text-ink">阿栗</span>
              </span>
              <PixelIcon
                name="sparkle"
                size={10}
                className="hidden text-honey-deep/70 sm:block"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
