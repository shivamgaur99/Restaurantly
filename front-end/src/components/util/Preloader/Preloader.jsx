import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Example for a 1-second delay for preloader
    return () => clearTimeout(timer);
  }, []);

  return loading ? <div id="preloader"></div> : null;
};

export default Preloader;
