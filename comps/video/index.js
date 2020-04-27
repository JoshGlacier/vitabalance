import '~video-react/dist/video-react.css'; // import css
import React from 'react';
import { Player } from 'video-react';
 
export default props => {
  return (
    <Player>
      <source src="Vitabalance.mp4" />
    </Player>
  );
};