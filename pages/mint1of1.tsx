import Image from 'next/image'

export default function Mint1of1() {
  return (
    <div className="min-h-screen h-full w-full overflow-hidden flex flex-col items-center justify-center bg-brand-background">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <Image src="/images/blur.jpeg" alt="" />
      </div>
    </div>
  )
}
