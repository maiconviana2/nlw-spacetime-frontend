import { User } from 'lucide-react'

export default function Signin() {
  return (
    <a
      className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        <User className="h-2 w-2 text-gray-500" />
      </div>
      <p className="max-w-[140px] text-sm leading-snug">
        <span className="underline">Crie sua conta</span> e salve suas memórias
      </p>
    </a>
  )
}
