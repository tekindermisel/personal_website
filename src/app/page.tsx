// Dependency
import type { Metadata } from 'next'
import Link from 'next/link';
 

export const metadata: Metadata = {
  title: 'Mišel Tekinder | Product engineer',
  description: 'I helping businesses build digital products utilizing modern technology.'
}

// Template
export default function Home() {

  return (
    <div className="font-[family-name:var(--font-inter)]">
      <main className="mt-40 flex justify-center px-4">
        
        <div className="w-[460px] md:w-[600px] lg:w-[600px]">

          <h1 className="lg:text-2xl">
            <strong className="block">Hello. 👋 I&#39;m Mišel</strong>
            <span className="lg:text-xl">Product engineer.</span>
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl mt-8">I help businesses build digital products utilizing modern technology.</p>

          <p className="mt-8"><strong>About</strong></p>
          <p className="md:text-lg lg:text-xl mt-4">Over the last decade as part of the outsourcing tech industry I helped large number of international brands from the industries such as edutech, fintech, retail and transportation build various digital products.</p>
          <p className="md:text-lg lg:text-xl mt-4">While doing that I lead teams and mentored great number of engineers, designed mentorship and developmant programs.</p>

          <p className="mt-8"><strong>Contact</strong></p>
          <p className="md:text-lg lg:text-xl mt-4">Find me on <Link href="https://www.linkedin.com/in/miseltekinder/" target="_blank" className="underline">LinkedIn</Link> or over the <Link className="underline" href="mailto:mise@udrscr.studio">e-mail</Link>.</p>

        </div>

      </main>
    </div>
  );
}
