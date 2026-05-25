'use client'

import { useRef, useState } from 'react'

export default function AVPHomepage() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }

    setPlaying(!playing)
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050505] text-white selection:bg-orange-200 selection:text-black">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(255,180,120,0.15),_transparent_40%),radial-gradient(circle_at_bottom,_rgba(255,120,80,0.08),_transparent_35%),linear-gradient(to_bottom,#050505,#0b0b0b,#050505)]" />

      <div className="fixed inset-0 -z-10 opacity-[0.07] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <nav className="fixed left-1/2 top-5 z-50 flex w-[92%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-orange-300 shadow-[0_0_20px_rgba(255,180,120,0.8)]" />

          <span className="text-sm tracking-[0.35em] text-white/80">
            AVP
          </span>
        </div>

        <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <a href="#worlds" className="transition hover:text-white">
            Worlds
          </a>

          <a href="#fragments" className="transition hover:text-white">
            Fragments
          </a>

          <a href="#travel" className="transition hover:text-white">
            Travel
          </a>

          <a href="#music" className="transition hover:text-white">
            Music
          </a>
        </div>

        <button
          onClick={toggleMusic}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.25em] text-white/70 backdrop-blur-xl transition hover:bg-white/10 hover:text-white"
        >
          {playing ? 'PAUSE' : 'SOUND'}
        </button>
      </nav>

      <section className="relative flex min-h-screen items-center justify-center px-6 pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/hero.jpg"
            alt="AVP"
            className="h-full w-full object-cover object-[center_35%] opacity-35"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#050505]" />
        </div>

        <div className="relative z-10 flex max-w-6xl flex-col items-center text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.6em] text-orange-200/70">
            Advick Vidhu Parames V
          </p>

          <h1 className="bg-gradient-to-b from-white via-orange-100 to-orange-300 bg-clip-text text-[clamp(2.8rem,12vw,10rem)] font-black leading-[1.1] tracking-tight text-transparent max-w-[90vw] md:max-w-full">
            AVP
          </h1>

          <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/65 md:text-xl text-center md:text-left  mx-auto max-w-5xl">
            Between who I am and who I’m becoming.
          </p>

          <div className="mt-16 flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-2xl">
            <div className="h-2 w-2 animate-pulse rounded-full bg-orange-300" />

            <span className="text-xs uppercase tracking-[0.4em] text-white/60 text-center md:text-left  mx-auto max-w-5xl">
              mysterious · chaotic · cinematic
            </span>
          </div>
        </div>
      </section>

      <section id="worlds" className="relative px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] md:tracking-[0.5em] text-orange-200/60">
              What My Brain Looks Like
            </p>

            <h2 className="text-4xl font-semibold text-3xl md:text-6xl">
              The stuff that shaped
              <span className="text-orange-200"> my days</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:bg-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200/10 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="relative z-10">
                <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/40">
                  Basketball
                </p>

                <h3 className="mb-6 text-3xl font-semibold">NBA</h3>

                <p className="leading-relaxed text-white/60">
                  The NBA season somehow controls my sleep schedule.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:bg-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200/10 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="relative z-10">
                <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/40">
                  Music
                </p>

                <h3 className="mb-6 text-3xl font-semibold">After Hours</h3>

                <p className="leading-relaxed text-white/60">
                  Half my personality is probably my playlists.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:bg-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200/10 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="relative z-10">
                <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/40">
                  Gaming
                </p>

                <h3 className="mb-6 text-3xl font-semibold">AFK</h3>

                <p className="leading-relaxed text-white/60">
                  We’re barely even playing anymore
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fragments" className="relative px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20">
            <p className="mb-4 text-xs uppercase tracking-[0.5em] text-orange-200/60">
              Fragments
            </p>

            <h2 className="text-4xl font-semibold text-3xl md:text-6xl">
              Scenes from
              <span className="text-orange-200"> lately.</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl">
              <img
                src="/fragment-1.jpg"
                className="h-[520px] w-full object-cover object-top"
              />
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl">
              <img
                src="/fragment-2.jpg"
                className="h-[520px] w-full object-cover object-top"
              />
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl">
              <img
                src="/fragment-3.jpg"
                className="h-[520px] w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="travel" className="relative overflow-hidden py-16">
        <div className="mb-14 px-6">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-xs uppercase tracking-[0.5em] text-orange-200/60">
              Travel Log
            </p>

            <h2 className="text-4xl font-semibold text-3xl md:text-6xl">
              Countires I’m glad I
              <span className="text-orange-200"> saw.</span>
            </h2>
          </div>
        </div>

        <div className="relative w-full overflow-hidden py-6">
          <div className="flex w-max gap-6 px-6 animate-marquee">
            {[
              { code: 'sg', name: 'Singapore' },
              { code: 'my', name: 'Malaysia' },
              { code: 'hk', name: 'Hong Kong' },
              { code: 'th', name: 'Thailand' },
              { code: 'fr', name: 'France' },
              { code: 'ch', name: 'Switzerland' },
              { code: 'at', name: 'Austria' },
              { code: 'de', name: 'Germany' },
              { code: 'va', name: 'Vatican City' },
              { code: 'it', name: 'Italy' },
              { code: 'id', name: 'Indonesia' },

              { code: 'sg', name: 'Singapore' },
              { code: 'my', name: 'Malaysia' },
              { code: 'hk', name: 'Hong Kong' },
              { code: 'th', name: 'Thailand' },
              { code: 'fr', name: 'France' },
              { code: 'ch', name: 'Switzerland' },
              { code: 'at', name: 'Austria' },
              { code: 'de', name: 'Germany' },
              { code: 'va', name: 'Vatican City' },
              { code: 'it', name: 'Italy' },
              { code: 'id', name: 'Indonesia' },
            ].map((country, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-5 text-lg text-white/80 backdrop-blur-2xl"
              >
                <img
                  src={`https://flagcdn.com/w40/${country.code}.png`}
                  className="h-5 w-7 rounded-sm object-cover"
                />

                <span>{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.5em] text-orange-200/60">
              Wemby Era
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-3xl md:text-6xl">
              Not just basketball.
              <span className="text-orange-200"> An obsession.</span>
            </h2>

            <p className="mt-8 max-w-lg leading-relaxed text-white/60 md:text-left mx-auto max-w-5xl">
              Arena lights, impossible highlights, and the feeling that greatness
              is happening in real time.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl">
            <img
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600&auto=format&fit=crop"
              className="h-[550px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="music" className="relative px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20">
            <p className="mb-4 text-xs uppercase tracking-[0.5em] text-orange-200/60">
              Soundtrack
            </p>

            <h2 className="text-4xl font-semibold text-3xl md:text-6xl">
              The music behind the
              <span className="text-orange-200"> atmosphere.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {[
              {
                name: 'The Weeknd',
                image:
                  'https://www.billboard.com/wp-content/uploads/media/02-the-weeknd-press-2019-cr-Nabil-Elderkin-billboard-1548.jpg?w=942&h=628&crop=1',
              },

              {
                name: 'Harry Styles',
                image:
                  'https://hips.hearstapps.com/hmg-prod/images/pchelenepambrun-resized-1576190436.jpg?crop=1.00xw:0.668xh;0,0&resize=1200:*',
              },

              {
                name: 'Rag’n’Bone Man',
                image:
                  'https://cdn-p.smehost.net/sites/005297e5d91d4996984e966fac4389ea/wp-content/uploads/2023/03/Rag-n-Bone-Man-Tattoo-Song-Series-.jpg',
              },

              {
                name: 'Stellar',
                image:
                  'https://mundanemag.com/wp-content/uploads/2021/11/DSC4446-123-scaled.jpg',
              },

              {
                name: 'IShowSpeed',
                image:
                  'https://mrwallpaper.com/images/hd/a-young-man-with-afro-hair-is-smiling-nvlp1tywteenw83g.jpg',
              },
            ].map((artist) => (
              <div
                key={artist.name}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:bg-white/10"
              >
                <div className="overflow-hidden">
                  <img
                    src={artist.image}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-lg font-medium text-white/80">
                    {artist.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative px-6 pb-20 pt-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center rounded-[3rem] border border-white/10 bg-white/5 px-8 py-16 text-center backdrop-blur-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.5em] text-orange-200/60">
            AVP
          </p>

          <h2 className="bg-gradient-to-b from-white to-orange-200 bg-clip-text text-5xl font-black text-transparent text-4xl md:text-7xl">
            advick.in
          </h2>

          <a
            href="https://instagram.com/advick.vp"
            target="_blank"
            className="mt-10 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm tracking-[0.3em] text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            @advick.vp
          </a>
        </div>
      </footer>

      <audio ref={audioRef} loop src="/music.mp3" />
    </main>
  )
}