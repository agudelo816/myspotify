export interface Track {
  musicId: string;
  title: string;
  artist: string;
  duration: string;
  releaseDate: string;
  formats: { type: string; size: string }[];
}
