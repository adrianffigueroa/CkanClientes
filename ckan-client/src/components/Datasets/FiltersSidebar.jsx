import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { mockGroups } from '@/data/mockGroups'
import { useState } from 'react'
import { Button } from '../ui/button'
const FiltersSidebar = ({
  appliedFormats,
  setAppliedFormats,
  appliedOrganizations,
  setAppliedOrganizations,
  appliedCategories,
  setAppliedCategories,
  searchTerm,
  setSearchTerm,
}) => {
  // Simulación del mockGroups. En tu proyecto real, esto ya lo vas a tener importado o pasado como prop.

  // Sacar listas únicas de formatos, organizaciones y categorías
  const uniqueFormats = Array.from(
    new Set(mockGroups.flatMap((group) => group.formatos))
  )
  const uniqueOrganizations = Array.from(
    new Set(mockGroups.map((group) => group.organizacion))
  )
  const uniqueCategories = Array.from(
    new Set(mockGroups.map((group) => group.categorias))
  )
  const [tempFormats, setTempFormats] = useState(appliedFormats)
  const [tempOrganizations, setTempOrganizations] =
    useState(appliedOrganizations)
  const [tempCategories, setTempCategories] = useState(appliedCategories)

  const handleCheckboxChange = (value, tempSelected, setTempSelected) => {
    setTempSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const handleApplyFilters = () => {
    setAppliedFormats(tempFormats)
    setAppliedOrganizations(tempOrganizations)
    setAppliedCategories(tempCategories)
  }

  const handleCleanFilters = () => {
    setTempFormats([])
    setTempOrganizations([])
    setTempCategories([])
    setAppliedFormats([])
    setAppliedOrganizations([])
    setAppliedCategories([])
  }

  return (
    <aside className="max-w-[300px] w-full hidden md:block ">
      <Accordion type="multiple" collapsible className="w-full">
        {/* 🔵 Organización */}
        <AccordionItem value="organizaciones" className="mb-4 shadow bg-white">
          <AccordionTrigger>Organizaciones</AccordionTrigger>
          <AccordionContent className="mt-2">
            {uniqueOrganizations.map((org) => (
              <div key={org} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`org-${org}`}
                  checked={tempOrganizations?.includes(org)}
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
        <AccordionItem value="categorias" className="mb-4 shadow bg-white">
          <AccordionTrigger>Categorías</AccordionTrigger>
          <AccordionContent className="mt-2">
            {uniqueCategories.map((cat) => (
              <div key={cat} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`cat-${cat}`}
                  checked={tempCategories?.includes(cat)}
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
        <AccordionItem value="formatos" className="mb-4 shadow bg-white">
          <AccordionTrigger>Formatos</AccordionTrigger>
          <AccordionContent className="mt-2">
            {uniqueFormats.map((format) => (
              <div key={format} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`format-${format}`}
                  checked={tempFormats?.includes(format)}
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
      <div className="flex items-start justify-between">
        <Button
          onClick={handleApplyFilters}
          className="hover:cursor-pointer hover:bg-primary-hover"
        >
          Aplicar Filtros
        </Button>
        <Button
          onClick={handleCleanFilters}
          className=" bg-destructive hover:cursor-pointer hover:bg-red-700"
        >
          Limpiar Filtros
        </Button>
      </div>
    </aside>
  )
}

export default FiltersSidebar
