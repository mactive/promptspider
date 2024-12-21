import { createLazyFileRoute } from '@tanstack/react-router'
import App from '../pages/index/App'
export const Route = createLazyFileRoute('/')({
  component: App,
})