import { Avatar } from './Avatar'
import { PixelIcon } from './PixelIcon'
import { CATEGORY_BADGE, CARD_TILTS, TAPE_STYLES } from '../lib/categories'
import { formatRelativeTime } from '../lib/time'
import { CATEGORY_LABELS } from '../types'
import type { Task } from '../types'
import { CATEGORY_ICON } from '../data/tasks'
import { STATUS_META } from '../lib/status'

interface TaskCardProps {
  task: Task
  index: number
  currentUserId: string
  onOpen: (task: Task) => void
  onClaim: (task: Task) => void
  onComplete: (task: Task) => void
}

export function TaskCard({
  task,
  index,
  currentUserId,
  onOpen,
  onClaim,
  onComplete,
}: TaskCardProps) {
  const status = STATUS_META[task.status]
  const isOwn = task.author.id === currentUserId
  const isClaimedByMe = task.claimant?.id === currentUserId
  const canClaim = task.status === 'open' && !isOwn
  const canComplete = task.status === 'claimed' && isClaimedByMe
  const seed = [...task.id].reduce((sum, character) => sum + character.charCodeAt(0), 0)
  const variant = seed % 4
  const tapeStyle = TAPE_STYLES[seed % TAPE_STYLES.length]
  const tilt = CARD_TILTS[index % CARD_TILTS.length]
  const isPinned = variant === 1
  const useBlueTape = variant === 2
  const useHandwrittenTitle = variant === 2
  const showCampusStamp = variant === 1 || variant === 3

  const tapePosition =
    variant === 2 ? 'left-1/2 -translate-x-1/2 -rotate-1' : variant === 3 ? 'right-7 rotate-2' : 'left-7 -rotate-2'
  const tapeColor = useBlueTape
    ? 'border-njtech/20 bg-[#cfebf7]/90'
    : tapeStyle

  return (
    <article
      className={`notice-card group relative flex h-full flex-col border-2 border-wood-deep/20 bg-paper p-5 pt-6 transition-transform duration-200 hover:-translate-y-1 ${tilt}`}
    >
      {isPinned ? (
        <span
          className="absolute left-1/2 top-[-8px] z-20 flex -translate-x-1/2 flex-col items-center"
          aria-hidden="true"
        >
          <span className="h-3.5 w-3.5 border-2 border-wood-deep bg-clay shadow-[1px_1px_0_#5b3e2b]" />
          <span className="h-2 w-0.5 bg-wood-deep/55" />
        </span>
      ) : (
        <span
          className={`masking-tape z-20 ${tapePosition} ${tapeColor}`}
          aria-hidden="true"
        />
      )}

      <button
        type="button"
        onClick={() => onOpen(task)}
        className="absolute inset-0 z-10 rounded-[1px] focus-visible:-outline-offset-2"
        aria-label={`查看委托：${task.title}`}
      />

      <div className="pointer-events-none relative flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 border px-2 py-1 text-[11px] font-bold tracking-wide ${CATEGORY_BADGE[task.category]}`}
          >
            <PixelIcon name={CATEGORY_ICON[task.category]} size={12} />
            {CATEGORY_LABELS[task.category]}
          </span>
          {showCampusStamp && (
            <span
              className="flex h-[18px] w-[18px] rotate-[-3deg] items-center justify-center border border-njtech/40 bg-njtech-soft text-njtech-deep shadow-[1px_1px_0_rgba(0,99,139,0.12)]"
              aria-hidden="true"
            >
              <PixelIcon name={variant === 1 ? 'building' : 'leaf'} size={9} />
            </span>
          )}
        </div>
        <span
          className={`inline-flex items-center gap-1.5 border px-2 py-1 text-[11px] font-bold tracking-wide ${status.badgeClass}`}
        >
          <span className="h-1.5 w-1.5 bg-current" aria-hidden="true" />
          {status.label}
        </span>
      </div>

      <div className="pointer-events-none mt-4">
        <h3
          className={`text-ink transition-colors group-hover:text-pine ${
            useHandwrittenTitle
              ? 'font-display text-[1.2rem] leading-[1.5] tracking-[0.01em]'
              : 'text-[1.08rem] font-bold leading-[1.55] tracking-[0.01em] sm:text-[1.14rem]'
          }`}
        >
          {task.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-ink-soft/85">
          {task.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-ink-soft/65">
          <span className="inline-flex items-center gap-1.5">
            <PixelIcon name="clock" size={12} className="text-wood/60" />
            <time dateTime={task.createdAt}>{formatRelativeTime(task.createdAt)}</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <PixelIcon name="location" size={12} className="text-wood/60" />
            {task.location}
          </span>
        </div>

        {task.reward && (
          <div className="mt-4 flex items-center gap-2 border border-dashed border-honey-deep/20 bg-honey/10 px-2.5 py-2 text-xs text-honey-deep">
            <PixelIcon name="sparkle" size={12} className="shrink-0" />
            <span className="font-bold">答谢</span>
            <span className="text-ink-soft/85">{task.reward}</span>
          </div>
        )}
      </div>

      <div className="mt-auto pt-4">
        <div className="mb-3 border-t border-dashed border-wood-deep/15" aria-hidden="true" />
        <div className="pointer-events-none relative z-20 flex items-center gap-2.5">
          <Avatar variant={task.author.avatar} size={27} className="rounded-[1px]" />
          <div className="min-w-0">
            <p className="truncate text-[11px] font-bold text-ink/90">{task.author.name}</p>
            <p className="text-[10px] tracking-wide text-ink-soft/50">
              {task.status === 'done'
                ? '这件事已经办妥'
                : isOwn
                  ? '你贴的告示'
                  : isClaimedByMe
                    ? '你认领的委托'
                    : '贴的告示'}
            </p>
          </div>

          <div className="ml-auto shrink-0 pointer-events-auto">
            {canClaim ? (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  onClaim(task)
                }}
                className="pixel-btn pixel-btn-primary h-8 px-3 text-xs"
                aria-label={`认领委托：${task.title}`}
              >
                认领
                <PixelIcon name="arrow" size={12} />
              </button>
            ) : canComplete ? (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  onComplete(task)
                }}
                className="pixel-btn pixel-btn-honey h-8 px-3 text-xs"
                aria-label={`完成委托：${task.title}`}
              >
                完成
                <PixelIcon name="check" size={12} />
              </button>
            ) : task.status === 'open' && isOwn ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-njtech-deep/65">
                <PixelIcon name="clipboard" size={11} />
                我发布的
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-ink-soft/55">
                {task.status === 'done' ? (
                  <>
                    <PixelIcon name="check" size={11} className="text-leaf" />
                    已完成
                  </>
                ) : (
                  <>
                    <span className="h-1.5 w-1.5 bg-leaf" aria-hidden="true" />
                    进行中
                  </>
                )}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
