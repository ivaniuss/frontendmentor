import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-[hsl(47,88%,63%)] font-figtree">
      <section className="flex flex-col p-4 bg-white w-[400px] rounded-xl items-start border border-black shadow-[12px_12px_0px_0px]">
        <Image className="rounded-lg" src={'/illustration-article.svg'} alt="logo" width={400} height={200}/>
        <h3 className="bg-amber-300 my-3 py-1 px-2 rounded-md">Learning</h3>
        <h4 className="text-md">Published 21 Dec 2023</h4>
        <h1 className="py-3 hover:text-[hsl(47,88%,63%)] cursor-pointer text-2xl">
          <strong><Link href={'https://www.codecademy.com/catalog/language/html-css'} target="_blank">HTML & CSS foundations</Link></strong>
        </h1>
        <p className="mb-2 text-[hsl(0,0%,50%)]">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <div className="flex gap-4 my-3">
          <Image src={'/image-avatar.webp'} alt="avatar" width={30} height={10}/>
          <h2><strong>Greg Hooper</strong></h2>
        </div>
      </section>
    </main>
  );
}