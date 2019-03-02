import React from 'react';
import { withFormik, Form, Field } from 'formik';
import { steps } from './Steps';

const educationAndWorkBackgroundOptions = [
  { label: 'IT support and Networking', value: 'itSupportAndNetworking' },
  {
    label: 'Web Mobile Software Development',
    value: 'webMobileSoftwareDevelopment'
  },
  { label: 'Artificial Intelligence', value: 'ArtificialIntelligence' },
  { label: 'Healthcare Professional', value: 'HealthCareProfessional' },
  { label: 'None IT Engineer', value: 'noneItEngineer' },
  {
    label: 'Skilled Trades(houseKeeper, plummer, electrician, agriculture)',
    value: 'skilledTrades'
  },
  { label: 'Teaching', value: 'teaching' },
  { label: 'Digital Marketing', value: 'digitalMarketing' },
  { label: 'Sales Customer Service', value: 'salesCustomerService' },
  {
    label: 'Artist & Creative Vocations(painter, poet)',
    value: 'artistAndCreative'
  },
  {
    label: 'Content Manger(Writer, translator, content creator)',
    value: 'contentManger'
  },
  { label: 'Legal', value: 'legal' },
  { label: 'Political & Social Science', value: 'politicalAndSocialScience' },
  { label: 'Social Worker', value: 'socialWorker' },
  { label: 'Accounting And Finance', value: 'accountingAndFinance' },
  { label: 'Business And Management', value: 'businessAndManagement' },
  { label: 'Scientific Research', value: 'scientificResearch' },
  { label: 'Research Others', value: 'researchOthers' },
  { label: 'Others', value: 'others' }
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

const FormData = ({ handleBlur, handleChange, values, ...props }) => {
  return (
    <Form >
      <div className="form-row">
        <div className="form-group col-md-4 w-25">
          <label htmlFor="fullName">Full Name</label>
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
        <div className="form-group col-md-4  w-25">
          <label htmlFor="email">Email Address</label>

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
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="localLanguageLevel">
            Local language Level(e.g: English if you live in the UK )
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
        </div>
      </div>
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
        <div className="col-md-3 pl-3">
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
        <div className="col-md-3 pl-3">
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
        </div>
      </div>
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
            I lost all my domain knowledge{' '}
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
        <div className="col-md-3 pl-3">
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
            My knowledge is intact and I am fully ready for work{' '}
          </label>
        </div>
      </div>
      Assess your job readiness
      <div className="form-row align-items-center">
        <div className="col-md-3 pl-3">
          <Field
            name="yes"
            type="checkbox"
            className="form-check-input"
            id="yes"
            placeholder="yes"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={values.yes}
          />
          <label className="form-check-label" htmlFor="yes">
            yes{' '}
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
            placeholder="no"
          />
          <label className="form-check-label" htmlFor="no">
            No{' '}
          </label>
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
    currentCountry,
    localLanguageLevel,
    digitalToolsLevel,
    educationAndWorkBackground,
    gdpr
  }) {
    currentCountry = window.localStorage.getItem('currentCountry');
    return {
      fullNmae: fullNmae || '',
      email: email || '',
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
      readyForWork: readyForWork || false,
      localLanguageLevel: localLanguageLevel || '',
      digitalToolsLevel: digitalToolsLevel || '',
      educationAndWorkBackground: educationAndWorkBackground || '',
      gdpr: gdpr || false
    };
  },
  handleSubmit(props, actions) {
    const { saveAndGoTo } = actions.props;

    saveAndGoTo(props, steps.one, steps.result);
    window.localStorage.setItem('currentCountry', props.currentCountry);
  }
})(FormData);

export default FormikeComponent;
