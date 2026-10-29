import { useEffect, useMemo, useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { FilterBar } from './components/FilterBar'
import { TaskCard } from './components/TaskCard'
import { EmptyState } from './components/EmptyState'
import { TaskDetail } from './components/TaskDetail'
import { PublishModal } from './components/PublishModal'
import { BottomNav } from './components/BottomNav'
import type { NavKey } from './components/BottomNav'
import { PublishFab } from './components/PublishFab'
import { Toast } from './components/Toast'
import type { ToastData } from './components/Toast'
import { Footer } from './components/Footer'
import { PixelIcon } from './components/PixelIcon'
import { CURRENT_USER, INITIAL_TASKS } from './data/tasks'
import { CATEGORY_LABELS } from './types'
import type { CategoryFilter, Task, TaskDraft } from './types'

function App() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<CategoryFilter>('all')
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)
  const [publishOpen, setPublishOpen] = useState(false)
  const [toast, setToast] = useState<ToastData | null>(null)

  useEffect(() => {
    if (!toast) return

    const timer = window.setTimeout(() => {
      setToast((current) => (current?.id === toast.id ? null : current))
    }, 3200)

    return () => window.clearTimeout(timer)
  }, [toast])

  const pushToast = (message: string) => {
    setToast({ id: Date.now(), message })
  }

  const selectedTask = tasks.find((task) => task.id === selectedTaskId) ?? null
  const openCount = tasks.filter((task) => task.status === 'open').length

  const filteredTasks = useMemo(() => {
    const needle = query.trim().toLowerCase()

    return tasks
      .filter((task) => category === 'all' || task.category === category)
      .filter((task) => {
        if (!needle) return true
        return [
          task.title,
          task.description,
          task.location,
          task.reward ?? '',
          task.author.name,
          CATEGORY_LABELS[task.category],
        ]
          .join(' ')
          .toLowerCase()
          .includes(needle)
      })
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  }, [tasks, category, query])

  const hasFilters = query.trim().length > 0 || category !== 'all'

  const clearFilters = () => {
    setQuery('')
    setCategory('all')
  }

  const openTask = (task: Task) => {
    setToast(null)
    setSelectedTaskId(task.id)
  }

  const openPublish = () => {
    setToast(null)
    setPublishOpen(true)
  }

  const handleClaim = (task: Task) => {
    if (task.status !== 'open') return

    setTasks((current) =>
      current.map((item) =>
        item.id === task.id
          ? { ...item, status: 'claimed' as const, claimant: CURRENT_USER }
          : item,
      ),
    )
    pushToast('认领成功！记得主动联系对方，约个方便的时间。')
  }

  const handlePublish = (draft: TaskDraft) => {
    const newTask: Task = {
      id: crypto.randomUUID?.() ?? `local-${Date.now()}`,
      title: draft.title,
      description: draft.description,
      category: draft.category,
      status: 'open',
      createdAt: new Date().toISOString(),
      location: draft.location,
      reward: draft.reward || undefined,
      author: CURRENT_USER,
    }

    setTasks((current) => [newTask, ...current])
    setPublishOpen(false)
    setQuery('')
    setCategory('all')
    pushToast('新告示贴好了，正等一位热心的南工人路过～')
    window.setTimeout(() => {
      document.getElementById('notice-board')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 120)
  }

  const handleNavigate = (key: NavKey) => {
    if (key === 'home') {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    pushToast(
      key === 'mine'
        ? '「我的委托」还在钉木板，下一版就来～'
        : '「个人主页」还在布置，先看看今天的告示吧。',
    )
  }

  return (
    <div className="min-h-dvh">
      <Header
        onPublish={openPublish}
        onProfile={() => pushToast('「个人主页」还在布置，先看看今天的告示吧。')}
      />

      <main className="pb-8 md:pb-0">
        <Hero openCount={openCount} />
        <FilterBar
          query={query}
          category={category}
          onQueryChange={setQuery}
          onCategoryChange={setCategory}
        />

        <section
          id="notice-board"
          aria-labelledby="board-title"
          className="mx-auto mt-6 max-w-6xl scroll-mt-28 px-4 sm:mt-10 sm:px-6"
        >
          <div className="mb-4 flex items-end justify-between gap-4 sm:mb-5">
            <div className="flex items-center gap-3">
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center border-2 border-wood-deep bg-honey text-wood-deep shadow-[2px_2px_0_0_#5b3e2b]">
                <PixelIcon name="pin" size={20} />
                <span
                  className="absolute -right-1 -top-1 h-3 w-3 border border-paper bg-njtech"
                  aria-hidden="true"
                />
              </span>
              <div>
                <p className="font-pixel text-[8px] tracking-[0.18em] text-leaf/90">
                  JIANGPU CAMPUS · TODAY
                </p>
                <h2
                  id="board-title"
                  className="mt-0.5 font-display text-[1.7rem] leading-tight text-ink text-pixel-shadow sm:text-[1.9rem]"
                >
                  今日告示
                </h2>
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-end gap-1.5 pb-1 text-[11px] text-ink-soft/60">
              <div className="flex items-center gap-1.5">
                <span
                  className="font-pixel text-sm leading-none text-pine"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {filteredTasks.length}
                </span>
                张纸条
              </div>
              <span className="inline-flex items-center gap-1 border border-njtech/25 bg-paper/50 px-1.5 py-0.5 text-[8px] leading-none tracking-[0.08em] text-njtech-deep/70">
                <span className="h-1 w-1 bg-njtech" aria-hidden="true" />
                示例委托
              </span>
            </div>
          </div>

          {filteredTasks.length > 0 ? (
            <div className="grid items-stretch gap-5 pt-2 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
              {filteredTasks.map((task, index) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  index={index}
                  onOpen={openTask}
                  onClaim={handleClaim}
                />
              ))}
            </div>
          ) : (
            <EmptyState hasFilters={hasFilters} onClear={clearFilters} />
          )}

          <div className="mt-9 flex items-center justify-center gap-3 text-[10px] text-ink-soft/40">
            <span className="h-px w-12 bg-wood-deep/20" aria-hidden="true" />
            <PixelIcon name="leaf" size={12} className="text-leaf/50" />
            江浦的日常，未完待续
            <span className="h-px w-12 bg-wood-deep/20" aria-hidden="true" />
          </div>
          <p className="mt-3 text-center text-[10px] tracking-wide text-ink-soft/35">
            以上委托与人物均为演示内容，非真实用户发布
          </p>
        </section>
      </main>

      <Footer />

      <PublishFab onClick={openPublish} />
      <BottomNav onNavigate={handleNavigate} />
      <Toast toast={toast} />

      <TaskDetail
        task={selectedTask}
        onClose={() => setSelectedTaskId(null)}
        onClaim={handleClaim}
      />
      <PublishModal
        open={publishOpen}
        onClose={() => setPublishOpen(false)}
        onPublish={handlePublish}
      />
    </div>
  )
}

export default App
