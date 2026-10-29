import { Avatar } from './Avatar'
import { Modal } from './Modal'
import { PixelIcon } from './PixelIcon'
import { CATEGORY_ICON, CURRENT_USER } from '../data/tasks'
import { CATEGORY_LABELS } from '../types'
import type { Task } from '../types'
import { formatRelativeTime } from '../lib/time'
import { CATEGORY_BADGE } from '../lib/categories'
import { STATUS_META } from '../lib/status'

interface TaskDetailProps {
  task: Task | null
  onClose: () => void
  onClaim: (task: Task) => void
}

export function TaskDetail({ task, onClose, onClaim }: TaskDetailProps) {
  const status = task ? STATUS_META[task.status] : null
  const claimedByMe = task?.claimant?.name === CURRENT_USER.name

  return (
    <Modal open={Boolean(task)} onClose={onClose} labelledBy="task-detail-title">
      {task && status && (
        <>
          <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b-2 border-dashed border-wood-deep/20 bg-cream/95 px-5 py-3.5 backdrop-blur-sm sm:px-7">
            <div>
              <p className="font-pixel text-[8px] tracking-[0.16em] text-leaf">
                NOTICE DETAIL
              </p>
              <p className="mt-0.5 text-[10px] text-ink-soft/60">
                张贴于 {formatRelativeTime(task.createdAt)}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center border-2 border-wood-deep/20 bg-paper text-ink-soft transition-colors hover:border-wood-deep/50 hover:text-pine"
              aria-label="关闭委托详情"
            >
              <PixelIcon name="close" size={14} />
            </button>
          </div>

          <div className="px-5 pb-8 pt-6 sm:px-8 sm:pt-8">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 border px-2 py-1 text-[10px] font-bold ${CATEGORY_BADGE[task.category]}`}
              >
                <PixelIcon name={CATEGORY_ICON[task.category]} size={12} />
                {CATEGORY_LABELS[task.category]}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 border px-2 py-1 text-[10px] font-bold ${status.badgeClass}`}
              >
                <span className="h-1.5 w-1.5 bg-current" aria-hidden="true" />
                {status.label}
              </span>
              <span className="ml-auto font-pixel text-[8px] tracking-wider text-ink-soft/35">
                #{task.id.startsWith('notice-') ? task.id.split('-').at(-1) : task.id.slice(0, 4).toUpperCase()}
              </span>
            </div>

            <h2
              id="task-detail-title"
              className="mt-4 text-balance font-display text-[1.7rem] leading-[1.4] text-ink sm:text-[2rem]"
            >
              {task.title}
            </h2>

            <p className="mt-4 whitespace-pre-line text-sm leading-7 text-ink-soft sm:text-[15px] sm:leading-8">
              {task.description}
            </p>

            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              <div className="border border-wood-deep/15 bg-cream/45 px-3.5 py-3">
                <p className="font-pixel text-[7px] tracking-[0.14em] text-leaf/80">FROM</p>
                <div className="mt-2 flex items-center gap-2.5">
                  <Avatar variant={task.author.avatar} size={30} className="rounded-[1px]" />
                  <div>
                    <p className="text-xs font-bold text-ink">{task.author.name}</p>
                    <p className="text-[10px] text-ink-soft/60">贴下这张告示</p>
                  </div>
                </div>
              </div>

              <div className="border border-wood-deep/15 bg-cream/45 px-3.5 py-3">
                <p className="font-pixel text-[7px] tracking-[0.14em] text-leaf/80">WHERE</p>
                <p className="mt-2 flex items-start gap-2 text-xs font-semibold leading-5 text-ink">
                  <PixelIcon name="location" size={14} className="mt-0.5 shrink-0 text-wood" />
                  {task.location}
                </p>
              </div>

              <div className="border border-wood-deep/15 bg-cream/45 px-3.5 py-3">
                <p className="font-pixel text-[7px] tracking-[0.14em] text-leaf/80">THANKS</p>
                <p className="mt-2 flex items-start gap-2 text-xs font-semibold leading-5 text-honey-deep">
                  <PixelIcon name="sparkle" size={13} className="mt-0.5 shrink-0" />
                  {task.reward || '一句真诚的谢谢'}
                </p>
              </div>

              <div className="border border-wood-deep/15 bg-cream/45 px-3.5 py-3">
                <p className="font-pixel text-[7px] tracking-[0.14em] text-leaf/80">STATUS</p>
                <p className="mt-2 flex items-start gap-2 text-xs font-semibold leading-5 text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-leaf" aria-hidden="true" />
                  {task.claimant ? `${task.claimant.name} · ${status.description}` : status.description}
                </p>
              </div>
            </div>

            {task.status === 'done' && (
              <div className="mt-5 flex items-center gap-3 border-2 border-dashed border-leaf/35 bg-sage/20 px-4 py-3 text-xs text-pine">
                <PixelIcon name="check" size={16} className="shrink-0 text-leaf" />
                这张委托已经完成，善意顺利送达。
              </div>
            )}

            {task.status === 'claimed' && (
              <div className="mt-5 flex items-start gap-3 border border-leaf/25 bg-sage/20 px-4 py-3 text-xs leading-5 text-pine">
                <PixelIcon name="heart" size={15} className="mt-0.5 shrink-0 text-leaf" />
                <span>
                  {claimedByMe
                    ? '你已认领这张委托，记得和对方约好时间地点。'
                    : '已经有人认领，正在交接中。下次手快一点！'}
                </span>
              </div>
            )}
          </div>

          {task.status === 'open' && (
            <div className="sticky bottom-0 z-10 border-t-2 border-dashed border-wood-deep/20 bg-paper/95 px-5 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 backdrop-blur-sm sm:px-8 sm:pb-5">
              <button
                type="button"
                onClick={() => onClaim(task)}
                className="pixel-btn pixel-btn-primary h-12 w-full text-sm"
              >
                <PixelIcon name="heart" size={15} />
                我要认领这张委托
                <PixelIcon name="arrow" size={14} />
              </button>
              <p className="mt-2.5 text-center text-[10px] text-ink-soft/55">
                认领后请主动联系对方，友好沟通，量力而行。
              </p>
            </div>
          )}
        </>
      )}
    </Modal>
  )
}
