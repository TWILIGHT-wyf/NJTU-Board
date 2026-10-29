import { MobileCampusStrip, PixelDiorama } from './PixelDiorama'
import { PixelIcon } from './PixelIcon'

interface HeroProps {
  openCount: number
}

export function Hero({ openCount }: HeroProps) {
  return (
    <section
      id="home"
      className="relative mx-auto max-w-6xl px-4 pb-5 pt-5 sm:px-6 sm:pb-9 sm:pt-10 lg:pb-12 lg:pt-14"
    >
      <div
        className="pointer-events-none absolute -left-10 top-0 -z-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,248,222,0.85),transparent_68%)]"
        aria-hidden="true"
      />

      <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
        <div className="max-w-2xl">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-pixel text-[9px] tracking-[0.14em] text-leaf sm:text-[10px]">
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 bg-njtech" aria-hidden="true" />
              NANJING TECH
            </span>
            <span className="hidden text-leaf/60 sm:inline">· JIANGPU CAMPUS</span>
            <span className="border border-njtech/35 bg-paper/80 px-1.5 py-0.5 text-[8px] leading-none tracking-[0.08em] text-njtech-deep">
              EST. 1902
            </span>
            <PixelIcon name="leaf" size={12} className="text-leaf/80" />
          </p>

          <h1 className="mt-3 text-balance font-display text-[2.15rem] leading-[1.22] tracking-[0.01em] text-ink text-pixel-shadow sm:text-[2.9rem] lg:text-[3.35rem]">
            今天镇上又有什么
            <span className="relative ml-1 inline-block text-pine">
              新委托
              <span
                className="absolute inset-x-0 bottom-0.5 -z-10 h-3 -rotate-[0.6deg] bg-honey/75 sm:h-4"
                aria-hidden="true"
              />
            </span>
            ？
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-ink-soft sm:text-base sm:leading-8">
            把需要搭把手的小事贴上公告栏。从厚学楼到浦江苑，总会有南工人顺手帮个忙。
            <span className="hidden sm:inline">顺手的小事，也算今天的小小成就。</span>
          </p>

          <div className="mt-5 hidden flex-wrap items-center gap-x-4 gap-y-2 text-xs text-ink-soft/85 sm:mt-6 sm:flex sm:text-[13px]">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf" />
              </span>
              <strong className="font-bold text-pine">{openCount}</strong> 件小事正在等搭把手
            </span>
            <span className="hidden h-3 w-px bg-wood-deep/20 sm:block" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5">
              <PixelIcon name="sparkle" size={11} className="text-honey-deep" />
              江浦 · 晴 · 宜互帮互助
            </span>
          </div>

          <MobileCampusStrip openCount={openCount} />
        </div>

        <div className="hidden lg:block">
          <PixelDiorama />
        </div>
      </div>
    </section>
  )
}
