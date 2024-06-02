export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-4 h-4 border-4 border-gray-200 border-t-4 border-t-gray-600 rounded-full animate-spin" />
    </div>
  );
}
