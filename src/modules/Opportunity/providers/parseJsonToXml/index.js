import xmlparse from 'js2xmlparser';

export default (description, data) => {
  return xmlparse.parse(description, data);
};
