import React from "react";
import { ErrorMessage, Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateGenre } from "../../store/actions/genre-actions";

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
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(updateGenre(values));
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
