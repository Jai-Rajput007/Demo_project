import { BackgroundLines } from '@/components/ui/background-lines';

export default function DashboardPage() {
  return (
    <BackgroundLines>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                        <h1 className="text-4xl md:text-7xl font-bold text-black dark:text-white py-4">
          Welcome to Ratatouille !!
        </h1>
        <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
          Discover, create, and share amazing recipes from around the world.
        </p>
      </div>
    </BackgroundLines>
  );
}

