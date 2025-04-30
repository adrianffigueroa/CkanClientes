import CarouselCardsWrapper from '@/components/ui/CarouselCardsWrapper'
import SearchBox from '@/components/ui/searchbox'
import { mockGroups } from '@/data/mockGroups'
const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="mt-8 flex flex-col items-center w-1/2">
        <h3 className="flex flex-col text-2xl items-center text-primary tracking-widest">
          PROVINCIA DE BUENOS AIRES
        </h3>
        <h1 className="flex flex-col items-center text-4xl font-semibold text-center mt-4 mb-12 tracking-wide">
          <span>Portal de datos abiertos</span>
          <span>Municipio de Quilmes</span>
        </h1>
        <SearchBox />
        <div className="flex items-start justify-center mt-8">
          <div className="flex flex-col items-center mr-8">
            <p className="text-4xl text-primary font-semibold">
              {mockGroups
                .map((group) => group.datasets)
                .reduce((a, b) => a + b, 0)}
            </p>
            <p>Conjunto </p>
            <p>de Datos</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl text-primary font-semibold">
              {mockGroups.length}
            </p>
            <p>Grupos</p>
          </div>
        </div>
      </section>

      {/* Sección fondo gris */}
      <section className="flex justify-center mt-16 w-full relative overflow-visible">
        {/* Fondo expandido */}
        <div className="absolute inset-0">
          <div className="w-[115%] lg:translate-x-[10%] bg-[rgba(74,58,255,0.03)] rounded-t-[150px] min-h-full"></div>
        </div>
        <div className="relative z-10 w-full max-w-5xl text-center mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide leading-relaxed mb-6">
            Descubre los últimos conjuntos de datos
            <br />
            publicados
          </h2>

          <p className="text-gray-600 mx-auto text-center max-w-[85%] sm:max-w-xl md:max-w-2xl mb-10">
            De acuerdo a los estándares internacionales, proporcionamos datos de
            gran utilidad para organizaciones, ciudadanía e investigadores en el
            ámbito de Datos Abiertos.
          </p>

          <CarouselCardsWrapper mockGroups={mockGroups} />
        </div>
      </section>
    </div>
  )
}

export default Home
