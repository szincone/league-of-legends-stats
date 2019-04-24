## Short Reflection
I ran out of time. I did just manage to get the object from my server that I wanted (after 3 seperate league-api calls and iterating through the data to make it the shape that I wanted). It's showing in the console but I did not manage to get it displaying on my app. I was going 100% the entire time, I definitely need to get faster.

## Lessons Learned
This was one of the more fun coding sprints I've done but it is much more complex then it looks once you get into it. 

1. I generally have always just accessed 3rd party APIs through the front-end, this was different and I really like routing it through my server before directly accessing the 3rd party API. It lets you clean up and do a lot of things behind the scenes for the client. It also looks much safer from a security stand-point. 

2. I learned A LOT about league of legends. I had played heros of the storm and dota before(just a few times, dabbled) and lol seems like the moba to go with.

3. The nesting on the API call responses is pretty crazy. I had spent a lot of time preparing by reading the docs and looking at the calls in postman, but actually getting it working on the back-end took a little work. 

I didn't see a different way to do it (like if there is just one endpoint that will give you all of the matches for that summoner) but I had to do 1 api call to get account_id. Then I had to pass that to a different endpoint to get the matches for that account. Then I had to pass those matches through a sort of async loop to get each individual match data.

Just seemed like a lot of steps to get match data for your summoner. This project gets a lot of reps and practice in w/ promises.

## Approach Differently
The time thing really is bugging me. I don't feel like I had any real blockers during the project yet was unable to complete the project. It took me some time to get the basic styling on those 'match cards' because there's some pretty complex nesting going and I spent more time than I would have liked to get those nested league API calls working, but my main issue was I ran out of time.

If I had the chance to do it again, I think I would have relied on 3rd party open-source libraries a little more. I wanted to show what I could do from scratch, but there are some npm packages that will make all of your express boiler-plate for you, and I would have possibly used `LeagueJS` that I briefly looked at during my prep for this sprint as it was mentioned in the spec readme. I feel this could have greatly cut down on my time and given me more time to focus on displaying the data.

## Questions
1. If this was a production application, how would you handle the situation where your application goes over the rate limiting threshold on Riot Games' API?
I think I would add a database. I don't know if the type of database would matter so much, just as long as the database is production grade (I'd probably use postgres). By adding a database, you're ensuring that the users can have access to data if you do manage to get rate-limited.

On the user's initial request, I would make the riot games API call and then save the response to the database.

After the intial request, I'd put some logic in my front-end to stop the riot game api call if there has been a request made in the previous 10 minutes. After 10 minutes, I'd reset my boolean and let the user update their stats by making a fresh riot game api call and reset my 10 minute timer.

2. If you could architect a solution that would work on production at scale, how would you design that system?

I think storing match data on our own database really helps solve a lot of the problems you would face w/ scaling an app like this. Real-time data become the main issue/concern w/ using a database, but it does help free-up a lot of the calls you'd have to be doing w/ the riot games api.

Just to expand on it, since I talked about it a little in the previous question. I would allow the user to make a request to the riot games api for summoner data. 
I would than start a timer on the user (make a timestamp). Then I would add additional logic to prevent the user from making calls to the riot games api if their timer isn't done. If enough time has passed from their time-stamp, I'd allow the user to make an additional riot games api call. Since I'm using my server as a proxy, I would save the riot games api response to our server database. Then if a user wants to make an additional call before the time is up, they can see the same data that is stored in the database.

You could then add aditional functionality to reset the timestamp if the summoner being searched is different than previously searched, or checks against previously searched summoners in the database.

I feel like there's got to be a better solution than this, as it makes real-time data an issue because the timer would prevent it from being updated.