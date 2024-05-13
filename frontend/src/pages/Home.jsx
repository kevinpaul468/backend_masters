import Nav from '../components/Nav';

const Home = () => {
    return (
        <div >
            <Nav />
            <div className='flex justify-center items-center h-screen'>
                <h1 className='text-4xl font-bold'>Welcome to the Home Page</h1>
            </div>
        </div>
    )
}


export default Home;