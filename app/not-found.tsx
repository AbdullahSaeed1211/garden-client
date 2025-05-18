import Link from 'next/link';
import { GridPattern } from "@/components/ui/grid-pattern";

export default function NotFound() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center p-4">
      {/* Grid pattern background */}
      <GridPattern 
        cellSize={50} 
        cellThickness={0.5} 
        cellColor="rgba(120, 185, 120, 0.2)" 
        variant="dot"
        className="fixed inset-0 opacity-30" 
      />
      
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-block text-primary font-medium px-4 py-2 bg-primary/10 rounded-full mb-4">
          404 Error
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Page Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to growing your garden!
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
} 