import type {FC} from 'react';
import {lazy} from 'react';
import type {ArticleRatingProps} from './ArticleRating';

export const ArtcleRatingAsync = lazy<FC<ArticleRatingProps>>(async () => import('./ArticleRating'));
