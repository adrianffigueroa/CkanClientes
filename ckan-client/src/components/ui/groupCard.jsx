import cardIcon from '@/assets/cardIcon.png'
import { Card, CardContent } from '@/components/ui/card'

const GroupCard = ({ title, datasets }) => {
  return (
    <Card className="w-60 h-64 mx-auto flex flex-col items-start justify-start rounded-4xl shadow-[0_20px_80px_rgba(74,58,255,0.08)] bg-white">
      <CardContent className="flex flex-col justify-between items-start w-full h-full px-4 py-2">
        {/* Icono */}
        <div className="mb-0">
          <img src={cardIcon} alt="cardicon" className="w-10 h-10" />
        </div>

        {/* Título */}
        <h3 className="text-base font-semibold leading-tight min-h-[36px] flex items-start">
          {title}
        </h3>

        {/* Cantidad de conjuntos */}
        <p className="text-gray-500 text-sm mt-4">
          {datasets} conjunto de datos
        </p>
      </CardContent>
    </Card>
  )
}

export default GroupCard
