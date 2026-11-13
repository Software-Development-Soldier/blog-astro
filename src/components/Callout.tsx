import type { ReactNode } from "react"
import { TriangleAlertIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// 글 본문(MDX)에서 쓰는 주의 상자. `not-prose`로 본문 타이포그래피 영향을 받지 않게 한다.
export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Alert className="not-prose my-6">
      <TriangleAlertIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}
