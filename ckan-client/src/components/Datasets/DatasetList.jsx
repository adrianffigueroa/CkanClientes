import DatasetCard from './DatasetCard'

const DatasetList = ({ mockGroups }) => {
  return (
    <>
      {mockGroups.length === 0 && (
        <p className="mx-auto">Su búsqueda no produjo resultados.</p>
      )}
      {mockGroups.map((group) => (
        <DatasetCard key={group.id} group={group} />
      ))}
    </>
  )
}

export default DatasetList
