import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useMoviesDetailsApi from 'services/moviesDetailsAPI';
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
} from './Reviews.styled';
import TitleTemplate from 'components/TitleTemplate/TitleTemplate';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';
function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  const metodsForMovieDetails = useMoviesDetailsApi();

  useEffect(() => {
    metodsForMovieDetails
      .getMoviesReviews(movieId)
      .then(({ results }) => {
        setReviews(results);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {});
  }, []);

  if (!reviews) {
    console.log('reviews:', reviews);
    return (
      <SectionTemplate>
        <h3>Sorry! There are no reviews!</h3>
      </SectionTemplate>
    );
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
export default Reviews;
