// Exemplo básico de TestCard com estilo similar a posts
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestCard({
  title,
  institution,
  course,
  imageUrl,
  authorName,
  authorImage,
  createdAt
}: {
  title: string;
  institution: string;
  course: string;
  imageUrl: string;
  authorName: string;
  authorImage: string;
  createdAt: string | Date;
}) {
  return (
    <Card className="p-4 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={authorImage} />
          <AvatarFallback>{authorName?.[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{authorName}</p>
          <p className="text-sm text-muted-foreground">{new Date(createdAt).toLocaleDateString()}</p>
        </div>
      </div>
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-md" />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">
          {institution} - {course}
        </p>
      </div>
    </Card>
  );
}
