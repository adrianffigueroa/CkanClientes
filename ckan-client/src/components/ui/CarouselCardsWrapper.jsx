import CarouselCards from './CarouselCards'

const CarouselCardsWrapper = ({ mockGroups }) => {
  return (
    <div className="relative w-full bg-[rgba(248,248,255,1)]">
      {/* Fondo superior difuso corregido */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#18171b] via-[rgba(246,4,4,0.5)] to-transparent z-10" />

      {/* Fondo inferior difuso */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[rgba(248,248,255,1)] via-[rgba(248,248,255,0.4)] to-transparent z-10" />

      {/* Carrusel visible */}
      <div className="relative z-0">
        <CarouselCards mockGroups={mockGroups} />
      </div>
    </div>
  )
}

export default CarouselCardsWrapper
