export default function LibraryPage({ params }: { params: { libraryId: string } }) {
    return <div>My Post: {params.libraryId}</div>
  }