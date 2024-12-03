import { Sidebar } from "@/components/Sidebar"
import { Player } from "@/components/Player"
import { MainContent } from "@/components/Main-Content"
import { RightSidebar } from "@/components/Right-Sidebar"

export default function Home() {
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <MainContent />
        <RightSidebar />
      </div>
      <Player />
    </div>
  )
}

