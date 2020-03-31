import React from 'react';
import styles from './SocialCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialCard = (props) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.avatar}
        src={props.avatarLink}
        alt="Avatar"
      />
      <div className={styles.messageContainer}>
        <h3>
          {props.displayName}
          <span>{props.username} * {props.postDate}</span>
        </h3>
        <p>{props.message}</p>
        {props.imageLink ?
          <img
            className={styles.imageLink}
            alt={props.imageLinkAlt}
            src={props.imageLink}
          /> :
          ''
        }

        <div className={styles.widgetsContainer}>

          {/* Comment */}
          <FontAwesomeIcon
            icon={faComment}
            onClick={props.commentClick}
            className={props.userCommented ? styles.blue : ''}
          />
          <span
            className={props.userCommented ? styles.commented : styles.widgetText}
            > {props.comments}
          </span>

          {/* Share */}
          <FontAwesomeIcon
            icon={faRetweet}
            onClick={props.shareClick}
            className={props.userShared ? styles.green : ''}
          />
          <span
            className={props.userShared ? styles.shared : styles.widgetText}
            > {props.shares}
          </span>

          {/* Like */}
          <FontAwesomeIcon
            icon={faHeart}
            onClick={props.likeClick}
            className={props.userLiked ? styles.red : ''}
          />
          <span
            className={props.userLiked ? styles.liked : styles.widgetText}
            > {props.likes}
          </span>

          {/* Email */}
          <a href={`mailto:${props.emailAddress}`}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SocialCard;
