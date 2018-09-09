# PennAppsXVIII

## Inspiration

By the end of the first night of PennAppsXVIII, the WolfPackk we were tired of ideation without creation. After splitting up and taking walks alone on the dark, rainy streets of Philly, WolfPackk was born. Thinking about how dangerous it could be to be walking alone some days, we felt compelled to address the issue and open opportunities for the community to engage closer to one another with an app that would bring those with similar destinations together. Why travel alone when you could make a new friend? 

## What it does

WolfPackk is an application that allows you to find a walking partner when you are heading home alone to help you feel more safe. The application takes in your destination and compares it to others who are close to you and could potentially take the trip with you. Our self-designed comparison algorithm selects the person who it makes most sense for you to walk with. The locations of both walkers is then sent to another in-house path-finding algorithm to find the optimal location to meet.

Although WolfPackk was designed to protect users, publishing your current location when you are alone has the potential of causing a much more severe security threat. To keep the platform safe, only students with a valid @upenn.edu email accounts are allowed to create accounts. Those users must activate their account to make sure they have access to that email before they are allowed into the system.

## How we built it

The frontend was built using Facebook's **React Native**. These apps are compatible with both Android and IOS operating systems. The interface layout was designed using **BuilderX**. The maps and map information are provided by a variety of **Google Maps API**. The front-end then sends POST and GET requests to the backend to connect with other users. The backend is coded in **Python** using the **Flask** microframework. This server is being hosted on **AWS's Elastic Beanstalk**.

## Challenges we ran into

Designing algorithms that would consistently and accurately select the best partner and location to meet caused us lots of difficulty as there were (what seem to be) infinite edge cases. We were determined to ensure that our algorithm was prepared for whatever possible configuration of starting locations and destinations were thrown at it. The spherical shape of the earth added another layer of complexity to these algorithms. This resulted in the latitude and longitude locations having to be processed in order to produce accurate results. 

## Accomplishments that we're proud of

the name. the logo. the project.

## What we learned

Our team learned how to properly balance the backend and frontend roles to accomplish our goals in the most straightforward and fool-proof way possible. This came along with learning how to use a custom domain name from Domain.com and hosting both our [showcase website](https://wolfpackk.com) and our backend server. We also learned many models of Earth's curvature to find the most accurate route and meeting point.

## What's next for WolfPackk

Some potential routes WolfPackk might take in the future include: the future integration of AR technology to better guide the user through routes, identify others who are on the same route in real time, and generating easier ways for people for find each other once they are in the same vicinity. We predict *companion-pairing platforms* will become more prominent in coming years as the concept is promising.
