import React from "react";
import Helmet from "react-helmet";
import image from "../../images/cloths.jpg"

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="shortcut icon" href={image} type="image/x-icon" />
    </Helmet>
  );
};

export default MetaData;
