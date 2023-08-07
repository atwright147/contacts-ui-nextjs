import { FC } from 'react';
import { Comment } from '../../../types/comment.type';
import styles from './Comments.module.scss';

interface Props {
  comments: Comment[]
}

export const Comments: FC<Props> = ({ comments }): JSX.Element => {
  return (
    <ul className={styles.comments}>
      {comments.map((comment) => (
        <li key={comment.id} className={styles.comment}>
          {comment.comment}
        </li>
      ))}
    </ul>
  );
}
