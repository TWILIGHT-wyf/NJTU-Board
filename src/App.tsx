import { useEffect, useMemo, useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { FilterBar } from './components/FilterBar'
import { TaskGrid } from './components/TaskGrid'
import { EmptyState } from './components/EmptyState'
import { TaskDetail } from './components/TaskDetail'
import { PublishModal } from './components/PublishModal'
import { MyTasksPage } from './components/MyTasksPage'
import { BottomNav } from './components/BottomNav'
import type { NavKey } from './components/BottomNav'
import { PublishFab } from './components/PublishFab'
import { Toast } from './components/Toast'
import type { ToastData } from './components/Toast'
import { Footer } from './components/Footer'
import { PixelIcon } from './components/PixelIcon'
import { useTaskBoard } from './hooks/useTaskBoard'
import { CURRENT_USER } from './data/tasks'
import { CATEGORY_LABELS } from './types'
import type { BoardView, CategoryFilter, MyTaskTab, Task, TaskDraft } from './types'

function App() {
  const { tasks, claimTask, completeTask, publishTask } = useTaskBoard()
  const [view, setView] = useState<BoardView>('home')
  const [myTab, setMyTab] = useState<MyTaskTab>('posted')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<CategoryFilter>('all')
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)
  const [publishOpen, setPublishOpen] = useState(false)
  const [publishOrigin, setPublishOrigin] = useState<BoardView>('home')
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goHome = () => {
    setView('home')
    setSelectedTaskId(null)
    scrollToTop()
  }

  const goMine = () => {
    setView('mine')
    setSelectedTaskId(null)
    scrollToTop()
  }

  const openTask = (task: Task) => {
    setToast(null)
    setSelectedTaskId(task.id)
  }

  const openPublish = () => {
    setToast(null)
    setPublishOrigin(view)
    setPublishOpen(true)
  }

  const handleClaim = (task: Task) => {
    const result = claimTask(task.id)
    if (result.ok) setMyTab('claimed')
    pushToast(result.message)
  }

  const handleComplete = (task: Task) => {
    const result = completeTask(task.id)
    if (result.ok) setMyTab('claimed')
    pushToast(result.message)
  }

  const handlePublish = (draft: TaskDraft) => {
    publishTask(draft)
    setPublishOpen(false)
    setMyTab('posted')
    setQuery('')
    setCategory('all')
    pushToast('新告示贴好了，正等一位热心的南工人路过～')

    if (publishOrigin === 'mine') {
      setView('mine')
      window.setTimeout(scrollToTop, 100)
      return
    }

    setView('home')
    window.setTimeout(() => {
      document.getElementById('notice-board')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 120)
  }

  const handleNavigate = (key: NavKey) => {
    if (key === 'home') {
      goHome()
      return
    }

    if (key === 'mine') {
      goMine()
      return
    }

    pushToast('「个人主页」还在布置，先看看今天的告示吧。')
  }

  return (
    <div className="min-h-dvh">
      <Header
        view={view}
        onHome={goHome}
        onMine={goMine}
        onPublish={openPublish}
        onProfile={() => pushToast('「个人主页」还在布置，先看看今天的告示吧。')}
      />

      <main className="pb-8 md:pb-0">
        {view === 'home' ? (
          <>
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
                <TaskGrid
                  tasks={filteredTasks}
                  currentUserId={CURRENT_USER.id}
                  onOpen={openTask}
                  onClaim={handleClaim}
                  onComplete={handleComplete}
                />
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
          </>
        ) : (
          <MyTasksPage
            tasks={tasks}
            currentUserId={CURRENT_USER.id}
            activeTab={myTab}
            onTabChange={setMyTab}
            onOpen={openTask}
            onClaim={handleClaim}
            onComplete={handleComplete}
            onPublish={openPublish}
            onHome={goHome}
          />
        )}
      </main>

      <Footer />

      <PublishFab onClick={openPublish} />
      <BottomNav activeView={view} onNavigate={handleNavigate} />
      <Toast toast={toast} />

      <TaskDetail
        task={selectedTask}
        currentUserId={CURRENT_USER.id}
        onClose={() => setSelectedTaskId(null)}
        onClaim={handleClaim}
        onComplete={handleComplete}
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
