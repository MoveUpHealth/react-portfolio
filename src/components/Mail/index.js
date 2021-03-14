import React from "react";

const Mailto = ({ className, email, subject = '', contactName='', contactEmail='', body = '', children }) => {
    let params = subject || contactName || contactEmail || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (contactName || contactEmail || body) params += `${subject ? '&' : ''}body=${encodeURIComponent([contactName, contactEmail, body])}`;
  
    return <a href={`mailto:${email}${params}`} className={className}>{children}</a>;
};

export default Mailto