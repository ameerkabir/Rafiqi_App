import {propEq, filter, gte, difference, propSatisfies} from 'ramda';
import { getEntrepreneurship, filterResponse, getCountry, getJob, getLocalJobs, getSameBackground, fetchData} from '../src/helper/index';
import { expect} from 'chai';
// checking the if arrays are equal without regarding order
const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const chai = require('chai');
chai.use(deepEqualInAnyOrder);
import { isContext } from 'vm';
import { async } from '../../../../../AppData/Local/Microsoft/TypeScript/3.4.5/node_modules/rxjs/internal/scheduler/async';

let sampleUser = {
  fullName: 'Cansın',
  gender: 'female',
  email: 'smth@gmail.com',
  age: '21',
  currentCountry: 'Germany',
  englishLevel: '8',
  digitalToolsLevel: '8',
  localLanguageLevel: '8',
  highestDegreeObtained: '3',
  educationAndWorkBackground: '2',
  assessYourJobReadiness: '8',
  startYourOwnBusiness: 'yes',
  gdpr: ''
} 
const sampleData = [
  //entrepreneurship
  {
    "opportunity_name": "Coursera for refugees",
    "category": "Certified Training",
    "mode_of_delivery": "online",
    "theme": "entrepreneurship and incubation",
    "country": "Global",
    "city": "any",
    "level": "1",
    "duration": "self-paced",
    "full_or_part": "Part",
    "info": "https://www.coursera.org/specializations/wharton-entrepreneurship",
    "comments": "free specialization for refugees",
    "cluster_nb": "not applicable",
    "local_lan_requirements": "1",
    "en_requirements": "6"
  },

  // germany online jobs

  {
    "opportunity_name": "Kiron",
    "category": "Job",
    "mode_of_delivery": "online",
    "theme": "business",
    "country": "Germany",
    "city": "any",
    "level": "1",
    "duration": "depends",
    "full_or_part": "",
    "info": "https://kiron.ngo/apply/",
    "comments": "",
    "cluster_nb": "17",
    "local_lan_requirements": "1",
    "en_requirements": "7"
  },
  {
    "opportunity_name": "Kiron",
    "category": "Job",
    "mode_of_delivery": "online",
    "theme": "computer science",
    "country": "Germany",
    "city": "any",
    "level": "1",
    "duration": "depends",
    "full_or_part": "",
    "info": "https://kiron.ngo/apply/c",
    "comments": "",
    "cluster_nb": "2",
    "local_lan_requirements": "1",
    "en_requirements": "7"
  },

  //germany onsite or hybrid jobs
  {
    "opportunity_name": "Devugees",
    "category": "Job",
    "mode_of_delivery": "onsite",
    "theme": "Software/Web/Mobile development",
    "country": "Germany",
    "city": "Dusseldorf",
    "level": "1",
    "duration": "1 year",
    "full_or_part": "",
    "info": "https://digitalcareerinstitute.org/en/courses/one-year-program/#apply",
    "comments": "",
    "cluster_nb": "2",
    "local_lan_requirements": "5",
    "en_requirements": "5"
  },
  {
    "opportunity_name": "Job4refugees",
    "category": "Job",
    "mode_of_delivery": "onsite",
    "theme": "IT Support & Networking",
    "country": "Germany",
    "city": "?",
    "level": "2",
    "duration": "",
    "full_or_part": "",
    "info": "https://migranthire.com/",
    "comments": "",
    "cluster_nb": "1",
    "local_lan_requirements": "7",
    "en_requirements": "5"
  },
  // integration and language education
  {
    "opportunity_name": "VOLKSHOCHSCHULE",
    "category": "Training",
    "mode_of_delivery": "onsite",
    "theme": "language education",
    "country": "Germany",
    "city": "any",
    "level": "1",
    "duration": "not applicable",
    "full_or_part": "Part",
    "info": "https://www.berlin.de/vhs/",
    "comments": "",
    "cluster_nb": "not applicable",
    "local_lan_requirements": "1",
    "en_requirements": "3"
  },
  {
    "opportunity_name": "Joblinge Kompass",
    "category": "Training",
    "mode_of_delivery": "onsite",
    "theme": "integration",
    "country": "Global",
    "city": "any",
    "level": "1",
    "duration": "6 months",
    "full_or_part": "",
    "info": "lara.fisser @ joblinge.de",
    "comments": "",
    "cluster_nb": "not applicable",
    "local_lan_requirements": "7",
    "en_requirements": "7"
  },
  //uni degree lev1/higher
 {
    "opportunity_name": "Kiron",
    "category": "University Degree",
    "mode_of_delivery": "online",
    "theme": "business",
    "country": "Germany",
    "city": "any",
    "level": "1",
    "duration": "depends",
    "full_or_part": "",
    "info": "https://kiron.ngo/apply/",
    "comments": "",
    "cluster_nb": "17",
    "local_lan_requirements": "1",
    "en_requirements": "7"
  },
  {
    "opportunity_name": "Kiron",
    "category": "University Degree",
    "mode_of_delivery": "online",
    "theme": "computer science",
    "country": "Germany",
    "city": "any",
    "level": "3",
    "duration": "depends",
    "full_or_part": "",
    "info": "https://kiron.ngo/apply/",
    "comments": "",
    "cluster_nb": "2",
    "local_lan_requirements": "1",
    "en_requirements": "7"
  },
  //training 
  {
    "opportunity_name": "Devugees Orientation Course",
    "category": "Training",
    "mode_of_delivery": "onsite",
    "theme": "integration",
    "country": "Germany",
    "city": "Berlin",
    "level": "2",
    "duration": "4 weeks",
    "full_or_part": "",
    "info": "https://digitalcareerinstitute.org/en/orientiation-course/#apply",
    "comments": "",
    "cluster_nb": "2",
    "local_lan_requirements": "5",
    "en_requirements": "5"
  },

  {
    "opportunity_name": "Redi School of digital integration",
    "category": "Training",
    "mode_of_delivery": "onsite",
    "theme": "Software/Web/Mobile development",
    "country": "Germany",
    "city": "Berlin and Munich",
    "level": "1",
    "duration": "3 months",
    "full_or_part": "",
    "info": "https://redischool.typeform.com/to/E8yUaZ",
    "comments": "",
    "cluster_nb": "2",
    "local_lan_requirements": "1",
    "en_requirements": "5"
  },

  // digital edu
  {
    "opportunity_name": "Redi School of digital integration",
    "category": "Training",
    "mode_of_delivery": "onsite",
    "theme": "Digital education",
    "country": "Germany",
    "city": "Berlin and Munich",
    "level": "1",
    "duration": "3 months",
    "full_or_part": "",
    "info": "https://redischool.typeform.com/to/E8yUaZ",
    "comments": "",
    "cluster_nb": "not applicable",
    "local_lan_requirements": "1",
    "en_requirements": "5"
  },
  //eng edu
  {
    "opportunity_name": "Coursera for refugees",
    "category": "Certified Training",
    "mode_of_delivery": "online",
    "theme": "English education",
    "country": "Global",
    "city": "any",
    "level": "1",
    "duration": "",
    "full_or_part": "Part",
    "info": "https://www.coursera.org/learn/business",
    "comments": "",
    "cluster_nb": "not applicable",
    "local_lan_requirements": "1",
    "en_requirements": "1"
  },

  
];
describe('filterresponse', () =>{
  it('should be able to exclude', async () =>{
    const result = await filterResponse(sampleData, propEq, 'level', '1', true)
    const expected = [
      {
        "opportunity_name": "Job4refugees",
        "category": "Job",
        "mode_of_delivery": "onsite",
        "theme": "IT Support & Networking",
        "country": "Germany",
        "city": "?",
        "level": "2",
        "duration": "",
        "full_or_part": "",
        "info": "https://migranthire.com/",
        "comments": "",
        "cluster_nb": "1",
        "local_lan_requirements": "7",
        "en_requirements": "5"
      },
      {
        "opportunity_name": "Kiron",
        "category": "University Degree",
        "mode_of_delivery": "online",
        "theme": "computer science",
        "country": "Germany",
        "city": "any",
        "level": "3",
        "duration": "depends",
        "full_or_part": "",
        "info": "https://kiron.ngo/apply/",
        "comments": "",
        "cluster_nb": "2",
        "local_lan_requirements": "1",
        "en_requirements": "7"
      },
      {
        "opportunity_name": "Devugees Orientation Course",
        "category": "Training",
        "mode_of_delivery": "onsite",
        "theme": "integration",
        "country": "Germany",
        "city": "Berlin",
        "level": "2",
        "duration": "4 weeks",
        "full_or_part": "",
        "info": "https://digitalcareerinstitute.org/en/orientiation-course/#apply",
        "comments": "",
        "cluster_nb": "2",
        "local_lan_requirements": "5",
        "en_requirements": "5"
      },

    ];
    expect(result).to.deep.equalInAnyOrder(expected); 
  })
})
describe('Building blocks of fetcData', () => {
  describe('#filterResponse', () => {
    it('should filter the opportunities according to desired value', async () => {
      const result = await filterResponse(sampleData, propEq, 'country', 'Global', false);
      const expected = [  {
        "opportunity_name": "Coursera for refugees",
        "category": "Certified Training",
        "mode_of_delivery": "online",
        "theme": "entrepreneurship and incubation",
        "country": "Global",
        "city": "any",
        "level": "1",
        "duration": "self-paced",
        "full_or_part": "Part",
        "info": "https://www.coursera.org/specializations/wharton-entrepreneurship",
        "comments": "free specialization for refugees",
        "cluster_nb": "not applicable",
        "local_lan_requirements": "1",
        "en_requirements": "6"
      },
      {
        "opportunity_name": "Joblinge Kompass",
        "category": "Training",
        "mode_of_delivery": "onsite",
        "theme": "integration",
        "country": "Global",
        "city": "any",
        "level": "1",
        "duration": "6 months",
        "full_or_part": "",
        "info": "lara.fisser @ joblinge.de",
        "comments": "",
        "cluster_nb": "not applicable",
        "local_lan_requirements": "7",
        "en_requirements": "7"
      }, 
      {
        "opportunity_name": "Coursera for refugees",
        "category": "Certified Training",
        "mode_of_delivery": "online",
        "theme": "English education",
        "country": "Global",
        "city": "any",
        "level": "1",
        "duration": "",
        "full_or_part": "Part",
        "info": "https://www.coursera.org/learn/business",
        "comments": "",
        "cluster_nb": "not applicable",
        "local_lan_requirements": "1",
        "en_requirements": "1"
      }
      ];
      expect(result).to.deep.equalInAnyOrder(expected); 
    });
  });
  describe('#getEntrepreneurship', () => {
    it('should filter results by theme: enrepreneurship', async () => {
      const result = await getEntrepreneurship(sampleData);
      const expected = [
        {
          "opportunity_name": "Coursera for refugees",
          "category": "Certified Training",
          "mode_of_delivery": "online",
          "theme": "entrepreneurship and incubation",
          "country": "Global",
          "city": "any",
          "level": "1",
          "duration": "self-paced",
          "full_or_part": "Part",
          "info": "https://www.coursera.org/specializations/wharton-entrepreneurship",
          "comments": "free specialization for refugees",
          "cluster_nb": "not applicable",
          "local_lan_requirements": "1",
          "en_requirements": "6"
        }
      ];
      expect(result).to.deep.equalInAnyOrder(expected);
    });
  });
  describe('#getCountry', () => {
    it('should return the opportunities with selected country + "Global" ones', async () => {
      const result = await getCountry(sampleData, 'Germany');
      const expected = sampleData;
      expect(result).to.deep.equalInAnyOrder(expected);   
    });
  });
  // Some functions are not specifically tested because their similar nature to the other already tested functions
  describe('#getSameBackground', () => {
    it('should return the opportunities with given cluster_nb + "nonapplicable" ones', async () => {
      const result= await getSameBackground(sampleData, '17');
      const expected= [
        {
          "opportunity_name": "Kiron",
          "category": "Job",
          "mode_of_delivery": "online",
          "theme": "business",
          "country": "Germany",
          "city": "any",
          "level": "1",
          "duration": "depends",
          "full_or_part": "",
          "info": "https://kiron.ngo/apply/",
          "comments": "",
          "cluster_nb": "17",
          "local_lan_requirements": "1",
          "en_requirements": "7"
        },
        {
          "opportunity_name": "Kiron",
          "category": "University Degree",
          "mode_of_delivery": "online",
          "theme": "business",
          "country": "Germany",
          "city": "any",
          "level": "1",
          "duration": "depends",
          "full_or_part": "",
          "info": "https://kiron.ngo/apply/",
          "comments": "",
          "cluster_nb": "17",
          "local_lan_requirements": "1",
          "en_requirements": "7"
        },
        {
          "opportunity_name": "Coursera for refugees",
          "category": "Certified Training",
          "mode_of_delivery": "online",
          "theme": "entrepreneurship and incubation",
          "country": "Global",
          "city": "any",
          "level": "1",
          "duration": "self-paced",
          "full_or_part": "Part",
          "info": "https://www.coursera.org/specializations/wharton-entrepreneurship",
          "comments": "free specialization for refugees",
          "cluster_nb": "not applicable",
          "local_lan_requirements": "1",
          "en_requirements": "6"
        },
        {
          "opportunity_name": "VOLKSHOCHSCHULE",
          "category": "Training",
          "mode_of_delivery": "onsite",
          "theme": "language education",
          "country": "Germany",
          "city": "any",
          "level": "1",
          "duration": "not applicable",
          "full_or_part": "Part",
          "info": "https://www.berlin.de/vhs/",
          "comments": "",
          "cluster_nb": "not applicable",
          "local_lan_requirements": "1",
          "en_requirements": "3"
        },
        {
          "opportunity_name": "Joblinge Kompass",
          "category": "Training",
          "mode_of_delivery": "onsite",
          "theme": "integration",
          "country": "Global",
          "city": "any",
          "level": "1",
          "duration": "6 months",
          "full_or_part": "",
          "info": "lara.fisser @ joblinge.de",
          "comments": "",
          "cluster_nb": "not applicable",
          "local_lan_requirements": "7",
          "en_requirements": "7"
        },
        {
          "opportunity_name": "Redi School of digital integration",
          "category": "Training",
          "mode_of_delivery": "onsite",
          "theme": "Digital education",
          "country": "Germany",
          "city": "Berlin and Munich",
          "level": "1",
          "duration": "3 months",
          "full_or_part": "",
          "info": "https://redischool.typeform.com/to/E8yUaZ",
          "comments": "",
          "cluster_nb": "not applicable",
          "local_lan_requirements": "1",
          "en_requirements": "5"
        },
        {
          "opportunity_name": "Coursera for refugees",
          "category": "Certified Training",
          "mode_of_delivery": "online",
          "theme": "English education",
          "country": "Global",
          "city": "any",
          "level": "1",
          "duration": "",
          "full_or_part": "Part",
          "info": "https://www.coursera.org/learn/business",
          "comments": "",
          "cluster_nb": "not applicable",
          "local_lan_requirements": "1",
          "en_requirements": "1"
        }
      ];
      expect(result).to.deep.equalInAnyOrder(expected);
    });
  });
  
  describe('#getLocalJobs', () => {
    it('should return the local jobs suitable according to backgroud and level of the applicant', async () =>{
      const jobs= await getJob(sampleData);
      const localJobs = await getLocalJobs(jobs, '3', '2');
      const expected = [
        {
          "opportunity_name": "Devugees",
          "category": "Job",
          "mode_of_delivery": "onsite",
          "theme": "Software/Web/Mobile development",
          "country": "Germany",
          "city": "Dusseldorf",
          "level": "1",
          "duration": "1 year",
          "full_or_part": "",
          "info": "https://digitalcareerinstitute.org/en/courses/one-year-program/#apply",
          "comments": "",
          "cluster_nb": "2",
          "local_lan_requirements": "5",
          "en_requirements": "5"
        }
      ];
      expect(localJobs).to.deep.equalInAnyOrder(expected);  
    })
  })
});

describe('#fetchData', () => {
  context('entrepreneurship is selected', () => {
    it('should return filtered results by country + by entrepreneurship option', async () => {
      const result = await fetchData(sampleUser, sampleData);
      const expected = [
        {
          "opportunity_name": "Coursera for refugees",
          "category": "Certified Training",
          "mode_of_delivery": "online",
          "theme": "entrepreneurship and incubation",
          "country": "Global",
          "city": "any",
          "level": "1",
          "duration": "self-paced",
          "full_or_part": "Part",
          "info": "https://www.coursera.org/specializations/wharton-entrepreneurship",
          "comments": "free specialization for refugees",
          "cluster_nb": "not applicable",
          "local_lan_requirements": "1",
          "en_requirements": "6"
        }
      ];
      expect(result).to.deep.equalInAnyOrder(expected);
    });
  });
  context('not entrepreneur & job readiness and language levels suffice', () => {
    it('should list appropriate local jobs', async () => {
      sampleUser.startYourOwnBusiness = 'no';
      const result = await fetchData(sampleUser, sampleData);
      const expected = [
        {
          "opportunity_name": "Devugees",
          "category": "Job",
          "mode_of_delivery": "onsite",
          "theme": "Software/Web/Mobile development",
          "country": "Germany",
          "city": "Dusseldorf",
          "level": "1",
          "duration": "1 year",
          "full_or_part": "",
          "info": "https://digitalcareerinstitute.org/en/courses/one-year-program/#apply",
          "comments": "",
          "cluster_nb": "2",
          "local_lan_requirements": "5",
          "en_requirements": "5"
        }
      ];
      expect(result).to.deep.equalInAnyOrder(expected);
    });
  });
  context('not entrepreneur & ready for the job & language does not suffice ', () => {
    it('should offer language education || integration', async () => {
      //sampleUser.startYourOwnBusiness = 'no';
      sampleUser.localLanguageLevel = 4,
      sampleUser.englishLevel = 4;
      const result = await fetchData(sampleUser, sampleData);
      const expected = [
        {
          "opportunity_name": "VOLKSHOCHSCHULE",
          "category": "Training",
          "mode_of_delivery": "onsite",
          "theme": "language education",
          "country": "Germany",
          "city": "any",
          "level": "1",
          "duration": "not applicable",
          "full_or_part": "Part",
          "info": "https://www.berlin.de/vhs/",
          "comments": "",
          "cluster_nb": "not applicable",
          "local_lan_requirements": "1",
          "en_requirements": "3"
        },
        {
          "opportunity_name": "Joblinge Kompass",
          "category": "Training",
          "mode_of_delivery": "onsite",
          "theme": "integration",
          "country": "Global",
          "city": "any",
          "level": "1",
          "duration": "6 months",
          "full_or_part": "",
          "info": "lara.fisser @ joblinge.de",
          "comments": "",
          "cluster_nb": "not applicable",
          "local_lan_requirements": "7",
          "en_requirements": "7"
        },
        {
          "opportunity_name": "Devugees Orientation Course",
          "category": "Training",
          "mode_of_delivery": "onsite",
          "theme": "integration",
          "country": "Germany",
          "city": "Berlin",
          "level": "2",
          "duration": "4 weeks",
          "full_or_part": "",
          "info": "https://digitalcareerinstitute.org/en/orientiation-course/#apply",
          "comments": "",
          "cluster_nb": "2",
          "local_lan_requirements": "5",
          "en_requirements": "5"
        }
      ];
      expect(result).to.deep.equalInAnyOrder(expected);
    });
  });
  context('no local job opputunity found', () => {
    it('should find online job opportunities ', async () => {
      sampleUser.localLanguageLevel = 8,
      sampleUser.englishLevel = 8;
      //removing the onsite job oppurtunity from the sampledata so the algorithm can look for online ones
      var removeIndex = sampleData.map(function(item) { return item.info; }).indexOf("https://digitalcareerinstitute.org/en/courses/one-year-program/#apply");
      sampleData.splice(removeIndex, 1);
      const result = await fetchData(sampleUser, sampleData);
      const expected = [
        {
          "opportunity_name": "Kiron",
          "category": "Job",
          "mode_of_delivery": "online",
          "theme": "computer science",
          "country": "Germany",
          "city": "any",
          "level": "1",
          "duration": "depends",
          "full_or_part": "",
          "info": "https://kiron.ngo/apply/c",
          "comments": "",
          "cluster_nb": "2",
          "local_lan_requirements": "1",
          "en_requirements": "7"
        }
      ];
      expect(result).to.deep.equalInAnyOrder(expected);
    });
  });
  context('no local job opp. found & english level does not suffice for online opp.', () => {
    it('should offer English education', async () => {
      sampleUser.englishLevel = 3;
      const result = await fetchData(sampleUser, sampleData);
      const expected = [
        {
          "opportunity_name": "Coursera for refugees",
          "category": "Certified Training",
          "mode_of_delivery": "online",
          "theme": "English education",
          "country": "Global",
          "city": "any",
          "level": "1",
          "duration": "",
          "full_or_part": "Part",
          "info": "https://www.coursera.org/learn/business",
          "comments": "",
          "cluster_nb": "not applicable",
          "local_lan_requirements": "1",
          "en_requirements": "1"
        }
      ];
      expect(result).to.deep.equalInAnyOrder(expected);
    });
  });
  context('no job opp. found & applicant does not have a university degree', () => {
    it('should offer university education /level1', async () => {
      sampleUser.highestDegreeObtained = 'none';
      //removing the online job oppurtunity from the sampledata so the algorithm can look for university degree
      var removeIndex = sampleData.map(function(item) { return item.info; }).indexOf("https://kiron.ngo/apply/c");
      sampleData.splice(removeIndex, 1);
      const result = await fetchData(sampleUser, sampleData);
      const expected = [
        {
          "opportunity_name": "Kiron",
          "category": "University Degree",
          "mode_of_delivery": "online",
          "theme": "business",
          "country": "Germany",
          "city": "any",
          "level": "1",
          "duration": "depends",
          "full_or_part": "",
          "info": "https://kiron.ngo/apply/",
          "comments": "",
          "cluster_nb": "17",
          "local_lan_requirements": "1",
          "en_requirements": "7"
        }
        ];
      expect(result).to.deep.equalInAnyOrder(expected);
    });
  });
  context('no job opp. found & applicant has a university degree', () => {
    it('should offer higher level education onsite', async () => {
      sampleUser.highestDegreeObtained = '1';
      sampleUser.englishLevel = '5';
      const result = await fetchData(sampleUser, sampleData);
      const expected = [
        {
          "opportunity_name": "Devugees Orientation Course",
          "category": "Training",
          "mode_of_delivery": "onsite",
          "theme": "integration",
          "country": "Germany",
          "city": "Berlin",
          "level": "2",
          "duration": "4 weeks",
          "full_or_part": "",
          "info": "https://digitalcareerinstitute.org/en/orientiation-course/#apply",
          "comments": "",
          "cluster_nb": "2",
          "local_lan_requirements": "5",
          "en_requirements": "5"
        }
      ];
      expect(result).to.deep.equalInAnyOrder(expected);
    });
  });

  context('no onsite education or training is found', () => {
    context('English level does not suffice', () => {  
      it('should offer English education', async () => {
        const modifiedData = filter(propEq('mode_of_delivery', 'online'), sampleData);
        const result = await fetchData(sampleUser, modifiedData);
        const expected = [
          {
            "opportunity_name": "Coursera for refugees",
            "category": "Certified Training",
            "mode_of_delivery": "online",
            "theme": "English education",
            "country": "Global",
            "city": "any",
            "level": "1",
            "duration": "",
            "full_or_part": "Part",
            "info": "https://www.coursera.org/learn/business",
            "comments": "",
            "cluster_nb": "not applicable",
            "local_lan_requirements": "1",
            "en_requirements": "1"
          }   
        ];
        expect(result).to.deep.equalInAnyOrder(expected);
      });
    });
    context('English level suffices', () => {  
      it('should offer online training excluding beginner level', async () => {
        sampleUser.englishLevel='8';
        const modifiedData = filter(propEq('mode_of_delivery', 'online'), sampleData);
        const result = await fetchData(sampleUser, modifiedData);
        const expected = [
          {
            "opportunity_name": "Kiron",
            "category": "University Degree",
            "mode_of_delivery": "online",
            "theme": "computer science",
            "country": "Germany",
            "city": "any",
            "level": "3",
            "duration": "depends",
            "full_or_part": "",
            "info": "https://kiron.ngo/apply/",
            "comments": "",
            "cluster_nb": "2",
            "local_lan_requirements": "1",
            "en_requirements": "7"
          }
        ];
        expect(result).to.deep.equalInAnyOrder(expected);
      });
    });
  });
});




