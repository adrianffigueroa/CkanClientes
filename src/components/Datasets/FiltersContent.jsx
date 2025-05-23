import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

function FiltersContent({
  uniqueOrganizations,
  uniqueCategories,
  uniqueFormats,
  tempOrganizations,
  tempCategories,
  tempFormats,
  handleCheckboxChange,
  handleApplyFilters,
  handleCleanFilters,
  setTempFormats,
  setTempOrganizations,
  setTempCategories,
}) {
  return (
    <div className="max-w-[280px] w-full">
      <Accordion type="multiple" collapsible className="w-full">
        {/* 🔵 Organización */}
        <AccordionItem
          value="organizaciones"
          className="mb-4 shadow-[0_20px_80px_rgba(74,58,255,0.15)] bg-white"
        >
          <AccordionTrigger>Organizaciones</AccordionTrigger>
          <AccordionContent className="mt-2">
            {uniqueOrganizations.map((org) => (
              <div key={org} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`org-${org}`}
                  checked={tempOrganizations.includes(org)}
                  onChange={() =>
                    handleCheckboxChange(
                      org,
                      tempOrganizations,
                      setTempOrganizations
                    )
                  }
                  className="mr-2"
                />
                <label htmlFor={`org-${org}`} className="text-sm text-gray-700">
                  {org}
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* 🟣 Categorías */}
        <AccordionItem
          value="categorias"
          className="mb-4 shadow-[0_20px_80px_rgba(74,58,255,0.15)] bg-white"
        >
          <AccordionTrigger>Categorías</AccordionTrigger>
          <AccordionContent className="mt-2">
            {uniqueCategories.map((cat) => (
              <div key={cat} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`cat-${cat}`}
                  checked={tempCategories.includes(cat)}
                  onChange={() =>
                    handleCheckboxChange(cat, tempCategories, setTempCategories)
                  }
                  className="mr-2"
                />
                <label htmlFor={`cat-${cat}`} className="text-sm text-gray-700">
                  {cat}
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* 🟡 Formatos */}
        <AccordionItem
          value="formatos"
          className="mb-4 shadow-[0_20px_80px_rgba(74,58,255,0.15)] bg-white"
        >
          <AccordionTrigger>Formatos</AccordionTrigger>
          <AccordionContent className="mt-2">
            {uniqueFormats.map((format) => (
              <div key={format} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`format-${format}`}
                  checked={tempFormats.includes(format)}
                  onChange={() =>
                    handleCheckboxChange(format, tempFormats, setTempFormats)
                  }
                  className="mr-2"
                />
                <label
                  htmlFor={`format-${format}`}
                  className="text-sm text-gray-700"
                >
                  {format}
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Botones */}
      <div className="flex items-center justify-between mt-4">
        <Button
          onClick={handleApplyFilters}
          className="px-1 hover:cursor-pointer hover:bg-primary-hover"
        >
          Aplicar Filtros
        </Button>
        <Button
          onClick={handleCleanFilters}
          variant="destructive"
          className="px-1 hover:cursor-pointer hover:bg-red-700"
        >
          Limpiar Filtros
        </Button>
      </div>
    </div>
  )
}

export default FiltersContent
