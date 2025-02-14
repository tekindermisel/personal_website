// Dependency
import type { Metadata } from 'next'
 

export const metadata: Metadata = {
  title: 'Mišel Tekinder | Product engineer',
  description: 'I helping businesses build digital products utilizing modern technology.'
}

// Template
export default function Home() {
  return (
    // <div className="font-[family-name:var(--font-geist-mono)]">
    <div className="font-[family-name:var(--font-inter)]">
      <main className="mt-40 flex justify-center px-4">
        
        <div className="w-[460px] md:w-[600px] lg:w-[600px] .lg:w-[768px]">

          <h1 className="lg:text-2xl"><strong>Hello. 👋 I'm Mišel</strong>, Product engineer.</h1>
          <p className="md:text-2xl lg:text-3xl mt-4">I helping businesses build digital products utilizing modern technology.</p>
          <p className="md:text-lg lg:text-xl mt-4">Over the last decade as part of the outsourcing tech industry I helped large number of international brands from the industries such as edutech, fintech, retail and transportation build various digital products.</p>
          <p className="md:text-lg lg:text-xl mt-4">While doing that I lead teams and mentored great number of engineers, designed mentorship and developmant programs.</p>

        </div>

      </main>
    </div>
  );
}
