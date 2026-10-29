import { PixelIcon } from './PixelIcon'
import { TaskGrid } from './TaskGrid'
import type { MyTaskTab, Task } from '../types'

interface MyTasksPageProps {
  tasks: Task[]
  currentUserId: string
  activeTab: MyTaskTab
  onTabChange: (tab: MyTaskTab) => void
  onOpen: (task: Task) => void
  onClaim: (task: Task) => void
  onComplete: (task: Task) => void
  onPublish: () => void
  onHome: () => void
}

export function MyTasksPage({
  tasks,
  currentUserId,
  activeTab,
  onTabChange,
  onOpen,
  onClaim,
  onComplete,
  onPublish,
  onHome,
}: MyTasksPageProps) {
  const posted = tasks
    .filter((task) => task.author.id === currentUserId)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  const claimed = tasks
    .filter((task) => task.claimant?.id === currentUserId)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  const activeTasks = activeTab === 'posted' ? posted : claimed
  const isPosted = activeTab === 'posted'
  const tabDescription = isPosted ? '你贴出的告示都会收在这里。' : '你接下的小事都会留在这里。'

  return (
    <section
      id="my-tasks"
      aria-labelledby="my-tasks-title"
      className="mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-6 sm:pt-9"
    >
      <button
        type="button"
        onClick={onHome}
        className="inline-flex items-center gap-1.5 border-b border-dashed border-wood-deep/25 pb-1 text-[11px] font-semibold text-ink-soft/65 transition-colors hover:border-pine/50 hover:text-pine"
      >
        <PixelIcon name="arrow" size={11} className="rotate-180" />
        回到告示墙
      </button>

      <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-start gap-3.5">
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center border-2 border-wood-deep bg-honey text-wood-deep shadow-[2px_2px_0_0_#5b3e2b]">
            <PixelIcon name="clipboard" size={22} />
            <span
              className="absolute -right-1 -top-1 h-3 w-3 border border-paper bg-njtech"
              aria-hidden="true"
            />
          </span>
          <div>
            <p className="font-pixel text-[8px] tracking-[0.18em] text-leaf/90">
              MY CAMPUS TASKS
            </p>
            <h1
              id="my-tasks-title"
              className="mt-0.5 font-display text-[1.8rem] leading-tight text-ink text-pixel-shadow sm:text-[2.1rem]"
            >
              我的委托
            </h1>
            <p className="mt-1.5 text-xs leading-6 text-ink-soft/75 sm:text-[13px]">
              你贴出去的，和你接住的，都收在这里。
            </p>
          </div>
        </div>

        <span className="inline-flex w-fit items-center gap-1.5 border border-njtech/25 bg-paper/60 px-2.5 py-1.5 text-[10px] leading-none text-njtech-deep/75">
          <span className="h-1.5 w-1.5 bg-njtech" aria-hidden="true" />
          本地演示 · 数据保存在当前浏览器
        </span>
      </div>

      <div
        role="group"
        aria-label="我的委托分类"
        className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:w-fit"
      >
        <button
          type="button"
          onClick={() => onTabChange('posted')}
          aria-pressed={isPosted}
          className={`flex min-h-11 items-center justify-center gap-2 border-2 px-4 text-xs font-bold transition-colors sm:min-w-[150px] sm:text-sm ${
            isPosted
              ? 'border-wood-deep bg-pine text-paper shadow-[2px_2px_0_0_#5b3e2b]'
              : 'border-wood-deep/20 bg-paper/85 text-ink-soft hover:border-wood-deep/40 hover:bg-sage/30 hover:text-pine'
          }`}
        >
          <PixelIcon
            name="clipboard"
            size={14}
            className={isPosted ? 'text-honey' : 'text-leaf/80'}
          />
          我发布的
          <span
            className={`border px-1.5 py-0.5 font-pixel text-[8px] leading-none ${
              isPosted
                ? 'border-paper/20 bg-paper/15 text-paper'
                : 'border-wood-deep/10 bg-cream-deep/50 text-pine/70'
            }`}
          >
            {posted.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => onTabChange('claimed')}
          aria-pressed={!isPosted}
          className={`flex min-h-11 items-center justify-center gap-2 border-2 px-4 text-xs font-bold transition-colors sm:min-w-[150px] sm:text-sm ${
            !isPosted
              ? 'border-wood-deep bg-pine text-paper shadow-[2px_2px_0_0_#5b3e2b]'
              : 'border-wood-deep/20 bg-paper/85 text-ink-soft hover:border-wood-deep/40 hover:bg-sage/30 hover:text-pine'
          }`}
        >
          <PixelIcon
            name="heart"
            size={14}
            className={!isPosted ? 'text-honey' : 'text-leaf/80'}
          />
          我认领的
          <span
            className={`border px-1.5 py-0.5 font-pixel text-[8px] leading-none ${
              !isPosted
                ? 'border-paper/20 bg-paper/15 text-paper'
                : 'border-wood-deep/10 bg-cream-deep/50 text-pine/70'
            }`}
          >
            {claimed.length}
          </span>
        </button>
      </div>

      <div className="mb-4 mt-5 flex items-center justify-between gap-3">
        <p className="text-xs text-ink-soft/60">{tabDescription}</p>
        <span className="shrink-0 text-[11px] text-ink-soft/45" aria-live="polite">
          {activeTasks.length} 张
        </span>
      </div>

      {activeTasks.length > 0 ? (
        <TaskGrid
          tasks={activeTasks}
          currentUserId={currentUserId}
          onOpen={onOpen}
          onClaim={onClaim}
          onComplete={onComplete}
        />
      ) : (
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-wood-deep/25 bg-paper/65 px-6 py-14 text-center">
          <div className="relative flex h-20 w-20 items-center justify-center border-2 border-wood-deep/25 bg-cream/60">
            <span
              className="absolute -top-2 left-1/2 h-4 w-12 -translate-x-1/2 -rotate-2 bg-sage/80"
              aria-hidden="true"
            />
            <PixelIcon
              name={isPosted ? 'clipboard' : 'heart'}
              size={32}
              className="text-wood/55"
            />
            <span className="absolute bottom-2 right-3 h-2 w-2 bg-njtech/70" aria-hidden="true" />
          </div>
          <p className="mt-5 font-display text-xl text-ink">
            {isPosted ? '还没有贴过委托' : '还没有认领过委托'}
          </p>
          <p className="mt-2 max-w-sm text-xs leading-6 text-ink-soft/70">
            {isPosted
              ? '把需要搭把手的小事贴上来，等一位路过的南工人接住它。'
              : '去告示墙逛逛，看到顺路的小事就搭把手。'}
          </p>
          <button
            type="button"
            onClick={isPosted ? onPublish : onHome}
            className="pixel-btn pixel-btn-primary mt-5 h-9 px-4 text-xs"
          >
            <PixelIcon name={isPosted ? 'plus' : 'arrow'} size={13} />
            {isPosted ? '发布一张委托' : '去告示墙看看'}
          </button>
        </div>
      )}

      <p className="mt-7 text-center text-[10px] leading-5 text-ink-soft/35">
        刷新后数据仍会保留；更换浏览器或清除站点数据后会重新开始。当前版本只模拟当前用户，多用户协作尚未接入。
      </p>
    </section>
  )
}
