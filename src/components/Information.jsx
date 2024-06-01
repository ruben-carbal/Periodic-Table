import './styles/Information.css'

const Information = (props) => {
  return(
    <div className={`${props.class} fixed w-2/5 left-[30%] h-auto text-center rounded bg-white p-4`}>
      <button onClick={props.onClick} className='absolute right-6'>x</button>
      <h1 className='text-2xl font-bold mb-2'><a href={props.source}>{props.name}</a></h1>
      <img src={props.link} alt={props.alt} className='w-1/3 rounded m-auto' />
      <p><strong>Discovered by:</strong> {props.discovered}</p>
      <p><strong>Category:</strong> {props.category}</p>
      <p><strong>Atomic mass:</strong> {props.mass}</p>
      <p><strong>Density:</strong> {props.density}</p>
      <p><strong>Boil:</strong> {props.boil}</p>
      <p><strong>Melt:</strong> {props.melt}</p>
      <p><strong>Phase:</strong> {props.phase}</p>
      <p><strong>Electron configuration:</strong> {props.configuration}</p>
    </div>
  )
}

export default Information;