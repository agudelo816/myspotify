import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';

const MusicPlayer = ({ musicId }: { musicId: string }) => {
  const [musicData, setMusicData] = useState('');
  const [decryptedMusicSrc, setDecryptedMusicSrc] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMusicData = async () => {
      try {
        const response = await axios.get(`/api/music/${musicId}`);
        setMusicData(response.data);
      } catch (error) {
        console.error('Error fetching encrypted music:', error);
        setError('Failed to fetch music data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMusicData();
  }, [musicId]);

  useEffect(() => {
    if (musicData) {
      try {
        const decryptedData = CryptoJS.AES.decrypt(musicData, 'encryptionKey');
        const decryptedSrc = URL.createObjectURL(
          new Blob([decryptedData.toString(CryptoJS.enc.Utf8)], {
            type: 'audio/mpeg',
          })
        );
        setDecryptedMusicSrc(decryptedSrc);
      } catch (error) {
        console.error('Error decrypting music data:', error);
        setError('Failed to decrypt music data.');
      }
    }
  }, [musicData]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {decryptedMusicSrc && (
        <audio controls>
          <source src={decryptedMusicSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default MusicPlayer;
