"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Camera, Clock, MoreHorizontal, Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function MainContent() {
  const [coverImage, setCoverImage] = useState("/placeholder.svg?height=300&width=300")
  const [aiPrompt, setAiPrompt] = useState("")

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setCoverImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAiGenerate = () => {
    // This is where you would integrate with an AI image generation API
    // For now, we'll just use a placeholder image
    setCoverImage(`/placeholder.svg?height=300&width=300&text=${encodeURIComponent(aiPrompt)}`)
  }

  return (
    <div className="flex-1 bg-gradient-to-b from-neutral-900 to-black">
      <ScrollArea className="h-full">
        <div className="p-6">
          <div className="flex items-start gap-6">
            <div className="relative group">
              <Image
                src={coverImage}
                alt="Playlist cover"
                width={300}
                height={300}
                className="shadow-lg"
              />
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="secondary"
                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/50 hover:bg-black/60"
                  >
                    <Camera className="h-8 w-8" />
                    <span className="sr-only">Change cover</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Change playlist cover</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="aspect-square w-full max-w-sm mx-auto relative">
                      <Image
                        src={coverImage}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Backend code */}
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    <div className="space-y-2">
                      <Input
                        type="text"
                        placeholder="Enter AI prompt for cover art"
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                      />
                      <Button onClick={handleAiGenerate} className="w-full">
                        Generate AI Cover
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex-1 space-y-4">
              <div className="text-sm uppercase font-semibold">Playlist</div>
              <h1 className="text-8xl font-bold">Eddie trägt ein Bild zum Zeigen.
              </h1>
              <div className="text-sm text-neutral-400">
                Created by AsifKhan • 269 songs, about 17 hr
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <Button size="lg" className="rounded-full bg-green-500 hover:bg-green-400">
              <Play className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-6 w-6" />
            </Button>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 px-4 py-2 text-neutral-400 border-b border-neutral-800">
              <div className="w-8">#</div>
              <div>Title</div>
              <div>Album</div>
              <div><Clock className="h-4 w-4" /></div>
            </div>
            <div className="divide-y divide-neutral-800">
              {tracks.map((track, i) => (
                <Card key={i} className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 px-4 py-2 bg-transparent hover:bg-white/5">
                  <div className="w-8 text-neutral-400">{i + 1}</div>
                  <div className="flex items-center gap-3">
                    <Image
                      src={track.image}
                      alt={track.title}
                      width={40}
                      height={40}
                      className="rounded"
                    />
                    <div>
                      <div className="font-medium text-neutral-400">{track.title}</div>
                      <div className="text-sm text-neutral-400">{track.artist}</div>
                    </div>
                  </div>
                  <div className="text-neutral-400 self-center">{track.album}</div>
                  <div className="text-neutral-400 self-center">{track.duration}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

const tracks = [
  {
    title: "Only Wanna Be With You",
    artist: "Post Malone",
    album: "Only Wanna Be With You",
    duration: "4:01",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    title: "INTERMISSION: fLoWer",
    artist: "ZAYN",
    album: "Mind Of Mine (Deluxe Edition)",
    duration: "1:44",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    title: "Cocaine",
    artist: "Pink Sweat$",
    album: "Volume 1",
    duration: "2:11",
    image: "/placeholder.svg?height=40&width=40",
  },
]
