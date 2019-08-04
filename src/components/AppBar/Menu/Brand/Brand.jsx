import React from 'react';

const Brand = props => {
  let brandClasses = 'menu-branding';
  if (props.brandShow) {
    brandClasses = 'menu-branding show';
  }
  return (
    <React.Fragment>
      <div className={brandClasses}>
        <div className="portrait" />
      </div>
    </React.Fragment>
  );
};

export default Brand;
