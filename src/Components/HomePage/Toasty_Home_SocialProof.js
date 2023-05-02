import React, { useEffect, useState } from 'react'
import Toasty_SocialProof_Quotes from './Toasty_SocialProof_Quotes '
import useWindowSize from '../../Hooks/useWindowSize';

/*
Toasty Home page social Proof Component block
*/
const Toasty_Home_Socialproof = () => {
    const {width} = useWindowSize();// decoupling of data
    const quotes = [
        {  
            name:'Nana', 
            job:'Delivery Driver',
            quote:'“Highly Recommend their sandwiches of the day! It tastes personal and fresh like home cooking.” ',
            imgSrc:'https://cdn.discordapp.com/attachments/1075543412582924378/1084892660810121324/medium-shot-smiley-man-wearing-trucker-hat.jpg'  
        },
        {
            name:'Penny',
            job:'Student',
            quote:'“I can always count on Toasty to be tasty and filling, especially when im busy studying.”',
            imgSrc:'https://cdn.discordapp.com/attachments/1075543412582924378/1084883874800226335/portrait-young-student-happy-be-back-university.jpg'
        },
        {
            name:'Rumi',
            job:'Hair Stylist',
            quote:'“When I lack the energy to cook after work, Toasty is the best place to find a good meal to end the day! Their sandwiches are amazing!”',
            imgSrc:'https://cdn.discordapp.com/attachments/1075543412582924378/1084892456878878800/portrait-young-woman-smiling-street.jpg'
        }
    ]
    const [show, setShow] = useState(false);
    const [person, setPerson] = useState({
        index:0,
        cycle:0
    });

    //Toggles the show state for the Bread Quote's rotation and also for the next person's quote for an indefinite period
    useEffect(()=> {
        setTimeout(()=>{
            setShow(!show);
            if(person.index == 2 && person.cycle ==3 ) {
                //If index is 2 and the cycle is 3, restart the entire object back to 0
                setPerson({index:0, cycle: 0 })
            }
            else if(person.index == 2 && person.cycle < 3){
                //if index is 2 but the cycle is less than 3, keep index the same, but increase cycle
                setPerson({index:person.index, cycle: person.cycle + 1 })
            }
            else if(person.index < 2 && person.cycle == 3){
                //if index is less than 2 but the cycle is equaled to 3, increase index, and restart cycle
                setPerson({index:person.index + 1, cycle:0})
            }
            else {
                //if none of the above are true than the index is less than 2 and the cycle has not been completed thus increase the cycle
                setPerson({index:person.index, cycle: person.cycle + 1});
            }
        }, 1000)
    },[show])


  return (
    <div className='toasty_grid_home_socialProof'>
        <p className='comment' style={{gridRow: '2', gridColumn: '3/ span 3', textAlign:'center'}}>
            Thank you for visiting!
        </p>
        {width >= 700 ?
            <div style={{ display:'flex', gridRow: '4 / span 3', gridColumn: '2 / span 2', zIndex:'-1',transform: show ? 'rotate(-12deg)' : 'rotate(-6deg)', marginRight:'10%', aspectRatio:'1/1'}}>
            <Toasty_SocialProof_Quotes 
                name= {quotes[0].name}
                job={quotes[0].job}
                quote={quotes[0].quote}
                imgSrc={quotes[0].imgSrc}
            />
            </div>
            :''
        }
        {width >= 700 ?
            <div style={{ display:'flex', gridRow: '4 / span 3', gridColumn: '5 / span 2', zIndex:'-1',transform: show ? 'rotate(12deg)' : 'rotate(6deg)', marginLeft:'10%', aspectRatio:'1/1'}}>
            <Toasty_SocialProof_Quotes 
                name= {quotes[1].name}
                job={quotes[1].job}
                quote={quotes[1].quote}
                imgSrc={quotes[1].imgSrc}
            />
            </div>
            :''
        }
        {width >= 700 ?
            <div style={{ display:'flex', gridRow: '4 / span 3', gridColumn: '3 / span 3', zIndex:'-1', aspectRatio:'1/1', marginLeft:'5%', marginRight:'5%', transform: show ? 'rotate(5deg)' : 'rotate(-5deg)' }}>
                <Toasty_SocialProof_Quotes
                    name= {quotes[2].name}
                    job={quotes[2].job}
                    quote={quotes[2].quote}
                    imgSrc={quotes[2].imgSrc}
                />
            </div>
            :""
        }
        {width < 700 ?
            <div style={{ display:'flex', gridRow: '4 / span 3', gridColumn: '3 / span 3', zIndex:'-1', aspectRatio:'1/1', marginLeft:'5%', marginRight:'5%', transform: show ? 'rotate(5deg)' : 'rotate(-5deg)'}}>
                <Toasty_SocialProof_Quotes
                    name= {quotes[person.index].name}
                    job={quotes[person.index].job}
                    quote={quotes[person.index].quote}
                    imgSrc={quotes[person.index].imgSrc}
                />
            </div>
            :""
        }
        
        
        <div style={{ gridRow: '5/ span 2', gridColumn: '1 / span 7',
            display:'grid',
            gridTemplateColumns:'1fr',
            gridTemplateRows:'1fr 2fr 1fr 1.5fr .05fr 0.5fr',
            zIndex:'1'
        }}>
            <div style={{ display:'flex', flexDirection:'column-reverse', gridRow: '4 /span 2', gridColumn: '1', verticalAlign:'bottom'}}>
                <svg style={{ display:'block'}} preserveAspectRatio='none' viewBox="0 0 1440 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.7413C283.687 -19.6043 377.635 13.4341 711.352 52.2028C714.383 52.5548 717.594 52.5597 720.626 52.2133C1059.47 13.4894 1221.99 -14.1322 1440 13.7413V130.241H0L0 13.7413Z" fill="#F0F8FF"/>
                </svg>
            </div>
            <div style={{backgroundColor:'aliceblue',gridRow: '5 / span 2', gridColumn: '1' }}></div>

        </div>
        <div style={{backgroundColor:'orange', gridColumn:'1 / span 7', gridRow:'1 / span 9', zIndex:'-2'}}></div>

    </div> 
  )
}

export default Toasty_Home_Socialproof