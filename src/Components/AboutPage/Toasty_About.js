import React from 'react'
import useWindowSize from '../../Hooks/useWindowSize'
import { useNavigate } from 'react-router-dom'
import ToastyHeader from '../Toasty_Header';
import Toasty_About_Landing from './Toasty_About_Landing';
import ToastyFooter from '../Toasty_Footer';

const Toasty_About = () => {
    const {width} = useWindowSize();// decoupling of data
    let navigate = useNavigate();
    
    return (
        <main className='flex-container'>
            <Toasty_About_Landing />
            <div className='toasty_grid_about' > 
                <p style={{gridRow:'1', gridColumn:'2 / span 3', marginTop:'10%'}}>
                    Toasty is an early afternoon to late-night sandwich shop, focused on providing tasty sandwiches for those who don’t have the time or energy to make a meal for themselves.  All our sandwiches follow the motto of being fresh, easy on the stomach, nutritious, made with good quality bread, but more than anything else delicious. 
                </p>
                <p style={{gridRow:'2', gridColumn:'2 / span 3', marginBottom:'10%'}}>
                    We aim to create a homey and welcoming environment. A place you can sit down and take a short rest, like a second home, before heading on to where ever you need to go, with the energy to do whatever you need to do.
                </p>
            </div>
            <div className='toasty_grid_about' > 
                <h2 style={{gridRow:'1', gridColumn:'2 / span 3', marginBottom:'7%'}}>
                    A Word from Ginny Pasco
                </h2>
                <p style={{gridRow:'2', gridColumn:'4', marginBottom:'10%', alignSelf:'center'}}>
                    “Toasty initially started as a way of expressing my passion for bread. I love sandwiches, and I wanted to use Toasty to share this love with other people but while this idea was baking in my head, I realized something even more important.
                </p>
                <div style={{display:'flex',  gridRow: '2', gridColumn: '2', zIndex:'2', justifyContent: width > 600 ? 'flex-start': 'center'}}>
                    <img alt='Photo of tasty toast' src='https://cdn.discordapp.com/attachments/1075543412582924378/1111354557109391470/cut_out_cheese-vegetable-toast.png' 
                    style={{ objectFit:'contain', width: width > 600 ? '90%' : '70%', height:'auto'}} />
                    
                </div>
            </div>
            <div className='toasty_grid_about' > 
                <p style={{gridRow:'1', gridColumn:'2', marginBottom:'10%', alignSelf:'center'}}>
                I remembered when I was starting out as a young adult I had difficulty balancing between my work, studies, and life.
                It was my first time living away from home and often I didn’t have the time to cook for myself. I always ended up making sandwiches, which is where my love and expertise of it now comes from.
                </p>
                <div className='about_comment_placement' style={{gridRow: '1', gridColumn: '3 / span 2', display:'grid', marginBottom:'15%'}}>
                    <div style={{display:'flex',  gridRow: '1 / span 5', gridColumn: width > 600 ? '2 / span 4' : '1 / span 5', zIndex:'2', justifyContent: width > 600 ? 'flex-end' : 'center'}}>
                        <img className='img' alt='She laughs' src='https://cdn.discordapp.com/attachments/1075543412582924378/1111361985456656435/ginny-yu-laughing-close-up.jpg' 
                        style={{ objectFit:'contain', width: '90%', height:'auto'}} />
                    </div>
                    <div className='comment stroke_alice' style={{gridRow: '5', gridColumn: '1 / span 2', justifyContent:'center', alignSelf:'center', transform: 'rotate(-15deg)'}}>
                        She laughs
                </div>
            </div>
            </div>
            <div className='toasty_grid_about' > 
                <p style={{gridRow:'1', gridColumn:'4', marginBottom:'10%', alignSelf:'center'}}>
                But looking back I realized how important those simple little meals were in giving me just enough energy to finish the day and it made me also realize how there might be adult struggling right now like I was back then. This is why I made Toasty, to give a helping hand to those struggling to find balance in their life and to let them know that there is always a place they can rely on to find a tasty meal.”

                </p>
                <div style={{display:'flex',  gridRow: '1', gridColumn: '2', zIndex:'2', justifyContent: width > 600 ? 'flex-start' : 'center', marginBottom:'30%'}}>
                    <img className='img' alt='Ginny Yu Pasco' 
                    src= 'https://cdn.discordapp.com/attachments/1075543412582924378/1111358833131016243/Half-portrait-Ginny-Gu.jpg'
                    style={{ objectFit:'cover', width: '100%', height: 'auto' }}
                />
                    
                </div>
            </div>
            <ToastyFooter />

        </main>
    )
}

export default Toasty_About