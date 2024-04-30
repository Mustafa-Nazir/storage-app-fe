"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react"

export default function LibraryPage({ params }: { params: { libraryId: string } }) {
  const router = useRouter();

  useEffect(() => {
    redirect();
  },[]);

  const redirect = () => {
    const path = `/application/library/${params.libraryId}/announcements`;
    router.push(path);
  }

  return <div></div>
}