export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center space-y-2 h-full">
      <div className="inline-block border-[3px] border-slate-200 rounded-full border-t-slate-400 animate-spin size-12"></div>
      <span>Loading...</span>
    </div>
  );
}
