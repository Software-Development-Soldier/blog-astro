import { MoonIcon, SunIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

// 서버에서 정적으로 렌더링된다. 클릭 동작은 Header.astro의 인라인 스크립트가 붙인다.
// (이 버튼 하나 때문에 React 런타임을 브라우저로 보내지 않기 위함)
export function ThemeToggle() {
  return (
    <Button
      variant="ghost"
      size="icon-sm"
      aria-label="다크 모드 전환"
      data-theme-toggle
    >
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="dark:hidden" />
    </Button>
  )
}
