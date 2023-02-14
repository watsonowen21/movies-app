import React from "react";
import { ErrorMessage, Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { addGenre, updateGenre } from "../../store/actions/genre-actions";
import GenreFormValidation from "./GenreFormValidation";

function GenreForm(props) {
  const dispatch = useDispatch();

  let genre = {
    id: -1,
    name: "",
  };

  if (props.item != null) {
    genre = props.item;
  }

  return (
    <Formik
      initialValues={{ id: genre.id, name: genre.name }}
      validationSchema={GenreFormValidation}
      onSubmit={(values, { setSubmitting }) => {
        if (values.id > 0) {
          dispatch(updateGenre(values));
        } else {
          dispatch(addGenre(values));
        }
        setSubmitting(false);
        props.onClose();
      }}
    >
      <Form id="myForm">
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />
      </Form>
    </Formik>
  );
}

export default GenreForm;
