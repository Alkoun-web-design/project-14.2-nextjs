export default function Loading() {
  return (
    <>
      <div className="fixed left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-white dark:bg-dark">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
      </div>
    </>
  );
};