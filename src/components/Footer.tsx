import { BrandMark } from './BrandMark'
import { PixelIcon } from './PixelIcon'

export function Footer() {
  return (
    <footer className="mt-14">
      <div className="h-2 wood-grain border-y border-wood-deep/70" aria-hidden="true" />
      <div className="bg-pine text-paper/75">
        <div className="mx-auto max-w-6xl px-4 pb-[calc(132px+env(safe-area-inset-bottom))] pt-7 sm:px-6 sm:pt-8 md:pb-9">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="flex items-start gap-3.5">
              <BrandMark size={44} />
              <div>
                <p className="font-display text-lg leading-tight text-paper sm:text-xl">南工告示板</p>
                <p className="mt-1 text-[11px] leading-5 text-paper/55">
                  把举手之劳，变成校园里的小小回声。
                </p>
                <p className="mt-1.5 font-pixel text-[7px] tracking-[0.12em] text-paper/30">
                  NANJING TECH UNIVERSITY · EST. 1902
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 border-y border-paper/10 py-3.5 lg:border-0 lg:py-0">
              <span className="flex h-11 w-11 shrink-0 rotate-[-4deg] items-center justify-center border-2 border-[#7ad4fa]/55 bg-[#006f9e] font-pixel text-[8px] text-paper shadow-[2px_2px_0_rgba(16,41,31,0.35)]">
                NJTech
              </span>
              <div>
                <p className="font-display text-sm tracking-[0.08em] text-sage">
                  明德 · 厚学 · 沉毅 · 笃行
                </p>
                <p className="mt-1 text-[10px] text-paper/35">校训 · 与每一位南工人共勉</p>
              </div>
            </div>

            <div className="text-[11px] leading-5 text-paper/55 lg:text-right">
              <p className="flex items-center gap-1.5 lg:justify-end">
                <PixelIcon name="building" size={12} className="text-sage/80" />
                南京工业大学 · 江浦校区
              </p>
              <p className="mt-0.5 text-paper/40">南京市江北新区浦珠南路 30 号</p>
              <p className="mt-2 font-pixel text-[7px] tracking-[0.12em] text-paper/25">
                CAMPUS MUTUAL-AID BOARD · PROTOTYPE
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-1.5 border-t border-paper/10 pt-4 text-[10px] text-paper/35 sm:flex-row sm:items-center sm:justify-between">
            <p>校园互助网页原型 · 非官方</p>
            <p>本页委托、人物与时间均为演示数据</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
