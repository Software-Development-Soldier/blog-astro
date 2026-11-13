import { Badge } from "@/components/ui/badge"

export interface TagLink {
  label: string
  href: string
}

export function TagBadges({ tags }: { tags: TagLink[] }) {
  if (tags.length === 0) return null

  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li key={tag.href}>
          <Badge asChild variant="secondary">
            <a href={tag.href}>{tag.label}</a>
          </Badge>
        </li>
      ))}
    </ul>
  )
}
