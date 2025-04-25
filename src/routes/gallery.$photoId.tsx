import { createFileRoute } from '@tanstack/react-router'
import { NotFound } from '~/components/NotFound'
import { photographyData } from '~/data/gallery'

export const Route = createFileRoute('/gallery/$photoId')({
  component: PhotoComponent,
  notFoundComponent: () => {
    return <NotFound>Photo not found</NotFound>
  },
})

function PhotoComponent() {
  return null; // The photo display is handled by the Gallery component
}