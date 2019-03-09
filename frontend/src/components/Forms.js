import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { steps } from "./Steps";
import { RadioButtonGroup, RadioButton } from "./radioButtons";

const educationAndWorkBackgroundOptions = [
  { label: "IT support and Networking", value: "itSupportAndNetworking" },
  {
    label: "Web Mobile Software Development",
    value: "webMobileSoftwareDevelopment"
  },
  { label: "Artificial Intelligence", value: "ArtificialIntelligence" },
  { label: "Healthcare Professional", value: "HealthCareProfessional" },
  { label: "None IT Engineer", value: "noneItEngineer" },
  {
    label: "Skilled Trades(houseKeeper, plummer, electrician, agriculture)",
    value: "skilledTrades"
  },
  { label: "Teaching", value: "teaching" },
  { label: "Digital Marketing", value: "digitalMarketing" },
  { label: "Sales Customer Service", value: "salesCustomerService" },
  {
    label: "Artist & Creative Vocations(painter, poet)",
    value: "artistAndCreative"
  },
  {
    label: "Content Manger(Writer, translator, content creator)",
    value: "contentManger"
  },
  { label: "Legal", value: "legal" },
  { label: "Political & Social Science", value: "politicalAndSocialScience" },
  { label: "Social Worker", value: "socialWorker" },
  { label: "Accounting And Finance", value: "accountingAndFinance" },
  { label: "Business And Management", value: "businessAndManagement" },
  { label: "Scientific Research", value: "scientificResearch" },
  { label: "Research Others", value: "researchOthers" },
  { label: "Others", value: "others" }
];
const GetFormOption = () => {
  return educationAndWorkBackgroundOptions.map((item, id) => {
    return (
      <option key={id} value={item.value}>
        {item.label}
      </option>
    );
  });
};

const FormData = ({ handleBlur, handleChange, values, errors, touched }) => {
  console.log(values);
  return (
    <Form>
      <div className="form-row">
        <div className="form-group col-md-4 w-25">
          <label htmlFor="fullName">Full Name</label>
          <Field
            name="fullName"
            type="text"
            className="form-control mb-2"
            id="fullName"
            placeholder="Fatma Adam"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullName === undefined ? "" : values.fullName}
          />
          {touched && errors.fullName && (
            <p className="text-danger bold">{`${touched &&
              errors.fullName}, at least 4 characters`}</p>
          )}
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="gender">Gender</label>
          <Field
            name="gender"
            component="select"
            className="form-control"
            id="gender"
          >
            <option value="Select your gender">Select A Gender</option>
            <option value="Mail">Male</option>
            <option value="Female">Female</option>
            <option value="gay">gay</option>
            <option value="others">others</option>
            <option values="preferNotToSay">Prefer Not Say</option>
          </Field>
          {touched && errors.gender && (
            <p className="text-danger bold">This Field is a required Field</p>
          )}
        </div>

        <div className="form-group col-md-4  w-25">
          <label htmlFor="email">Email Address *</label>

          <Field
            name="email"
            type="email"
            className="form-control"
            id="email"
            placeholder="adam@gmail.com"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            touched={touched}
          />
          {touched && errors.email && (
            <p className="text-danger bold">{touched && errors.email}</p>
          )}
        </div>
        <div className="form-group col-md-4 w-25">
          <label htmlFor="age">Age</label>
          <Field
            name="age"
            type="number"
            className="form-control"
            id="age"
            placeholder="25"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="age">Current Country of residency</label>
          <Field
            name="currentCountry"
            component="select"
            className="form-control"
            id="currentCountry"
          >
            <option value="Select a Country">Select A Country</option>
            <option value="netherlands">Netherlands</option>
            <option value="uk">UK</option>
            <option value="spain">Spain</option>
            <option value="germany">Germany</option>
            <option value="sweden">Sweden</option>
            <option value="switzerland">Switzerland</option>
            <option value="denmark">Denmark</option>
            <option value="france">France</option>
          </Field>
          {touched && errors.currentCountry && (
            <p className="text-danger bold">This Field is a required Field</p>
          )}
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="englishLevel">
            English Level(10 is fluent/0 no knowledge)
          </label>
          <Field
            name="englishLevel"
            component="select"
            className="form-control"
            id="englishLevel"
            placeholder="25"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.englishLevel}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Field>
          {touched && errors.englishLevel && (
            <p className="text-danger bold">This Field is a required Field</p>
          )}
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="digitalToolsLevel">
            Digital tools level? (email,e-learning websites)
          </label>
          <Field
            name="digitalToolsLevel"
            component="select"
            className="form-control"
            id="digitalToolsLevel"
            placeholder="25"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.digitalToolsLevel}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Field>
          {touched && errors.digitalToolsLevel && (
            <p className="text-danger bold">This Field is a required Field</p>
          )}
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="localLanguageLevel">
            Local language Level(English if you live in the UK)
          </label>
          <Field
            name="localLanguageLevel"
            component="select"
            className="form-control"
            id="localLanguageLevel"
            placeholder="25"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.localLanguageLevel}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Field>
          {touched && errors.localLanguageLevel && (
            <p className="text-danger bold">This Field is a required Field</p>
          )}
        </div>
      </div>
      Highest degree obtained
      <div className="form-row align-items-center">
        <div className="col-md-3 pl-3">
          <RadioButtonGroup
            id="highestDegreeObtained"
            value={values.highestDegreeObtained}
          >
            <Field
              component={RadioButton}
              name="highestDegreeObtained"
              id="BachelorDegree"
              label="Bachelor degree"
              className="form-check-label ml-4"
            />
            <Field
              component={RadioButton}
              name="highestDegreeObtained"
              id="associateDegree"
              label="Associate Degree"
              className="form-check-label"
            />
            <Field
              component={RadioButton}
              name="highestDegreeObtained"
              id="masterOrHigher"
              label="MasterOrHigher"
              className="form-check-label"
            />

            <Field
              component={RadioButton}
              name="highestDegreeObtained"
              id="noDegree"
              label="No Degree"
              className="form-check-label"
            />
          </RadioButtonGroup>
          {touched && errors.highestDegreeObtained && (
            <p className="text-danger bold">This Field is a required Field</p>
          )}
        </div>
      </div>
      <br />
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="educationAndWorkBackground">
            Which Of The Following describe the best your education and/or work
            background Name
          </label>
          <Field
            name="educationAndWorkBackground"
            component="select"
            className="form-control mb-2"
            id="educationAndWorkBackground"
            placeholder="Teaching"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.educationAndWorkBackground}
          >
            <GetFormOption />
          </Field>
          {touched && errors.educationAndWorkBackground && (
            <p className="text-danger bold">This Field is a required Field</p>
          )}
        </div>
      </div>
      Assess your job readiness
      <div className="form-row align-items-center">
        <div className="col-md-3 pl-3">
          <RadioButtonGroup
            id="assessYourJobReadiness"
            value={values.assessYourJobReadiness}
          >
            <Field
              component={RadioButton}
              name="assessYourJobReadiness"
              id="lostDomainKnowledge"
              label="I lost all my domain knowledge"
              className="form-check-input"
            />
            <Field
              component={RadioButton}
              name="assessYourJobReadiness"
              id="knowledgeRefresh"
              label="I need to refresh my knowledge"
              className="form-check-input"
            />
            <Field
              component={RadioButton}
              name="assessYourJobReadiness"
              id="readyForWork"
              label="My knowledge is intact and I am fully ready for work"
              className="form-check-input"
            />
          </RadioButtonGroup>
          {touched && errors.assessYourJobReadiness && (
            <p className="text-danger bold">This Field is a required Field</p>
          )}
        </div>
      </div>
      <br />
      Do you want to start your own business?
      <div className="form-row align-items-center">
        <div className="col-md-3 pl-3">
          <RadioButtonGroup
            id="startYOurOwnBusiness"
            value={values.startYOurOwnBusiness}
          >
            <Field
              component={RadioButton}
              name="startYOurOwnBusiness"
              id="yes"
              label="Yes"
            />
            <Field
              component={RadioButton}
              name="startYOurOwnBusiness"
              id="no"
              label="No"
            />
          </RadioButtonGroup>
          {touched && errors.startYOurOwnBusiness && (
            <p className="text-danger bold">This Field is a required Field</p>
          )}
        </div>
      </div>
      <br />
      Tick this box if you agree that we use your email to contact you about
      future opportunities
      <div className="form-row align-items-center">
        <div className="col-md-3 pl-3">
          <Field
            name="gdpr"
            type="checkbox"
            className="form-check-input"
            id="gdpr"
            placeholder="gdpr"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.gdpr}
          />
        </div>
      </div>
      <br />
      <br />
      <div className="form-row align-items-center">
        <button className="btn-prev-next" type="submit">
          Save & Next
        </button>
      </div>
    </Form>
  );
};
const FormikeComponent = withFormik({
  mapPropsToStatus({
    fullName,
    gender,
    email,
    age,
    currentCountry,
    englishLevel,
    digitalToolsLevel,
    localLanguageLevel,
    highestDegreeObtained,
    educationAndWorkBackground,
    assessYourJobReadiness,
    startYourOwnBusiness,
    gdpr
  }) {
    fullName = window.localStorage.getItem("fullName");
    gender = window.localStorage.getItem("gender");
    email = window.localStorage.getItem("email");
    age = window.localStorage.getItem("age");
    currentCountry = window.localStorage.getItem("currentCountry");
    englishLevel = window.localStorage.getItem("englishLevel");
    digitalToolsLevel = window.localStorage.getItem("digitalToolsLevel");
    localLanguageLevel = window.localStorage.getItem("localLanguageLevel");
    highestDegreeObtained = window.localStorage.getItem("currentCountry");
    educationAndWorkBackground = window.localStorage.getItem(
      "educationAndWorkBackground"
    );
    educationAndWorkBackground = window.localStorage.getItem(
      "educationAndWorkBackground"
    );
    assessYourJobReadiness = window.localStorage.getItem(
      "assessYourJobReadiness"
    );
    startYourOwnBusiness = window.localStorage.getItem("startYourOwnBusiness");
    gdpr = window.localStorage.getItem("gdpr");

    return {
      fullName: fullName || "",
      gender: gender || "",
      email: email || "",
      age: age || 0,
      currentCountry: currentCountry || "",
      englishLevel: englishLevel || "",
      digitalToolsLevel: digitalToolsLevel || "",
      localLanguageLevel: localLanguageLevel || "",
      highestDegreeObtained: highestDegreeObtained || "",
      educationAndWorkBackground: educationAndWorkBackground || "",
      assessYourJobReadiness: assessYourJobReadiness || "",
      startYourOwnBusiness: startYourOwnBusiness || false,
      gdpr: gdpr || false
    };
  },
  handleSubmit(props, actions) {
    const { saveAndGoTo } = actions.props;
    saveAndGoTo(props, steps.one, steps.result);

    window.localStorage.setItem("fullName", props.fullName);
    window.localStorage.setItem("gender", props.gender);
    window.localStorage.setItem("email", props.email);
    window.localStorage.setItem("age", props.age);
    window.localStorage.setItem("currentCountry", props.currentCountry);
    window.localStorage.setItem("englishLevel", props.englishLevel);
    window.localStorage.setItem("digitalToolsLevel", props.digitalToolsLevel);
    window.localStorage.setItem("localLanguageLevel", props.localLanguageLevel);
    window.localStorage.setItem(
      "highestDegreeObtained",
      props.highestDegreeObtained
    );

    window.localStorage.setItem(
      "educationAndWorkBackground",
      props.educationAndWorkBackground
    );
    window.localStorage.setItem(
      "assessYourJobReadiness",
      props.assessYourJobReadiness
    );
    window.localStorage.setItem(
      "startYourOwnBusiness",
      props.startYourOwnBusiness
    );
    window.localStorage.setItem("gdpr", props.gdpr);
  }
  // @Todo find a way to fix the below validation or find a different way to valid form fields.
  // The issue is currently the valid is working and validating the form fields.
  // But then it stops the form from submitting
  // validationSchema: Yup.object().shape({
  //   fullName: Yup.string()
  //     .min(4)
  //     .required(),
  //   gender: Yup.string().required(),
  //   email: Yup.string()
  //     .email()
  //     .required(),
  //   age: Yup.number()
  //     .min(2)
  //     .required(),
  //   currentCountry: Yup.string().required(),
  //   englishLevel: Yup.string().required(),
  //   digitalToolsLevel: Yup.string().required(),
  //   localLanguageLevel: Yup.string().required(),
  //   highestDegreeObtained: Yup.string().required(),
  //   educationAndWorkBackground: Yup.string().required(),
  //   assessYourJobReadiness: Yup.string().required(),
  //   startYourOwnBusiness: Yup.string().required(),
  //   lostDomainKnowledge: Yup.string().required(),
  //   gdpr: Yup.string().required()
  // })
})(FormData);

export default FormikeComponent;
