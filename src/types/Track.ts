export interface Track {
  title: string;
  artist: string;
  duration: string;
  releaseDate: string;
  formats: { type: string; size: string }[];
}
