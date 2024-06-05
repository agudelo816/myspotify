export const byYouData: ButtonData[] = [
  {
    label: 'Item 1 by You',
    onClick: () => console.log('Clicked Item 1 by You'),
  },
  {
    label: 'Item 2 by You',
    onClick: () => console.log('Clicked Item 2 by You'),
  },
  {
    label: 'Item 3 by You',
    onClick: () => console.log('Clicked Item 3 by You'),
  },
];

// Sample data for "By Spotify" button
export const spotifyData: ButtonData[] = [
  {
    label: 'Item 1 by Spotify',
    onClick: () => console.log('Clicked Item 1 by Spotify'),
  },
  {
    label: 'Item 2 by Spotify',
    onClick: () => console.log('Clicked Item 2 by Spotify'),
  },
  {
    label: 'Item 3 by Spotify',
    onClick: () => console.log('Clicked Item 3 by Spotify'),
  },
];

// Sample data for "Download" button
export const downloadData: ButtonData[] = [
  {
    label: 'Download Item 1',
    onClick: () => console.log('Clicked Download Item 1'),
  },
  {
    label: 'Download Item 2',
    onClick: () => console.log('Clicked Download Item 2'),
  },
  {
    label: 'Download Item 3',
    onClick: () => console.log('Clicked Download Item 3'),
  },
];

export const playlistsData: ButtonData[] = [
  { label: 'Playlist 1', onClick: () => console.log('Clicked Playlist 1') },
  { label: 'Playlist 2', onClick: () => console.log('Clicked Playlist 2') },
  { label: 'Playlist 3', onClick: () => console.log('Clicked Playlist 3') },
];

export interface ButtonData {
  label: string;
  onClick: () => void;
}
