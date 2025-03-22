import Image from "next/image"

const abouts = [
    { title: "Tenaga Pendidik Berkualitas", description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis donec tristique nostra elementum vel etiam aliquam facilisi.", image: '/public/hat.svg' },
    { title: "Lorem Ipsum", description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis donec tristique nostra elementum vel etiam aliquam facilisi.", image: '/public/hat.svg' },
    { title: "Lorem Ipsum", description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Felis donec tristique nostra elementum vel etiam aliquam facilisi.", image: '/public/hat.svg' }
]

const AboutSection = () => {
    return (
        <section className="bg-white py-16 px-6 font-raleway">
            <div className="max-w-7xl mx-auto">
                <div className="font-semibold text-[32px] leading-tight">
                    <h1 className="text-black">Kenapa Pilih</h1>
                    <h1 className="text-[#0067D0] italic">Moklet Open Course ?</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7 pt-6">
                    {
                        abouts.map((about, index) => {
                            return (
                                <div className="border border-[#B9DCFC] rounded-xl p-5 w-full md:w-[223px] lg:w-[400px]" key={index}>
                                    <div className="space-y-4">
                                        <Image
                                            width={72}
                                            height={72}
                                            alt="icon"
                                            src='/hat.svg' />
                                        <h1 className="text-xl font-semibold text-[#121212]">{about.title}</h1>
                                        <p className="text-[#787777] font-medium text-base">{about.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default AboutSection