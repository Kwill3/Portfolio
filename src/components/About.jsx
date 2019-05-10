import React from 'react';
import './About.css';
import { Accordion, AccordionItem} from 'react-light-accordion';

function About() {
  return (
    <div className='about-container'>
      <div className="about-wrapper">
        <h1>About Me</h1>
        <Accordion atomic={true}>
          <AccordionItem title='Tell me about yourself.'>
            <p>My name is Wei Yang Lee (William) and I have a background in engineering. To be more specific, I have a degree in mechanical engineering. I was working in the construction industry for a few years but now I am hoping to be able to break into the IT sector.</p>
          </AccordionItem>
          <AccordionItem title='Why did you learn to code?'>
            <p>Around the time of mid 2018, cryptocurrency was making headlines and AI implementation is starting to capture people's imagination with companies like DeepMind and Tesla coming up with revolutionary technologies. I became so captivated by these machines that I have been around since I was young and feel amazed at how far we as humans have come in the Information Age. Then I found myself unsatisfied about where I am going in life and felt like I wasn't being challenged enough so I picked up Computer Science as a hobby. I was working full time as a Project Engineer and would study CS after work, on my free time. I found CS to be highly engaging and fulfilling because of the challenges and diversity of both the problems and the people that I have met in this field.</p>
          </AccordionItem>
          <AccordionItem title='Do you have work experience?'>
            <p>I don't have any work experience in the traditional sense but I do have countless hours of experience designing websites and making projects on my own. You can view them in the projects tab or visit my github page in the contact tab. Although I have no prior work experience as a software developer, I am hoping that the lessons I have taken so far are practical and applicable in the real world for me to be able to start becoming one.</p>
          </AccordionItem>
          <AccordionItem title='What is your personality and overall attitude at work?'>
            <p>I am a passionate and hardworking person; that really helped me to be able to get this far learning how to code on my own. I've always been a team player, working well even with difficult people to achieve our common goals together. I am sometimes reserved when I am deep into a project or work, but feel free to speak to me about absolutely anything. I like getting feedback on my work or work attitude and think of it as a stimulus to my further growth. I also love asking questions so that I can learn something new.</p>
          </AccordionItem>
          <AccordionItem title='What are you good at in terms of coding?'>
            <p>I started off with the basics, getting proficient with HTML5, CSS3, and JS ES6. From there, a contact from my network suggested I get familiar with React because of its popularity so I started to learn and make several projects with it to make sure I understood the 'laws' of React and how to think in terms of React. Using that knowledge I made a couple of projects utilising React and REST APIs which as I have mentioned you can find a link to, in the Projects tab. I have also tried other frameworks like jQuery and dabbled in SASS and Bootstrap.  I use GitHub for all my projects, linked in the contact tab.</p>
          </AccordionItem>
          <AccordionItem title='What are your plans for the future?'>
            <p>Currently, I am looking to be able to work using React.js as it is the framework that I am very interested to expand on but my future plans are to take on new frameworks like Angular and also to move on to backend development eventually. On a side note, machine learning is also somewhat of an interest that I might want to get into someday. Coding is a subject that is continuously growing and changing with time; and I would love to grow and change with it. I am passionate about what I am creating and also the process of learning new skills everyday.</p>
          </AccordionItem>
          <AccordionItem title='What are your interests?'>
            <p>I have a deep interest in exploring new places, you could call it travelling but not limited to only that. I am fascinated by deep space explorations and new discoveries of outer space. Which is also why I go hiking every once in a while when I have some time off. I've hiked many different mountains here and there but the most unforgettable ones are a couple of volcanoes in Indonesia. I am also a movie buff and an occassional gamer. I have a thing for languages, I have a grasp of about 4 of them; and then some if you consider coding languages :)</p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default About;