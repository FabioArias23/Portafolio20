import Layout from '../components/Layout'
import { skills,projects } from '../profile';
import Link from "next/link"

const Index = () => (
    <Layout>
        {/**carte de cabeza */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src="Matrix4.jpeg" className="img-fluid" alt="" />

                        </div>
                        <div className="col-md-8">
                            <h1> Fabio Arias </h1>
                            <h3>Fullstack Developer</h3>
                            <p>Asi se programa con Html, Javascript, React, Bootstrap,NodeJs y NextJs

                            </p>
                            <a href="/Contratame">Contratame</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/**Segunda seccion */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card body py-2 ">
                        <h1>Skills</h1>
                        {
                            skills.map(({ skill, percentage }, i) => (
                                <div className= "py-2 " key={i}>
                                    <h5>{skill}</h5>
                                    <div
                                    className="progress bar bg-black py-2"
                                    role="progress-bar"
                                    style={{width: `${percentage}%`}}>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card body ">
                        <h1>Experiencia</h1>
                        <ul>
                                <li>
                                    <h3> CoderHouse</h3>
                                    <h5>2019-2022</h5>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12'>
                <div className='card card-body bg-dark'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1 className='text-center text-light'>Portafolio</h1>

                        </div>
                        {
                            projects.map(({name,description,image},i) => (
                                <div className='col-md-4 p-2' key={i}>
                                    <div className  ="card h-100">
                                        <div className="overflow">
                                        <img src ={`/${image}`} alt = "" className='card-img-top'/>
                                        </div>
                                    <div className='cardbody'>
                                        <h3>{name}</h3>
                                        <p>{description}</p>
                                        <a href="#!">know more</a> 
                                        </div>
                                    </div>
                                    </div>
                            ))
                        }
                    </div>
                    <div className="text-center">
                        <Link href="/portfolio" legacyBehavior>
                            <a className="btn btn-outline-light">More Projects</a>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>


    </Layout>
)

export default Index;