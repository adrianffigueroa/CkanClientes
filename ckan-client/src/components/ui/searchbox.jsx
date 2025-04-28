import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useState } from 'react'

export default function SearchBox({ searchTerm, setSearchTerm }) {
  const [inputValue, setInputValue] = useState(searchTerm || '')

  const handleSubmit = () => {
    setSearchTerm(inputValue.trim())
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="w-full p-[2px] rounded-2xl shadow-[0_20px_80px_rgba(74,58,255,0.08)] bg-white">
      <div className="flex items-center rounded-2xl px-4 py-2 bg-white">
        <Input
          type="text"
          placeholder="Ej: Educación"
          className="border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-700 placeholder:text-gray-400"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          size="icon"
          className="ml-2 rounded-full bg-[rgb(74,58,255)] hover:bg-primary-hover text-white cursor-pointer"
          onClick={handleSubmit}
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
