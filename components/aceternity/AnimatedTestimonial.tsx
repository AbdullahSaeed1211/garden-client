"use client";

import Image from "next/image";
import { Meteors } from "@/components/ui/meteors";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatarSrc: string;
  stars?: number;
}

export function AnimatedTestimonial({ quote, author, role, avatarSrc, stars = 5 }: TestimonialProps) {
  return (
    <Card className="relative max-w-xl overflow-hidden rounded-xl border bg-card p-4 md:p-8">
      <CardContent className="p-0">
        <div className="mb-4 flex items-center gap-1">
          {Array.from({ length: stars }).map((_, i) => (
            <StarIcon key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="mb-6 text-base text-muted-foreground md:text-lg">"{quote}"</p>
        <div className="flex items-center gap-4">
          <Image
            src={avatarSrc}
            alt={author}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <div>
            <h3 className="font-medium text-foreground">{author}</h3>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
      <Meteors number={14} />
    </Card>
  );
} 