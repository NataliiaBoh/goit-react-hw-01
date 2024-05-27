import css from "./Profile.module.css";

const Profile = ({
  key,
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div className={css.imageWrap}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.paragraph}>@{tag}</p>
        <p className={css.paragraph}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span className={css.statsText}>Followers</span>
          <span className={css.statsValue}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsText}>Views</span>
          <span className={css.statsValue}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsText}>Likes</span>
          <span className={css.statsValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

// const Profile = ({
//   key,
//   username,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// }) => {
//   return (
//     <div className={css.container}>
//       <div className={css.imageWrap}>
//         <img className={css.image} src={avatar} alt="User avatar" width="150" />
//         <p className={css.userName}>{username}</p>
//         <p className={css.tag}>{tag}</p>
//         <p className={css.location}>{location}</p>
//       </div>
//       <ul className={css.statsList}>
//         <li className={css.statsItem}>
//           <span className={css.statsText}>Followers</span>
//           <span className={css.statsValue}>{followers}</span>
//         </li>
//         <li className={css.statsItem}>
//           <span className={css.statsText}>Views</span>
//           <span className={css.statsValue}>{views}</span>
//         </li>
//         <li className={css.statsItem}>
//           <span className={css.statsText}>Likes</span>
//           <span className={css.statsValue}>{likes}</span>
//         </li>
//       </ul>
//     </div>
//   );
// };
export default Profile;
