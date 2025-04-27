import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export default function SearchBox() {
  return (
    <div className="w-full p-[2px] rounded-2xl shadow-[0_10px_50px_rgba(74,58,255,0.15)] bg-white">
      <div className="flex items-center rounded-2xl px-4 py-2 bg-white">
        <Input
          type="text"
          placeholder="Ej: Educación"
          className="border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-700 placeholder:text-gray-400"
        />
        <Button
          size="icon"
          className="ml-2 rounded-full bg-[rgb(74,58,255)] hover:bg-primary-hover text-white cursor-pointer"
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
