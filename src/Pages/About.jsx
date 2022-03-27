import React from 'react';
import resto1 from '../Assets/AboutPage/resto1.jpg';
import resto2 from '../Assets/AboutPage/resto2.jpg';
import team from '../Assets/AboutPage/team.jpg';
import food from '../Assets/AboutPage/food.jpg';
import '../Styles/About.css';

function About() {
  return (
    <div className='aboutPage' id='aboutPage'>
        <h1 className='aboutPageHeader'>About us</h1>
        <hr />
        <div className="restaurant">
            <div className='restoPictures'>
                <img src={resto1} className='restopic resto1pic'/>
                <img src={resto2} className='restopic resto2pic'/>
            </div>
            <div className='aboutRestoText'>
                <h2>Our Place</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, neque? Quibusdam quis dolore perspiciatis. Odit, rem, ab accusantium tenetur vel suscipit voluptate a architecto mollitia distinctio, optio nam voluptatum harum!</p>
            </div>
        </div>
        <div className="team">
            <div className='aboutTeamText'>
                <h2>Our Team</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni autem ducimus mollitia, libero expedita iusto tenetur incidunt aspernatur sapiente, eaque praesentium repellat maxime neque animi repellendus, delectus voluptas quod.</p>
            </div>
            <div><img src={team} className='teamPic'/></div>
        </div>
        <div className="food">
            <div><img src={food} className='foodPic'/></div>
            <div className='aboutFoodText'>
                <h2>Fresh Food</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni autem ducimus mollitia, libero expedita iusto tenetur incidunt aspernatur sapiente, eaque praesentium repellat maxime neque animi repellendus, delectus voluptas quod.</p>
            </div>
        </div>
    </div>
  )
}

export default About