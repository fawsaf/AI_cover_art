import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Heart, ListMusic, Mic2, MonitorSpeaker, Pause, PlayIcon, Repeat, Shuffle, SkipBack, SkipForward, Volume2 } from 'lucide-react'
import Image from "next/image"

export function Player() {
  return (
    <div className="h-24 bg-neutral-900 border-t border-neutral-800 p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="/placeholder.svg?height=56&width=56"
          alt="Now playing"
          width={56}
          height={56}
        />
        <div>
          <div className="font-medium">Slow Chemical</div>
          <div className="text-sm text-neutral-400">Finger Eleven</div>
        </div>
        <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-col items-center gap-2 max-w-xl w-full">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
            <Shuffle className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button size="icon" className="rounded-full bg-white text-black hover:bg-white/90">
            <PlayIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
            <SkipForward className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
            <Repeat className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2 w-full">
          <div className="text-xs text-neutral-400">2:47</div>
          <Slider
            defaultValue={[33]}
            max={100}
            step={1}
            className="w-full"
          />
          <div className="text-xs text-neutral-400">3:18</div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
          <Mic2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
          <ListMusic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
          <MonitorSpeaker className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2">
          <Volume2 className="h-4 w-4" />
          <Slider
            defaultValue={[60]}
            max={100}
            step={1}
            className="w-20"
          />
        </div>
      </div>
    </div>
  )
}

