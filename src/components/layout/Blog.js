
import React, { Component } from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import './blog.css'


export default class Blog extends Component {
    render() {
        return (
            <CardDeck>
                <Card style={{ height: '50rem' }}>
                    <Card.Img style={{height:'15rem'}} variant="top" src="https://d.wildapricot.net/images/default-album/how-to-get-donations.jpg" />
                    <Card.Body>
                        <Card.Title>My First Blog<br /> KIDNEY DONATION AND FUNDRAISING</Card.Title>
                        <Card.Text>
                            Dec 7, 2017 <br />

            A donated kidney is an organ that is removed from a donor (a living or deceased person) and surgically implanted in a person with kidney failure.
A person can live with one healthy kidney. When both kidneys fail, the person must have dialysis or a kidney transplant to survive. A donated kidney can come from a living or deceased donor. The donated kidney is surgically implanted into the patient with kidney failure. The living donor can live a healthy life with his or her remaining kidney.
About 50,000 people in Nepal are waiting for a kidney transplant. Getting an organ from a living donor offers the best chance at a healthy life for those waiting for a new kidney. Approximately 6,000 people a year choose to donate one of their kidneys — sometimes to a family member and sometimes to a total stranger.
            </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"></small>
                    </Card.Footer>
                </Card>
                <Card style={{ height: '55rem' }}>
                    <Card.Img style={{height:'10rem'}} variant="top" src="https://assets.zana.com/source/people/donate-kidney.jpg" />
                    <Card.Body>
                        <Card.Title>Second Blog Post <br /> YOUR GIFT CAN GIVE SOMEONE NEW LIFE</Card.Title>
                        <Card.Text>  Dec 7, 2017 <br />
            “You were born with the ability to change someone’s life. Don’t ever waste it.” We often hear that we must help ourselves before we can help someone else, and to some extent I believe that to be true. I am talking about helping others by donating a kidney.People might scared hearing this thing and they may have belief that they may die with one kidney, people do not want to donate. But this is not true.People easily can live with one kidney.They why donot we donate?We help? I also find it to be true that one of the best ways to help ourselves is to donate to help others.
You don’t have to take my word for it, there is tremendous amounts of research that have proven that saving someone’s life and being kind will make you happier and healthier. “People who donate tend to have higher self-esteem, psycholgical well-being, and happiness,” Mark Snyder, a psychologist and head of the Center for the Study of the Individual and Society at the University of Minnesota says. “All of these things go up as their feelings of social connectedness goes up, which in reality, it does. It also improves their health and even their longevity.”

            </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card style={{ height: '80rem' }}>
                    <Card.Img variant="top" src="https://i.pinimg.com/236x/b9/df/bc/b9dfbca558924ab38b3e74fbd4f4312b--knitting-business-cards-business-cards-handmade.jpg" />
                    <Card.Body>
                        <Card.Title>Third Blog Post <br />
I HAVE SAVED HIS LIFE.YOU CAN BE A NEXT DONOR?</Card.Title>
                        <Card.Text> february12, 2020 <br/>
                            This is something that we face, and it is amazing, just amazing that in this day and age medical science has gotten to that place where they can take an organ out of one person’s body and put it into another person’s body and save that person’s life, or extend that person’s life, or improve their life.It’s an amazing thing, but it’s a personal decision for everybody.
                            I’m not trying to persuade anybody either way here, because it is a personal decision, but I’m just trying to say, do unto others as you’d have them do unto you.
                            My personal feeling is it’s not a sin to be a kidney donor. It’s actually a virtuous thing. When you think about it, it’s not really that big of a sacrifice on your part. I mean, you can aslo u live with one kidney. Science has proven that you can live longer with one kidney.Right? But very valuable to anyone who receives the benefit of your kidney.
                            I want to share you my story. He was unknown to me. I never met him before. I first met him in the hospital I was there for my regular health checkup. I saw him sad sitting in the canteen of the hospital with his wife and crying . I asked them what has happened. They told me their story that his wife kidney didnot matched.Now he has to loss his life . I had tears when i listen to them. I reserched about this donation. I met the doctors and consult with them. I found out with my research that we can live with one kidney. I contact him aferthat we make an appointment with the doctors.Our kidney matched. Then I decide to give him this gift to save his life .
                            Finally all the process done out well. We both are happy and healthyy now and good friends too. My gift gave him a new life. Then why cannot you?
            </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>

        );
    }
}
