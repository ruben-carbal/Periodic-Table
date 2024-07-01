export const Elemento = ({ numAtomico, nombre, simbolo, classy, click}) => {
  return (
    <div className={classy} onClick={click}>
        <p className="ml-1 mt-1 text-[1vw] absolute">{numAtomico}</p>
        <h1 className="mt-4 font-bold text-[1.5vw]">{simbolo}</h1>
        <small className="relative text-[0.8vw] bottom-2">{nombre}</small>
    </div>
  )
}