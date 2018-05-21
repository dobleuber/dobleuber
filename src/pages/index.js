import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import Skill from '../components/skill'

const IndexPage = ({ data }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Img
          title="me"
          alt="dobleuber"
          resolutions={data.file.childImageSharp.resolutions}
        />
        <h4
          style={{
            marginTop: 15,
          }}
        >
          Skills
        </h4>
        {data.site.siteMetadata.skills.map(skill => (
          <Skill key={skill.label} {...skill} />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 20,
        }}
      >
        <h4>Frontend Developer</h4>
        <p>
          Web developer with 15+ years of experience. Passionate for my work and
          self-improvement. Committed with developing product with high quality
          standards. I enjoy learning and working with new technologies. I love
          working hard when I am doing challenging projects.
        </p>
        <p>
          I fell in love with React and its ecosystem a couple of years ago. I
          have been studying this framework a lot and have built several
          applications to put my skills into practice. I’ve given talks about
          React, Angular and Web development in multiple tech meetups in my
          city.
        </p>
        <p>
          My mainy is to learn about new things and I am always trying new ways to do things.
        </p>
        <h4>Experience</h4>
        <h5>PSL Corp</h5>
        <p>
          Senior Web Developer <br />
          I joined to PSL to start to create a robust team and architecture for Microsoft projects. I have worked a lot in the adoption of new technologies in the backend side and the last years for frontend.
        </p>
        <h6>
          Responsabilities:
        </h6>
        <ul>
          <li>
            Develop high quality web applications for Big companies at US and
            Colombia
          </li>
          <li>
            Support the software architect at defining the technology stack
            for Web projects and develop the most challenging features
          </li>
          <li>
            Help with personal selection process doing internal and external
            technical interviews
          </li>
          <li>
            Support to another teams in the resolution of difficult issues
          </li>
          <li>
            Mentoring junior developers to improve their technical skills
          </li>
        </ul>
        <h5>Trebol / Axede S.A.</h5>
        <p>
          Web Developer <br />
          <i>July 2007 - May 2009</i><br/>
          I worked as Outsource Developer in www.virtualexito.com, now www.exito.com. At that time was the biggest online store at Colombia.<br/>
          I started with a project for the judicial branch of Colombia, That was a very challenging project and the expectative were very high.
        </p>
        <h6>
          Responsabilities:
        </h6>
        <ul>
          <li>
            Develop and support the design for online payments with PSE, Master Card and Visa.
          </li>
          <li>
            Help to define the best practices to work with LinQ and LinQ to SQL, the new Microsoft technology.
          </li>
        </ul><h5>Seriva</h5>
        <p>
          Web Developer <br />
          <i>June 2005 - April 2007</i><br/>
          Worked in support and customization of the banking platform created by Seriva. I worked for Banco de Credito, Banco de Occidente, Banco Popular.
        </p>
        <h6>
          Responsabilities:
        </h6>
        <ul>
          <li>
            Develop custom features for Banco de Crédito.
          </li>
          <li>
            Maintenance and support for the other customers at Colombia.
          </li>
        </ul>
        <h5>Symmetry Ltda</h5>
        <p>
          Web Developer <br />
          <i>September 2004 - June 2005</i> <br/>
          Worked as contributor developer to the team that architected, developed and deployed the Avianca website (Major airline in Colombia) using Microsoft technologies (.NET). Delivered an operational online ticket sales website in just 3 months.<br/>
          This project was one of the first .net projects in the world.
        </p>
        <h6>
          Responsabilities:
        </h6>
        <ul>
          <li>
            Develop the booking engine platform.
          </li>
          <li>
            Develop the integration with the payments platforms for PSE-ACH, Verisign, Visa and Transbank.
          </li>
          <li>
            Maintenance and Support of Avianca.com web site.
          </li>
        </ul>        
      </div>
    </div>
  </div>
)

export default IndexPage

export const query = graphql`
  query getAvatar {
    file(name: { eq: "me" }) {
      name
      childImageSharp {
        resolutions(width: 256, height: 279) {
          ...GatsbyImageSharpResolutions_tracedSVG
        }
      }
    }

    site {
      siteMetadata {
        skills {
          label
          score
        }
      }
    }
  }
`
