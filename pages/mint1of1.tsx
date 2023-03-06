import Image from 'next/image'

export default function Mint1of1() {
  return (
    <div className="min-h-screen h-full w-full overflow-hidden flex flex-col items-center justify-center bg-brand-background">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <Image
          src="/images/blur.jpeg"
          alt=""
          className="animate-pulse-slow absolute inset-auto block w-full min-h-screen object-cover"
          width={1920}
          height={1080}
        />

        <div className="relative w-full h-full flex flex-col items-center justify-center px-2 md:px:10">
          <div className="z-1 md:max-w-3xl w-full bg-gray-900/90 filter backdrop-blur-sm py-4 rounded-md px-2 md:px-10 flex flex-col items-center">
            <h1 className="animate-pulse-slow font-coiny uppercase font-bold text-3xl md:text-4xl bg-clip-text mt-3">
              Coming Soon
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
