// Dependency
import type { Metadata } from 'next'
import Link from 'next/link';
import Image from 'next/image';
 

export const metadata: Metadata = {
  title: 'Mišel Tekinder | Product engineer',
  description: 'I help businesses build digital products utilizing modern technology.'
}

// Template
export default function Home() {

  return (
    <div className="font-[family-name:var(--font-inter)]">
      <main className="mt-40 flex justify-center px-4">
        
        <div className="w-[460px] md:w-[600px] lg:w-[600px] mb-8">

          <div className="flex gap-4">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
              <Image
                src="/misel-tekinder.jpeg"
                alt="Mišel Tekinder | Product engineer"
                width={60}
                height={60}
              />
            </div>
            <h1 className="lg:text-2xl">
              <strong className="block">Hello. 👋 I&#39;m Mišel</strong>
              <span className="lg:text-xl">Product engineer.</span>
            </h1>
          </div>
          <p className="text-2xl md:text-3xl lg:text-4xl mt-8">I help businesses build digital products utilizing modern technology.</p>

          <section>
            <p className="mt-8"><strong>About</strong></p>
            <p className="md:text-lg lg:text-xl mt-4">Over the last decade as part of the outsourcing tech industry I helped large number of international brands from the industries such as edutech, fintech, retail and transportation build various digital products.</p>
            <p className="md:text-lg lg:text-xl mt-4">While doing that I lead teams and mentored great number of engineers, designed mentorship and developmant programs.</p>
          </section>

          <section>
            <p className="mt-8"><strong>Contact</strong></p>
            <p className="md:text-lg lg:text-xl mt-4">Find me on <Link href="https://www.linkedin.com/in/miseltekinder/" target="_blank" className="underline">LinkedIn</Link> or over the <Link className="underline" href="mailto:mise@udrscr.studio">e-mail</Link>.</p>
          </section>

        </div>

      </main>
    </div>
  );
}
