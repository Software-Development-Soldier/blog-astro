import { Button } from "@/components/ui/button"

interface NavLinkProps {
  href: string
  label: string
  variant?: "ghost" | "secondary" | "outline"
  current?: boolean
  external?: boolean
  className?: string
}

export function NavLink({
  href,
  label,
  variant = "ghost",
  current = false,
  external = false,
  className,
}: NavLinkProps) {
  return (
    <Button asChild variant={variant} size="sm" className={className}>
      <a
        href={href}
        aria-current={current ? "page" : undefined}
        {...(external ? { target: "_blank", rel: "noopener" } : {})}
      >
        {label}
      </a>
    </Button>
  )
}
