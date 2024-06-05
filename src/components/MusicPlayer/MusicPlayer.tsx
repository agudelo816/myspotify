import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js'; // Import CryptoJS for decryption

const MusicPlayer = ({ musicId }: { musicId: string }) => {
  const [musicData, setMusicData] = useState('');
  const [decryptedMusicSrc, setDecryptedMusicSrc] = useState('');

  useEffect(() => {
    const fetchMusicData = async () => {
      try {
        const response = await axios.get(`/api/music/${musicId}`);
        setMusicData(response.data);
      } catch (error) {
        console.error('Error fetching encrypted music:', error);
      }
    };

    fetchMusicData();
  }, [musicId]);

  useEffect(() => {
    if (musicData) {
      // Decrypt the music data here
      const decryptedData = CryptoJS.AES.decrypt(musicData, 'encryptionKey');
      const decryptedSrc = URL.createObjectURL(
        new Blob([decryptedData.toString(CryptoJS.enc.Utf8)], {
          type: 'audio/mpeg',
        })
      );
      setDecryptedMusicSrc(decryptedSrc);
    }
  }, [musicData]);

  return (
    <div>
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
