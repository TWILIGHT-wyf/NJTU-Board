import type { TaskStatus } from '../types'

export const STATUS_META: Record<
  TaskStatus,
  { label: string; badgeClass: string; description: string }
> = {
  open: {
    label: '待认领',
    badgeClass: 'border-honey-deep/20 bg-honey/25 text-honey-deep',
    description: '正在等一位顺路的同学',
  },
  claimed: {
    label: '进行中',
    badgeClass: 'border-leaf/25 bg-sage/45 text-pine',
    description: '已经有人接住这张纸条啦',
  },
  done: {
    label: '已完成',
    badgeClass: 'border-wood-deep/15 bg-cream-deep/60 text-wood-deep/80',
    description: '这件小事已经办妥',
  },
}
