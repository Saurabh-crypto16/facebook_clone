import React from 'react'
import "./StoryReel.css"
import "./Story";
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/330px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/330px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg"
            title="Steve Jobs"/> 
            <Story 
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Indian_actor_Amitabh_Bachchan.jpg/330px-Indian_actor_Amitabh_Bachchan.jpg"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Indian_actor_Amitabh_Bachchan.jpg/330px-Indian_actor_Amitabh_Bachchan.jpg"
            title="Amitabh Bacchan"/> 
            <Story 
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg/330px-Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg/330px-Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg"
            title="The Rock"/> 
            <Story 
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg/390px-The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg/390px-The_cricket_legend_Sachin_Tendulkar_at_the_Oval_Maidan_in_Mumbai_During_the_Duke_and_Duchess_of_Cambridge_Visit%2826271019082%29.jpg"
            title="Sachin Tendulkar"/> 
            <Story 
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Two_dancers.jpg/330px-Two_dancers.jpg"
            profileSrc="https://upload.wikimedia.org/wikipedia/commons/7/7f/Daniel_Craig_-_Film_Premiere_%22Spectre%22_007_-_on_the_Red_Carpet_in_Berlin_%2822387409720%29_%28cropped%29.jpg"
            title="James Bond"/>        
        </div>
    )
}

export default StoryReel
