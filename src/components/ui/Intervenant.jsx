
const Intervenant = ({ person }) => {
  return (
    <div className="flex justify-center items-center h-[250px] w-full overflow-hidden rounded-lg" style={{background: person.color}}>
        <img className="w-[180px] mb-[-60px] md:w-full md:mb-6" src={person.image} alt="person image" />
        <div>
            <h3 className="text-lg font-semibold">{person.name}</h3>
            <p className="mt-2">{person.job}</p>
        </div>
    </div>
  )
}

export default Intervenant
