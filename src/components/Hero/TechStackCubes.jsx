import React from 'react';

const TechStackCubes = ({ source }) => {
  if (!source) {
    return <div>Loading...</div>;
  }

  const src = source;
  return (
    // basic bootstrap classes. you can change with yours.
    <div className="col-md-12">
      <div className="emdeb-responsive">
        <iframe src={src}></iframe>
      </div>
    </div>
  );
};

export default TechStackCubes;
