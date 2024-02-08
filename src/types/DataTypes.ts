
export type RatingData = {
    codeChef: number;
    codeForces: number;
    leetCode: number;
}

export type codeForcesApiResData = {
  contestId: number;
  contestName: string;
  handle: string;
  rank: number;
  ratingUpdateTimeSeconds: number;
  oldRating: number;
  newRating: number;
};

export type leetCodeApiResData = {
  rating: number;
}