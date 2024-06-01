export const Elemento = ({ numAtomico, nombre, simbolo, classy}) => {
  return (
    <div className={classy}>
        <p className="ml-1 mt-1 text-xs absolute">{numAtomico}</p>
        <h1 className="mt-4 font-bold">{simbolo}</h1>
        <small className="text-xs">{nombre}</small>
    </div>
  )
}