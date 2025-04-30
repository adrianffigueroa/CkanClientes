import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import GroupCard from './groupCard'
const CarouselCards = ({ mockGroups }) => {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-1  ">
        {mockGroups.map((mockGroups) => (
          <CarouselItem
            key={mockGroups.id}
            // className="basis-1/2 md:basis-1/3 lg:basis-1/4"
            className="pl-1 md:basis-1/3 lg:basis-1/4"
          >
            <div className="p-1">
              <GroupCard
                title={mockGroups.title}
                datasets={mockGroups.datasets}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default CarouselCards
