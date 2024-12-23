import { createLazyFileRoute } from '@tanstack/react-router'
import Pasteboard from '../pages/pasteboard/index'
export const Route = createLazyFileRoute('/parseboard')({
  component: Pasteboard,
})
