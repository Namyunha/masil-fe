export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="h-20 w-20 animate-spin rounded-full border-4 border-stroke_grey border-t-stroke_focused" />
    </div>
  );
}
