import { PixelIcon } from './PixelIcon'

interface PublishFabProps {
  onClick: () => void
}

export function PublishFab({ onClick }: PublishFabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="pixel-btn pixel-btn-primary fixed bottom-[calc(76px+env(safe-area-inset-bottom))] right-4 z-40 h-11 px-4 text-xs md:hidden"
      aria-label="发布委托"
    >
      <PixelIcon name="plus" size={15} />
      发布委托
    </button>
  )
}
