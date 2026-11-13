import { TagBadges, type TagLink } from "@/components/TagBadges"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface PostCardProps {
  title: string
  href: string
  date: string
  description: string
  tags: TagLink[]
}

export function PostCard({ title, href, date, description, tags }: PostCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <a href={href} className="underline-offset-4 hover:underline">
            {title}
          </a>
        </CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <TagBadges tags={tags} />
      </CardFooter>
    </Card>
  )
}
