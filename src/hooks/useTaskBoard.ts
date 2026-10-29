import { useEffect, useRef, useState } from 'react'
import { CURRENT_USER, INITIAL_TASKS } from '../data/tasks'
import { CATEGORY_KEYS } from '../types'
import type { Person, Task, TaskDraft, TaskStatus } from '../types'

const STORAGE_KEY = 'njtu-board.tasks.v1'

export interface TaskActionResult {
  ok: boolean
  message: string
}

const AVATAR_KEYS: Person['avatar'][] = ['chestnut', 'sprout', 'pear', 'peach', 'cloud', 'bean']
const STATUS_KEYS: TaskStatus[] = ['open', 'claimed', 'done']

function isPerson(value: unknown): value is Person {
  if (!value || typeof value !== 'object') return false
  const candidate = value as Record<string, unknown>
  return (
    typeof candidate.id === 'string' &&
    typeof candidate.name === 'string' &&
    typeof candidate.avatar === 'string' &&
    AVATAR_KEYS.includes(candidate.avatar as Person['avatar'])
  )
}

function isTask(value: unknown): value is Task {
  if (!value || typeof value !== 'object') return false
  const candidate = value as Record<string, unknown>

  return (
    typeof candidate.id === 'string' &&
    typeof candidate.title === 'string' &&
    typeof candidate.description === 'string' &&
    typeof candidate.createdAt === 'string' &&
    typeof candidate.location === 'string' &&
    (candidate.reward === undefined || typeof candidate.reward === 'string') &&
    CATEGORY_KEYS.includes(candidate.category as Task['category']) &&
    STATUS_KEYS.includes(candidate.status as TaskStatus) &&
    isPerson(candidate.author) &&
    (candidate.claimant === undefined || isPerson(candidate.claimant))
  )
}

function loadTasks(): Task[] {
  if (typeof window === 'undefined') return INITIAL_TASKS

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) return INITIAL_TASKS

    const parsed: unknown = JSON.parse(stored)
    if (Array.isArray(parsed) && parsed.every(isTask)) {
      return parsed
    }

    console.warn('Stored task data was invalid; falling back to demo notices.')
    return INITIAL_TASKS
  } catch (error) {
    console.warn('Could not read saved task data; falling back to demo notices.', error)
    return INITIAL_TASKS
  }
}

/**
 * Single-browser task state for the prototype.
 * The ref mirrors the latest state so rapid repeated actions are guarded immediately.
 */
export function useTaskBoard() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks)
  const tasksRef = useRef(tasks)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    } catch (error) {
      console.warn('Could not save task data to localStorage.', error)
    }
  }, [tasks])

  const commit = (next: Task[]) => {
    tasksRef.current = next
    setTasks(next)
  }

  const claimTask = (taskId: string): TaskActionResult => {
    const current = tasksRef.current
    const task = current.find((item) => item.id === taskId)

    if (!task) return { ok: false, message: '这张告示已经不在公告栏上了。' }
    if (task.status === 'done') return { ok: false, message: '这张委托已经完成啦，不能再认领。' }
    if (task.status === 'claimed' || task.claimant) {
      return { ok: false, message: '手慢一步，这张委托已经被认领啦。' }
    }
    if (task.author.id === CURRENT_USER.id) {
      return { ok: false, message: '这是你自己发布的委托，等同学来认领吧。' }
    }

    commit(
      current.map((item) =>
        item.id === taskId
          ? { ...item, status: 'claimed' as const, claimant: CURRENT_USER }
          : item,
      ),
    )

    return { ok: true, message: '认领成功！去「我的委托」看看，记得主动联系对方。' }
  }

  const completeTask = (taskId: string): TaskActionResult => {
    const current = tasksRef.current
    const task = current.find((item) => item.id === taskId)

    if (!task) return { ok: false, message: '这张告示已经不在公告栏上了。' }
    if (task.status === 'done') return { ok: false, message: '这张委托已经完成啦。' }
    if (task.status !== 'claimed') return { ok: false, message: '还没有人认领这张委托。' }
    if (task.claimant?.id !== CURRENT_USER.id) {
      return { ok: false, message: '只有认领人才能把这张委托标记为完成。' }
    }

    commit(
      current.map((item) =>
        item.id === taskId ? { ...item, status: 'done' as const } : item,
      ),
    )

    return { ok: true, message: '委托完成啦，谢谢你顺手接住这件小事。' }
  }

  const publishTask = (draft: TaskDraft): Task => {
    const newTask: Task = {
      id: crypto.randomUUID?.() ?? `local-${Date.now()}`,
      title: draft.title.trim(),
      description: draft.description.trim(),
      category: draft.category,
      status: 'open',
      createdAt: new Date().toISOString(),
      location: draft.location.trim() || '校内 · 具体再约',
      reward: draft.reward.trim() || undefined,
      author: CURRENT_USER,
    }

    commit([newTask, ...tasksRef.current])
    return newTask
  }

  return { tasks, claimTask, completeTask, publishTask }
}
