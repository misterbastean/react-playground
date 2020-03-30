import React, { Component } from 'react';
import './App.css';

// Components
import SocialCard from './components/SocialCard/SocialCard';

// Fake Data
const tweets = [
  {
    id: "sfghbdfgndfg",
    avatarLink: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",
    displayName: "Dr. Josh Bastean",
    username: "@misterbastean",
    postDate: "Mar 28",
    message: "React is pretty awesome...",
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    imageLinkAlt: "React icon",
    comments: 10,
    shares: 25,
    likes: 1000,
    emailAddress: "misterbastean@gmail.com",
    userCommented: false,
    userShared: false,
    userLiked: false
  },
  {
    id: "4w56v45wvw4",
    avatarLink: "https://i.ya-webdesign.com/images/png-avatar-4.png",
    displayName: "The Bearded Man",
    username: "@beards",
    postDate: "Mar 29",
    message: "Not as awesome as facial hair",
    imageLink: "https://images.askmen.com/1080x540/2016/08/12-020451-why_you_shouldn_t_grow_a_massive_beard.jpg",
    imageLinkAlt: "Awesome beard",
    comments: 5,
    shares: 2,
    likes: 1,
    emailAddress: "misterbastean@gmail.com",
    userCommented: true,
    userShared: false,
    userLiked: false
  },
  {
    id: "s9ud8g98sdf",
    avatarLink: "https://image.flaticon.com/icons/png/512/194/194938.png",
    displayName: "Kim Bastean",
    username: "@thebasteans",
    postDate: "Mar 30",
    message: "Beards tickle",
    imageLink: null,
    imageLinkAlt: null,
    comments: 3,
    shares: 20,
    likes: 17,
    emailAddress: "thebasteans@gmail.com",
    userCommented: false,
    userShared: true,
    userLiked: true
  },
  {
    id: "3v6yeb56ur5yjbr",
    avatarLink: "https://image.flaticon.com/icons/png/512/194/194938.png",
    displayName: "Kim Bastean",
    username: "@thebasteans",
    postDate: "Mar 30",
    message: "Josh is amazing",
    imageLink: null,
    imageLinkAlt: null,
    comments: 3,
    shares: 20,
    likes: 17,
    emailAddress: "thebasteans@gmail.com",
    userCommented: false,
    userShared: true,
    userLiked: true
  }
]

class App extends Component {
  state = {
    tweets
  }

  //================
  // Click Methods
  //================

  commentHandler = (tweet, i) => {
    let commentCount;
    if (tweet.userCommented) {
      commentCount = tweet.comments - 1;
    } else {
      commentCount = tweet.comments + 1;
    }
    const userCommented = !tweet.userCommented
    const updatedTweet = { ...tweet, comments: commentCount, userCommented }
    const tweets = [...this.state.tweets]
    tweets[i] = updatedTweet
    this.setState({
      tweets
    })
  }

  shareHandler = (tweet, i) => {
    let shareCount;
    if (tweet.userShared) {
      shareCount = tweet.shares - 1;
    } else {
      shareCount = tweet.shares + 1;
    }
    const userShared = !tweet.userShared
    const updatedTweet = { ...tweet, shares: shareCount, userShared }
    const tweets = [...this.state.tweets]
    tweets[i] = updatedTweet
    this.setState({
      tweets
    });
  }

  likeHandler = (tweet, i) => {
    console.log("likehandler fired");
    let likeCount;
    if (tweet.userLiked) {
      likeCount = tweet.likes - 1;
    } else {
      likeCount = tweet.likes + 1;
    }
    const userLiked = !tweet.userLiked
    const updatedTweet = { ...tweet, likes: likeCount, userLiked }
    const tweets = [...this.state.tweets]
    tweets[i] = updatedTweet;
    this.setState({
      tweets
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.tweets.map((tweet, i) => {
          return <SocialCard
            key={tweet.id}
            avatarLink={tweet.avatarLink}
            displayName={tweet.displayName}
            postDate={tweet.postDate}
            username={tweet.username}
            message={tweet.message}
            imageLink={tweet.imageLink}
            comments={tweet.comments}
            shares={tweet.shares}
            likes={tweet.likes}
            emailAddress={tweet.emailAddress}
            likeClick={() => this.likeHandler(tweet, i)}
            shareClick={() => this.shareHandler(tweet, i)}
            commentClick={() => this.commentHandler(tweet, i)}
            userCommented={tweet.userCommented}
            userShared={tweet.userShared}
            userLiked={tweet.userLiked}
          />
        })}

      </div>
    );
  }
}

export default App;
