import { PixelIcon } from './PixelIcon'

export interface ToastData {
  id: number
  message: string
}

interface ToastProps {
  toast: ToastData | null
}

export function Toast({ toast }: ToastProps) {
  if (!toast) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 top-[82px] z-[45] flex justify-center px-4 sm:top-[98px]">
      <div
        key={toast.id}
        role="status"
        aria-live="polite"
        className="toast-pop flex max-w-[min(92vw,420px)] items-center gap-2.5 border-2 border-wood-deep bg-pine px-4 py-2.5 text-xs font-medium leading-5 text-paper shadow-[4px_4px_0_0_#5b3e2b]"
      >
        <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-honey text-wood-deep">
          <PixelIcon name="check" size={12} />
        </span>
        <span>{toast.message}</span>
      </div>
    </div>
  )
}
