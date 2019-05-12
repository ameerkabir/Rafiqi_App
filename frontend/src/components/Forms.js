import React from "react";
import { withFormik, Form, Field } from "formik";
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

const FormData = ({
  handleBlur,
  handleChange,
  values,
  errors,
  touched,
  handleSubmit
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-4 w-25">
          <label htmlFor="fullName">Full Name</label>
          <Field
            name="fullName"
            type="text"
            className="form-control mb-2"
            id="fullName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullName === undefined ? "" : values.fullName}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="gender">Gender</label>
          <Field
            name="gender"
            component="select"
            className="form-control"
            id="gender"
          >
            <option value="Select your gender">Select Your Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Other</option>
            <option values="preferNotToSay">Prefer Not To Say</option>
          </Field>
        </div>

        <div className="form-group col-md-4  w-25">
          <label htmlFor="email">Email Address</label>

          <Field
            name="email"
            type="email"
            className="form-control"
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            touched={touched}
          />
        </div>
        <div className="form-group col-md-4 w-25">
          <label htmlFor="age">Age</label>
          <Field
            name="age"
            type="number"
            className="form-control"
            id="age"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="currentCountry">Current Country of residency</label>
          <Field
            name="currentCountry"
            component="select"
            className="form-control"
            id="currentCountry"
            required
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
            required
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
            required
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
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="localLanguageLevel">
            Local language Level(English if you live in the UK)
          </label>
          <Field
            required
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
      <label htmlFor="highestDegreeObtained" />
      Highest degree obtained
      <div className="form-row align-items-center">
        <div className="col-md-3 pl-3">
          <RadioButtonGroup
            id="highestDegreeObtained"
            value={values.highestDegreeObtained}
            required
          >
            <Field
              required
              component={RadioButton}
              name="highestDegreeObtained"
              id="bachelorDegree"
              label="Bachelor degree"
              className="form-check-label ml-4"
            />
            <Field
              required
              component={RadioButton}
              name="highestDegreeObtained"
              id="associateDegree"
              label="Associate Degree"
              className="form-check-label"
            />
            <Field
              required
              component={RadioButton}
              name="highestDegreeObtained"
              id="masterOrHigher"
              label="Master/Higher"
              className="form-check-label"
            />

            <Field
              required
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
            required
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
              required
              component={RadioButton}
              name="assessYourJobReadiness"
              id="lostDomainKnowledge"
              label="I lost all my domain knowledge"
              className="form-check-input"
            />
            <Field
              required
              component={RadioButton}
              name="assessYourJobReadiness"
              id="knowledgeRefresh"
              label="I need to refresh my knowledge"
              className="form-check-input"
            />
            <Field
              required
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
            id="startYourOwnBusiness"
            value={values.startYourOwnBusiness}
          >
            <Field
              required
              component={RadioButton}
              name="startYourOwnBusiness"
              id="yes"
              label="Yes"
            />
            <Field
              required
              component={RadioButton}
              name="startYourOwnBusiness"
              id="no"
              label="No"
            />
          </RadioButtonGroup>
          {touched && errors.startYourOwnBusiness && (
            <p className="text-danger bold">This Field is a required Field</p>
          )}
        </div>
      </div>
      <br />
      <div className="form-row align-items-center">
        <div className="col-md-3 pl-3">
          <label htmlFor="gdpr">
            <Field
              name="gdpr"
              type="checkbox"
              className="form-check-input"
              id="gdpr"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.gdpr}
            />
            Tick this box if you agree that we use your email to contact you
            about future opportunities
          </label>
        </div>
      </div>
      <br />
      <br />
      <div className="form-row align-items-center">
        <button className="btn-prev-next btn btn-primary bg-blue" type="submit">
          explore{" "}
        </button>
      </div>
    </Form>
  );
};
const FormikeComponent = withFormik({
  mapPropsToStatus: () => {
    return {
      fullName: "",
      gender: "",
      email: "",
      age: "",
      currentCountry: "",
      englishLevel: 1,
      digitalToolsLevel: 1,
      localLanguageLevel: "",
      highestDegreeObtained: "",
      educationAndWorkBackground: "",
      assessYourJobReadiness: "",
      startYourOwnBusiness: false,
      gdpr: false
    };
  },

  handleSubmit: (values, actions) => {
    const { saveAndGoTo, postData } = actions.props;
    saveAndGoTo(values, steps.one, steps.result);
    postData(values);
  }
})(FormData);

export default FormikeComponent;
