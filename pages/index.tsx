import { AcademicCapIcon, BoltIcon, BriefcaseIcon } from '@heroicons/react/24/solid'
import Head from "next/head"
import Image from "next/image"
import { CareerItem, CareerResponse } from '../types'

export default function Home(careerItems: CareerResponse) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Martín Sieiro Gutiérrez" />
        <meta name="copyright" content="Martín Sieiro Gutiérrez" />
        <meta name="title" content="Roadmap - Martín Sieiro Gutiérrez" />
        <meta name="description" content="Roadmap - Martín Sieiro Gutiérrez" />
        <meta
          name="keywords"
          content="Martín Sieiro Gutierrez, Martín Sieiro Gutiérrez, Martin Sieiro Roadmap, Martin Sieiro Gutierrez, msieiro, MSieiro, Msieiro, skills, career, professional career"
        />
        <meta name="theme-color" content="dark" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/assets/manifest.json" />
        <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
        <link rel="canonical" href="https://martinsieiro.com/" />
        <link rel="made" href="mailto:sieirogutierrezmartin@gmail.com" />
        <link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.png" />
        <title>MSieiro Roadmap</title>
      </Head>
      <div className="container">
        <h1 className="name">
          MSieiro Roadmap
        </h1>
        <div id="timeline">
          {careerItems &&
            careerItems?.data &&
            careerItems?.data.length > 0 &&
            careerItems?.data.map((el: CareerItem, idx: number) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-icon">
                  {el.type === "COURSE" && (
                    <BoltIcon width={24} height={24} color="white" />
                  )}
                  {el.type === "SCHOOL" && (
                    <AcademicCapIcon width={24} height={24} color="white" />
                  )}

                  {el.type === "JOB" && (
                    <BriefcaseIcon width={24} height={24} color="white" />
                  )}

                </div>
                <div className={`timeline-content ${idx % 2 == 0 && 'right'}`}>
                  <h2>{el.qualification}</h2>
                  <p>
                    {el.years.from.month}
                    &nbsp;
                    {el.years.from.year}
                    {el.years.to.month &&
                      (<>
                        &nbsp;-&nbsp;
                        {el.years.to.month}
                        &nbsp;
                        {el.years.to.year}
                      </>)}
                  </p>
                  <h3>{el.level} - {el.company}</h3>
                  <div className="techs">
                    {el.technologies.map((tech: string, idx: number) => (
                      <Image key={idx} src={`/assets/images/technologies/${tech}.svg`} width="45" height="45" alt={tech} style={{ marginLeft: "3px", marginRight: "3px" }} />
                    ))}
                  </div>
                  <div className='skills'>
                    {el.skills.map((skill: string, idx: number) => (
                      <span key={idx} className="badge">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const reqCareer = await fetch(`http://localhost:3000/data/career.json`)
  const careerData = await reqCareer.json()
  const career: CareerItem[] = careerData.career
  return {
    props: { data: career },
  }
}
