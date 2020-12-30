import GetOpportunitiesPipe from './services/GetOpportunitiesPipe';

export default async () => {
  try {
    return GetOpportunitiesPipe();
  } catch (error) {
    console.error(error);
    return error;
  }
};
