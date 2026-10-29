import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { Modal } from './Modal'
import { PixelIcon } from './PixelIcon'
import { CATEGORY_ICON } from '../data/tasks'
import { CATEGORY_KEYS, CATEGORY_LABELS } from '../types'
import type { Category, TaskDraft } from '../types'

const FIELD_CLASS =
  'w-full rounded-[2px] border-2 border-wood-deep/20 bg-cream/35 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-soft/45 transition-colors hover:border-wood-deep/35 focus:border-pine/55 focus:bg-paper focus:outline-none focus-visible:outline-none'

interface PublishModalProps {
  open: boolean
  onClose: () => void
  onPublish: (draft: TaskDraft) => void
}

interface FormState {
  title: string
  description: string
  category: Category
  reward: string
  location: string
}

interface FormErrors {
  title?: string
  description?: string
}

const EMPTY_FORM: FormState = {
  title: '',
  description: '',
  category: 'help',
  reward: '',
  location: '',
}

export function PublishModal({ open, onClose, onPublish }: PublishModalProps) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [errors, setErrors] = useState<FormErrors>({})

  useEffect(() => {
    if (open) {
      setForm(EMPTY_FORM)
      setErrors({})
    }
  }, [open])

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }))
    if (key === 'title' || key === 'description') {
      setErrors((current) => ({ ...current, [key]: undefined }))
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: FormErrors = {}

    if (form.title.trim().length < 2) {
      nextErrors.title = '给委托起一个清楚的小标题吧（至少 2 个字）'
    }
    if (form.description.trim().length < 5) {
      nextErrors.description = '再多说一点点，方便同学判断能不能帮上忙'
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidId = nextErrors.title ? 'task-title' : 'task-description'
      window.requestAnimationFrame(() => {
        document.getElementById(firstInvalidId)?.focus()
      })
      return
    }

    onPublish({
      title: form.title.trim(),
      description: form.description.trim(),
      category: form.category,
      reward: form.reward.trim(),
      location: form.location.trim() || '校内 · 具体再约',
    })
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      labelledBy="publish-title"
      panelClassName="sm:max-w-[660px]"
    >
      <div className="sticky top-0 z-20 flex items-start justify-between gap-4 border-b-2 border-dashed border-wood-deep/20 bg-cream/95 px-5 py-4 backdrop-blur-sm sm:px-8">
        <div>
          <p className="flex items-center gap-1.5 font-pixel text-[8px] tracking-[0.16em] text-leaf">
            <PixelIcon name="pin" size={11} />
            NEW NOTICE
          </p>
          <h2
            id="publish-title"
            className="mt-1.5 font-display text-2xl leading-tight text-ink sm:text-[1.75rem]"
          >
            贴一张新委托
          </h2>
          <p className="mt-1.5 text-[11px] leading-5 text-ink-soft/70 sm:text-xs">
            从明德楼到浦江苑，小事也可以贴上来，南工人顺路就帮你办了。
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-wood-deep/20 bg-paper text-ink-soft transition-colors hover:border-wood-deep/50 hover:text-pine"
          aria-label="关闭发布表单"
        >
          <PixelIcon name="close" size={14} />
        </button>
      </div>

      <form onSubmit={handleSubmit} noValidate className="px-5 pb-7 pt-5 sm:px-8 sm:pt-6">
        <div>
          <div className="flex items-end justify-between gap-3">
            <label htmlFor="task-title" className="text-xs font-bold text-ink">
              委托标题
              <span className="ml-1 text-clay" aria-hidden="true">
                *
              </span>
            </label>
            <span className="font-pixel text-[7px] text-ink-soft/35">{form.title.length}/32</span>
          </div>
          <input
            id="task-title"
            value={form.title}
            onChange={(event) => update('title', event.target.value.slice(0, 32))}
            maxLength={32}
            required
            placeholder="例：明德楼 301 求带个充电器"
            className={`mt-2 ${FIELD_CLASS} ${errors.title ? 'border-clay/60' : ''}`}
            aria-invalid={Boolean(errors.title)}
            aria-describedby={errors.title ? 'title-error' : undefined}
          />
          {errors.title && (
            <p id="title-error" className="mt-1.5 flex items-center gap-1 text-[11px] text-clay-deep">
              <span className="h-1 w-1 shrink-0 bg-clay" aria-hidden="true" />
              {errors.title}
            </p>
          )}
        </div>

        <div className="mt-4">
          <div className="flex items-end justify-between gap-3">
            <label htmlFor="task-description" className="text-xs font-bold text-ink">
              具体说说
              <span className="ml-1 text-clay" aria-hidden="true">
                *
              </span>
            </label>
            <span className="font-pixel text-[7px] text-ink-soft/35">
              {form.description.length}/160
            </span>
          </div>
          <textarea
            id="task-description"
            value={form.description}
            onChange={(event) => update('description', event.target.value.slice(0, 160))}
            maxLength={160}
            rows={4}
            required
            placeholder="时间、地点、需要帮什么忙，写得清楚一点更容易被认领～"
            className={`mt-2 resize-none leading-6 ${FIELD_CLASS} ${errors.description ? 'border-clay/60' : ''}`}
            aria-invalid={Boolean(errors.description)}
            aria-describedby={errors.description ? 'description-error' : undefined}
          />
          {errors.description && (
            <p
              id="description-error"
              className="mt-1.5 flex items-center gap-1 text-[11px] text-clay-deep"
            >
              <span className="h-1 w-1 shrink-0 bg-clay" aria-hidden="true" />
              {errors.description}
            </p>
          )}
        </div>

        <fieldset className="mt-4">
          <legend className="text-xs font-bold text-ink">归到哪一类</legend>
          <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-5">
            {CATEGORY_KEYS.map((category) => {
              const active = form.category === category
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => update('category', category)}
                  aria-pressed={active}
                  className={`flex h-10 items-center justify-center gap-1.5 border-2 text-xs font-bold transition-colors ${
                    active
                      ? 'border-wood-deep bg-pine text-paper shadow-[2px_2px_0_0_#5b3e2b]'
                      : 'border-wood-deep/20 bg-paper text-ink-soft hover:border-wood-deep/40 hover:bg-sage/30'
                  }`}
                >
                  <PixelIcon
                    name={CATEGORY_ICON[category]}
                    size={13}
                    className={active ? 'text-honey' : 'text-leaf/80'}
                  />
                  {CATEGORY_LABELS[category]}
                </button>
              )
            })}
          </div>
        </fieldset>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="task-reward" className="text-xs font-bold text-ink">
              答谢 <span className="font-normal text-ink-soft/45">（可选）</span>
            </label>
            <input
              id="task-reward"
              value={form.reward}
              onChange={(event) => update('reward', event.target.value.slice(0, 24))}
              maxLength={24}
              placeholder="一杯奶茶 / 两个橘子 / 口头感谢"
              className={`mt-2 ${FIELD_CLASS}`}
            />
          </div>
          <div>
            <label htmlFor="task-location" className="text-xs font-bold text-ink">
              地点 <span className="font-normal text-ink-soft/45">（可选）</span>
            </label>
            <input
              id="task-location"
              value={form.location}
              onChange={(event) => update('location', event.target.value.slice(0, 24))}
              maxLength={24}
              placeholder="例：浦江苑 / 厚学楼"
              className={`mt-2 ${FIELD_CLASS}`}
            />
          </div>
        </div>

        <div className="mt-5 border border-dashed border-leaf/30 bg-sage/20 px-3.5 py-3 text-[11px] leading-5 text-pine/80">
          <span className="font-bold text-pine">贴之前的小约定：</span>
          留下真实需要，不发布广告；完成委托后记得说一声谢谢。
        </div>

        <div className="sticky bottom-0 -mx-5 mt-5 border-t-2 border-dashed border-wood-deep/20 bg-paper/95 px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-4 backdrop-blur-sm sm:-mx-8 sm:px-8 sm:pb-1">
          <button type="submit" className="pixel-btn pixel-btn-primary h-12 w-full text-sm">
            <PixelIcon name="pin" size={15} />
            把委托贴上公告栏
            <PixelIcon name="arrow" size={14} />
          </button>
        </div>
      </form>
    </Modal>
  )
}
