import DatasetList from '@/components/Datasets/DatasetList'
import FiltersSidebar from '@/components/Datasets/FiltersSidebar'
import SearchBox from '@/components/ui/searchbox'
import { mockGroups } from '@/data/mockGroups'
import { FilterIcon } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Datasets() {
  const [selectedFormats, setSelectedFormats] = useState([])
  const [selectedOrganizations, setSelectedOrganizations] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const filteredGroups = mockGroups.filter((group) => {
    const matchesFormat =
      selectedFormats.length === 0 ||
      group.formatos.some((formato) => selectedFormats.includes(formato))

    const matchesOrganization =
      selectedOrganizations.length === 0 ||
      selectedOrganizations.includes(group.organizacion)

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(group.categorias)

    const matchesSearch =
      searchTerm.trim() === '' ||
      group.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.descripcion.toLowerCase().includes(searchTerm.toLowerCase())

    return (
      matchesFormat && matchesOrganization && matchesCategory && matchesSearch
    )
  })

  return (
    <div className="flex flex-col p-6 mt-6">
      <h2 className="text-primary text-2xl font-semibold">
        Buscador de conjuntos de datos
      </h2>
      <p className="mb-4">
        Utiliza este buscador para localizar fácilmente los conjuntos de datos
        que necesites.
      </p>
      <div className="flex items-start gap-4">
        <FiltersSidebar
          appliedFormats={selectedFormats}
          setAppliedFormats={setSelectedFormats}
          appliedOrganizations={selectedOrganizations}
          setAppliedOrganizations={setSelectedOrganizations}
          appliedCategories={selectedCategories}
          setAppliedCategories={setSelectedCategories}
        />
        <div className="flex flex-col w-full gap-4">
          <div className="flex items-center">
            <SearchBox
              className="mt-8"
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <div className="flex md:hidden">
              <FilterIcon className="rounded-2xl bg-primary text-white hover:bg-primary-hover transition duration-300 ease-in-out">
                <Link to="/login" className="text-sm font-semibold"></Link>
              </FilterIcon>
            </div>
          </div>
          <DatasetList mockGroups={filteredGroups} />
        </div>
      </div>
    </div>
  )
}

export default Datasets
