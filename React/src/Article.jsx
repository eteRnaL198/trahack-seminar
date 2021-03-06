import React, {useState} from 'react';
import LikeButton  from './LikeButton';

const Article = (props) => {
    const [isPublished, togglePublished] = useState(false);

    return (
        <div>
            <h2>{props.title}</h2>
            <input type="checkbox" checked={isPublished} id="check" onClick={() => togglePublished(!isPublished)}/>
            <label htmlFor="check">ε¬ιηΆζ:</label>
            <LikeButton />
        </div>
    )
};

export default Article;
