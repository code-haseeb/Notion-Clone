"use client";
import { useState } from "react";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";

import { useCoverImage } from "@/hooks/use-cover-image";
import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

export const CoverImageModal = () => {
  const params = useParams();
  const update = useMutation(api.documents.update);
  const coverImage = useCoverImage();
  const edgeStore = useEdgeStore();
};
