import Nav from '../components/Nav';
import skills from '../info/skills';

const Skill = ({name,img}) => {
    return (
        <div>
            <div className='mr-44 ml-44 mt-16'>
            {/* <iframe className="py-4" width="560" height="315" src="https://www.youtube.com/embed/uliOFUXK154?si=D29qb4vM1RZl6ryg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            <img src={img} alt={name} className='py-4'/>
            <h2 className='text-center text-white'>{name}</h2>
            </div>
        </div>
    )
}


const Home = () => {
    return (
        <div >
            <Nav />
            <div className='flex overflow-hidden flex-wrap'>
            {skills.map(({name,img})=>{
                return <Skill name={name} img={img} />
            })}
            </div>
        </div>
    )
}


export default Home;