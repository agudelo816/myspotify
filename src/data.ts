export const byYouData: ButtonData[] = [
  {
    label: 'Item 1 by You',
    onClick: () => console.log('Clicked Item 1 by You'),
    musicId: 'byYou_Item1', // Add musicId property
  },
  {
    label: 'Item 2 by You',
    onClick: () => console.log('Clicked Item 2 by You'),
    musicId: 'byYou_Item2', // Add musicId property
  },
  {
    label: 'Item 3 by You',
    onClick: () => console.log('Clicked Item 3 by You'),
    musicId: 'byYou_Item3', // Add musicId property
  },
];

// Sample data for "By Spotify" button
export const spotifyData: ButtonData[] = [
  {
    label: 'Item 1 by Spotify',
    onClick: () => console.log('Clicked Item 1 by Spotify'),
    musicId: 'spotify_Item1', // Add musicId property
  },
  {
    label: 'Item 2 by Spotify',
    onClick: () => console.log('Clicked Item 2 by Spotify'),
    musicId: 'spotify_Item2', // Add musicId property
  },
  {
    label: 'Item 3 by Spotify',
    onClick: () => console.log('Clicked Item 3 by Spotify'),
    musicId: 'spotify_Item3', // Add musicId property
  },
];

// Sample data for "Download" button
export const downloadData: ButtonData[] = [
  {
    label: 'Download Item 1',
    onClick: () => console.log('Clicked Download Item 1'),
    musicId: 'download_Item1', // Add musicId property
  },
  {
    label: 'Download Item 2',
    onClick: () => console.log('Clicked Download Item 2'),
    musicId: 'download_Item2', // Add musicId property
  },
  {
    label: 'Download Item 3',
    onClick: () => console.log('Clicked Download Item 3'),
    musicId: 'download_Item3', // Add musicId property
  },
];

export const playlistsData: ButtonData[] = [
  {
    label: 'Playlist 1',
    onClick: () => console.log('Clicked Playlist 1'),
    musicId: 'playlist_1',
  }, // Add musicId property
  {
    label: 'Playlist 2',
    onClick: () => console.log('Clicked Playlist 2'),
    musicId: 'playlist_2',
  }, // Add musicId property
  {
    label: 'Playlist 3',
    onClick: () => console.log('Clicked Playlist 3'),
    musicId: 'playlist_3',
  }, // Add musicId property
];

export interface ButtonData {
  label: string;
  onClick: () => void;
  musicId: string; // Add musicId property to ButtonData interface
}
