import { TaskCard } from './TaskCard'
import type { Task } from '../types'

interface TaskGridProps {
  tasks: Task[]
  currentUserId: string
  onOpen: (task: Task) => void
  onClaim: (task: Task) => void
  onComplete: (task: Task) => void
}

export function TaskGrid({ tasks, currentUserId, onOpen, onClaim, onComplete }: TaskGridProps) {
  return (
    <div className="grid items-stretch gap-5 pt-2 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
      {tasks.map((task, index) => (
        <TaskCard
          key={task.id}
          task={task}
          index={index}
          currentUserId={currentUserId}
          onOpen={onOpen}
          onClaim={onClaim}
          onComplete={onComplete}
        />
      ))}
    </div>
  )
}
