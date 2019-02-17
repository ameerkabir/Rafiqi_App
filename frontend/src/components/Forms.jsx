import React, { Fragment } from "react";
import { withFormik, Form, Field } from "formik";

const FormData = ({ handleBlur, handleChange, values, ...props }) => {
  console.log(props);
  return (
    <Form>
      <div className="form-row align-items-center">
        <div className="col-md-4">
          <label className="sr-only" htmlFor="fullName">
            Full Name
          </label>
          <Field
            name="fullName"
            type="text"
            className="form-control mb-2"
            id="fullName"
            placeholder="Ameer Kabir"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullNmae}
          />
        </div>
        <div className="col-md-4">
          <label className="sr-only" htmlFor="email">
            Email Address
          </label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">@</div>
            </div>
            <Field
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="ameerkabir@yahoo.com"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </div>
        </div>
        <div className="col-md-4">
          <label className="sr-only" htmlFor="age">
            Age
          </label>
          <div className="input-group mb-2">
            <div className="input-group-prepend" />
            <Field
              name="age"
              type="number"
              className="form-control"
              id="age"
              placeholder="ameerkabir@yahoo.com"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.age}
            />
          </div>
        </div>{" "}


        <div className="col-md-4">
          <label className="sr-only" htmlFor="age">
            Current Country of residency
          </label>
          <div className="input-group mb-2">
            <div className="input-group-prepend" />
            <Field
              name="currentCountry"
              type="text"
              className="form-control"
              id="currentCountry"
              placeholder="Syria"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.currentCountry}
            />
          </div>
          </div>

          <div className="col-md-4">
          <label className="sr-only" htmlFor="age">
            Current Country of residency
          </label>
          <div className="input-group mb-2">
            <div className="input-group-prepend" />
            <Field
              name="currentCountry"
              type="text"
              className="form-control"
              id="currentCountry"
              placeholder="Syria"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.currentCountry}
            />
          </div>
          </div>



      </div>


      
      <br />
      



      Highest degree obtained
      <div className="form-row align-items-center">
        <div className="col-md-3 pl-3">
          <Field
            name="bachelor"
            type="checkbox"
            className="form-check-input"
            id="bachelor"
            placeholder="Ameer Kabir"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.bachelor}
          />
          <label className="form-check-label" htmlFor="bachelor">
            Bachelor degree
          </label>
        </div>
      </div>
      <div className="form-row align-items-center">
        <div className="col-md-3 pl-3">
          <Field
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.associateDegree}
            name="associateDegree"
            type="checkbox"
            className="form-check-input"
            id="associateDegree"
            placeholder="Ameer Kabir"
          />
          <label className="form-check-label" htmlFor="associateDegree">
            Associate Degree
          </label>
        </div>
      </div>
      <div className="form-row align-items-center">
        <div className="col-md-4 pl-3">
          <Field
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.masterOrHigher}
            name="masterOrHigher"
            type="checkbox"
            className="form-check-input"
            id="masterOrHigher"
            placeholder="Ameer Kabir"
          />
          <label className="form-check-label" htmlFor="masterOrHigher">
            Master Degree/Higher
          </label>
        </div>
      </div>
      <div className="form-row align-items-center">
        <div className="col-md-2 pl-3">
          <Field
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.noDegree}
            name="noDegree"
            type="checkbox"
            className="form-check-input"
            id="noDegree"
            placeholder="Ameer Kabir"
          />
          <label className="form-check-label" htmlFor="noDegree">
            NO Degree
          </label>
        </div>
      </div>
      <br />
      do you have your own company or business? are you thinking of starting one
      soon?{" "}
      <div className="form-row align-items-center">
        <div className="col-md-3 pl-3">
          <Field
            name="yes"
            type="checkbox"
            className="form-check-input"
            id="yes"
            placeholder="Ameer Kabir"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.yes}
          />
          <label className="form-check-label" htmlFor="yes">
            Bachelor degree
          </label>
        </div>

        <div className="col-md-3 pl-3">
          <Field
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.no}
            name="no"
            type="checkbox"
            className="form-check-input"
            id="no"
            placeholder="Ameer Kabir"
          />
          <label className="form-check-label" htmlFor="no">
            Associate Degree
          </label>
        </div>
      </div>
      <br />
      Assess your job readiness
      <div className="form-row align-items-center">
        <div className="col-md-3 pl-3">
          <Field
            name="lostDomainKnowledge"
            type="checkbox"
            className="form-check-input"
            id="lostDomainKnowledge"
            placeholder="Ameer Kabir"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.lostDomainKnowledge}
          />
          <label className="form-check-label" htmlFor="lostDomainKnowledge">
            I lost all my domain knowledge{" "}
          </label>
        </div>
      </div>
      <div className="form-row align-items-center">
        <div className="col-md-3 pl-3">
          <Field
            name="knowledgeRefresh"
            type="checkbox"
            className="form-check-input"
            id="knowledgeRefresh"
            placeholder="Ameer Kabir"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.knowledgeRefresh}
          />
          <label className="form-check-label" htmlFor="knowledgeRefresh">
            I need to refresh my knowledge
          </label>
        </div>
      </div>
      <div className="form-row align-items-center">
        <div className="col-md-4 pl-3">
          <Field
            name="readyForWork"
            type="checkbox"
            className="form-check-input"
            id="readyForWork"
            placeholder="Ameer Kabir"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.readyForWork}
          />
          <label className="form-check-label" htmlFor="readyForWork">
            My knowledge is intact and I am fully ready for work{" "}
          </label>
        </div>
      </div>
    </Form>
  );
};
const FormikeComponent = withFormik({
  mapPropsToStatus({
    fullNmae,
    email,
    age,
    bachelor,
    associateDegree,
    masterOrHigher,
    noDegree,
    OwnBusinessYes,
    ownBusinessNO,
    lostDomainKnowledge,
    knowledgeRefresh,
    readyForWork,
    currentCountry
  }) {
    return {
      fullNmae: fullNmae || "",
      email: email || "",
      age: age || 0,
      currentCountry: currentCountry || '',
      bachelor: bachelor || false,
      associateDegree: associateDegree || false,
      masterOrHigher: masterOrHigher || false,
      noDegree: noDegree || false,
      ownBusinessNO: ownBusinessNO || false,
      OwnBusinessYes: OwnBusinessYes || false,
      lostDomainKnowledge: lostDomainKnowledge || false,
      knowledgeRefresh: knowledgeRefresh || false,
      readyForWork: readyForWork || false
    };
  }
})(FormData);

export default FormikeComponent;
