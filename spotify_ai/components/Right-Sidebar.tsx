import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"

export function RightSidebar() {
  return (
    <div className="w-96 bg-black border-l border-neutral-800 p-6">
      <h2 className="text-2xl font-bold mb-4">Feels</h2>
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="space-y-4">
          <Card className="p-4 bg-neutral-900 hover:bg-neutral-800">
            <div className="aspect-square relative mb-4">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Album cover"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold">Slow Chemical</h3>
            <p className="text-neutral-400">Finger Eleven</p>
          </Card>
        </div>
      </ScrollArea>
    </div>
  )
}

