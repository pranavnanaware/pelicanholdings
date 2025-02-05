import Image from "next/image"
import { Card } from "@/components/ui/card"

interface PersonInfoProps {
  name: string
  role: string
  bio: string
  imageUrl: string
}

export default function PersonInfo({ name, role, bio, imageUrl }: PersonInfoProps) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-2/3 p-6">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-lg text-muted-foreground mb-4">{role}</p>
          <p className="text-gray-700 dark:text-gray-300">{bio}</p>
        </div>
      </div>
    </Card>
  )
}

