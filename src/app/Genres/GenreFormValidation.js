import * as yup from "yup";

const GenreFormValidation = () => {
  return yup.object().shape({
    name: yup.string().required("Required").label("Name"),
  });
};

export default GenreFormValidation;
