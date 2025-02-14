// Dependency
import Link from 'next/link';

// Template
export default function NotFound() {

  return (
    <div className="font-[family-name:var(--font-inter)]">
      <main className="mt-40 flex justify-center px-4">
        
        <div className="w-[460px] md:w-[600px] lg:w-[600px]">
          <h1 className="lg:text-2xl mb-4"><strong>Uh, page not found! 🤯</strong></h1>
          <Link href="/">Return <span className="underline">Home</span></Link>
        </div>

      </main>
    </div>
  )
}