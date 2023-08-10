import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTvDetailsApi from 'services/tvDetailsAPI';
import {
  Wrapper,
  ReviewsWrap,
  AuthorWrap,
  PhotoWrap,
  Photo,
  NoPhoto,
  AuthorName,
  AuthorRating,
  ReviewText,
} from './ReviewsTv.styled';
import TitleTemplate from 'components/TitleTemplate/TitleTemplate';

function ReviewsTv() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  const metodsForMovieDetails = useTvDetailsApi();

  useEffect(() => {
    metodsForMovieDetails
      .getTvReviews(movieId)
      .then(({ results }) => {
        setReviews(results);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {});
  }, []);

  if (!reviews) {
    return;
  }

  return (
    <>
      <TitleTemplate>Reviews</TitleTemplate>
      <Wrapper>
        {reviews.map(({ id, author, author_details, content }) => (
          <ReviewsWrap key={id}>
            {author_details.rating ? (
              <AuthorRating>{author_details.rating}/10</AuthorRating>
            ) : null}
            <AuthorWrap>
              <PhotoWrap>
                {author_details.avatar_path ? (
                  <Photo
                    src={`http://image.tmdb.org/t/p/w200${author_details.avatar_path}`}
                    alt={author}
                  />
                ) : (
                  <NoPhoto />
                )}
              </PhotoWrap>
              <AuthorName>{author}</AuthorName>
            </AuthorWrap>
            <ReviewText>{content}</ReviewText>
          </ReviewsWrap>
        ))}
      </Wrapper>
    </>
  );
}
export default ReviewsTv;
