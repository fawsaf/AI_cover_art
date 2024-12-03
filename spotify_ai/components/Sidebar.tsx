import { Heart, Library, Plus, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
import Image from "next/image"

export function Sidebar() {
  return (
    <div className="w-64 flex flex-col bg-black border-r border-neutral-800">
      <div className="p-6">
        <Link href="/">
          <Image src="/spotify-logo.svg" alt="Spotify" width={130} height={40} />
        </Link>
      </div>
      <div className="px-3">
        <Button variant="ghost" className="w-full justify-start text-neutral-400 hover:text-white">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
        <Button variant="ghost" className="w-full justify-start text-neutral-400 hover:text-white">
          <Library className="mr-2 h-4 w-4" />
          Your Library
        </Button>
      </div>
      <div className="mt-6 px-3">
        <Button variant="ghost" className="w-full justify-start text-neutral-400 hover:text-white">
          <Plus className="mr-2 h-4 w-4" />
          Create Playlist
        </Button>
        <Button variant="ghost" className="w-full justify-start text-neutral-400 hover:text-white">
          <Heart className="mr-2 h-4 w-4" />
          Liked Songs
        </Button>
      </div>
      <div className="mt-6 px-3">
        <div className="text-sm font-semibold text-neutral-400">PLAYLISTS</div>
        <ScrollArea className="h-[calc(100vh-300px)] pr-4">
          {Array.from({ length: 50 }).map((_, i) => (
            <Button
              key={i}
              variant="ghost"
              className="w-full justify-start text-neutral-400 hover:text-white text-sm font-normal"
            >
              My Playlist #{i + 1}
            </Button>
          ))}
        </ScrollArea>
      </div>
    </div>
  )
}

