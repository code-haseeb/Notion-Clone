"use client";

import { useMutation } from "convex/react";
import { useParams } from "next/navigation";
import { ImageIcon, X } from "lucide-react";
import { Image } from "next/image";

import { useEdgestore } from "@/lib/edgestore";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { useCoverImage } from "@/hooks/use-cover-image";
import { useEdgestore } from "react";

interface CoverImageProps {
  url?: string;
  preview?: boolean;
}

export const Cover = ({ url, preview }: CoverImageProps) => {
  const edgeStore = useEdgestore;
};
