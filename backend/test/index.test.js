import { expect } from 'chai';
import { getEntrepreneurship } from '../src/helper/index';
const sampleData = [
  {
    'Opportunity name': 'University of the people',
    Category: 'University Degree',
    'Mode of Delivery': 'online',
    Theme: 'Associate degree healthcare',
    Country: 'Global',
    City: 'any',
    Level: '2',
    Duration: '',
    'Full/Part': '',
    Info: 'https://www.uopeople.edu/application/',
    Comments: '',
    'Cluster nb': '5',
    local_lan_requirements: '1',
    en_requirements: '7'
  },
  {
    'Opportunity name': 'Singa',
    Category: 'Training',
    'Mode of Delivery': 'onsite',
    Theme: 'integration',
    Country: 'France',
    City: '?',
    Level: '1',
    Duration: '',
    'Full/Part': '',
    Info: 'contact@singa.fr',
    Comments: 'available in Paris, lyon, montpelier, Lille and St etienne',
    'Cluster nb': 'not applicable',
    local_lan_requirements: '5',
    en_requirements: '5'
  },
  {
    'Opportunity name': 'Singa Finkela Program',
    Category: 'Training',
    'Mode of Delivery': 'onsite',
    Theme: 'entrepreneurship and incubation',
    Country: 'France',
    City: 'Paris',
    Level: '1',
    Duration: '',
    'Full/Part': '',
    Info: 'contact@singa.fr',
    Comments: '',
    'Cluster nb': 'not applicable',
    local_lan_requirements: '5',
    en_requirements: '5'
  },
  {
    'Opportunity name': 'Singa Finkela Program',
    Category: 'Training',
    'Mode of Delivery': 'onsite',
    Theme: 'entrepreneurship and incubation',
    Country: 'France',
    City: 'Lyon',
    Level: '1',
    Duration: '',
    'Full/Part': '',
    Info: 'contact@singa.fr',
    Comments: '',
    'Cluster nb': 'not applicable',
    local_lan_requirements: '5',
    en_requirements: '5'
  },
  {
    'Opportunity name': 'Singa',
    Category: 'Training',
    'Mode of Delivery': 'onsite',
    Theme: 'integration',
    Country: 'UK',
    City: '?',
    Level: '1',
    Duration: '',
    'Full/Part': '',
    Info: 'http://www.singa.org.uk/',
    Comments: '',
    'Cluster nb': 'not applicable',
    local_lan_requirements: '8',
    en_requirements: '5'
  },
  {
    'Opportunity name': 'Devugees Orientation Course',
    Category: 'Training',
    'Mode of Delivery': 'onsite',
    Theme: 'Tech Job Orientation',
    Country: 'Germany',
    City: 'Berlin',
    Level: '2',
    Duration: '4 weeks',
    'Full/Part': '',
    Info: 'https://digitalcareerinstitute.org/en/orientiation-course/#apply',
    Comments: '',
    'Cluster nb': '2',
    local_lan_requirements: '5',
    en_requirements: '5'
  }
];
describe('getEntrepreneurship', () => {
  it('should run ', async () => {
    const result = await getEntrepreneurship(sampleData);
    const expected = [
      {
        'Opportunity name': 'Singa Finkela Program',
        Category: 'Training',
        'Mode of Delivery': 'onsite',
        Theme: 'entrepreneurship and incubation',
        Country: 'France',
        City: 'Paris',
        Level: '1',
        Duration: '',
        'Full/Part': '',
        Info: 'contact@singa.fr',
        Comments: '',
        'Cluster nb': 'not applicable',
        local_lan_requirements: '5',
        en_requirements: '5'
      },
      {
        'Opportunity name': 'Singa Finkela Program',
        Category: 'Training',
        'Mode of Delivery': 'onsite',
        Theme: 'entrepreneurship and incubation',
        Country: 'France',
        City: 'Lyon',
        Level: '1',
        Duration: '',
        'Full/Part': '',
        Info: 'contact@singa.fr',
        Comments: '',
        'Cluster nb': 'not applicable',
        local_lan_requirements: '5',
        en_requirements: '5'
      }
    ];
    expect(result).to.deep.equal(expected);
  });
});
