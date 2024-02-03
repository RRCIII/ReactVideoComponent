/* eslint-disable react/prop-types */
import { Box} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import VideoCard from "./VideoCard";



const VideoVotes = ({ videoId, setBlurById, setBlurValue }) => {
  const [hasVoted, setHasVoted] = useState(false);
  const [likedVideoId, setLikedVideoId] = useState(null);
 
 
  useEffect(() => {
    // Retrieve data from local storage when the component mounts
    const likedVideoIdStored = parseInt(localStorage.getItem("likedVideoId")); 
    if (likedVideoIdStored === videoId) {
      setHasVoted(true);
      setLikedVideoId(likedVideoIdStored);

    }
  }, [videoId]);



// liked video
  const handleLikeClick = () => {
    console.log("liked");
    if (likedVideoId && likedVideoId !== videoId) {
      alert(
        "You must unlike the currently liked video before voting for a new one."
      );
      return;
    }

    const confirmation = window.confirm(
      `You are selecting video: ${videoId} for your vote. Do you want to confirm your vote?`
    );

    if (confirmation) {
      let lastVoteDate = localStorage.getItem("lastVoteDate");
      let today = new Date().toLocaleDateString();
      
      if (lastVoteDate !== today ) {
        localStorage.setItem(`vote_${videoId}`, "true");
        localStorage.setItem("lastVoteDate", today);
        localStorage.setItem("likedVideoId", videoId);
        setHasVoted(true);
        setLikedVideoId(videoId);
        setBlurById(videoId);
        setBlurValue(0);
        alert("Vote confirmed!");
        
        } 
      }

    
  };

  // unliked video
  const handleUnlikeClick = () => {
    console.log("Unlike");
  

    let lastVoteDate = localStorage.getItem("lastVoteDate");
    let today = new Date().toLocaleDateString();

    if (lastVoteDate === today ) {
      localStorage.removeItem(`vote_${videoId}`);
      localStorage.removeItem("lastVoteDate");
      localStorage.removeItem("likedVideoId");
      setHasVoted(false);
      setLikedVideoId(null);
      setBlurById(videoId);
      setBlurValue(6);
      alert("Vote removed!");
    }
  };

  

  return (
    
    <Box>
     
      {hasVoted && (
        <button onClick={handleUnlikeClick} 
        
        >
          <FaHeart color={likedVideoId === videoId ? "white" : "black"} />
          <span> UnLike</span>
        </button>
      )}

      {!hasVoted && (
        <button onClick={handleLikeClick}
        
        >
          <FaHeart color={likedVideoId === videoId ? "white" : "black"} />
          <span> Like</span>
        </button>
      )}

      {hasVoted && <p>You have already voted for this video today.</p>}
    
    </Box>
  );

};



export default VideoVotes;
