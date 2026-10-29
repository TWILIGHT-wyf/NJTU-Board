export type Category = 'help' | 'partner' | 'borrow' | 'idle' | 'other'
export type CategoryFilter = 'all' | Category
export type TaskStatus = 'open' | 'claimed' | 'done'
export type AvatarVariant = 'chestnut' | 'sprout' | 'pear' | 'peach' | 'cloud' | 'bean'
export type BoardView = 'home' | 'mine'
export type MyTaskTab = 'posted' | 'claimed'

export interface Person {
  id: string
  name: string
  avatar: AvatarVariant
}

export interface Task {
  id: string
  title: string
  description: string
  category: Category
  status: TaskStatus
  createdAt: string
  location: string
  reward?: string
  author: Person
  claimant?: Person
}

export interface TaskDraft {
  title: string
  description: string
  category: Category
  reward: string
  location: string
}

export const CATEGORY_KEYS: Category[] = ['help', 'partner', 'borrow', 'idle', 'other']

export const CATEGORY_LABELS: Record<CategoryFilter, string> = {
  all: '全部',
  help: '求助',
  partner: '找搭子',
  borrow: '借物',
  idle: '闲置',
  other: '其他',
}
