import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Pasteboard() {
  return (
    <div className="grid w-full gap-10">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">Midjourney Prompt</Label>
        <Textarea placeholder="Type your message here." rows={4} id="message" />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">Midjourney Prompt</Label>
        <Textarea placeholder="Type your message here." rows={4} id="message" />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">Midjourney Prompt</Label>
        <Textarea placeholder="Type your message here." rows={4} id="message" />
      </div>
    </div>
  )
}
