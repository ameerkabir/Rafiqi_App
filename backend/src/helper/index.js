export function filterObject(data, searchParameter, exclude){
    exclude = exclude || false;
    return JSON.parse(JSON.stringify(data)).filter(function (parameter) {
        return Object.keys(searchParameter).every(function (key) {
            if (!exclude){
                return parameter[key] === searchParameter[key] ;
            } else {
                return parameter[key]  !== searchParameter[key] ;
            }
        })
    })
}

export function filterByFunction(data, searchParameter, relation){
    return JSON.parse(JSON.stringify(data)).filter(function (parameter) {
        return Object.keys(searchParameter).every(function (key) {
            return relation(parameter[key], searchParameter[key]);
        })
    })
}

export function mergeObject(data, searchParameter1, searchParameter2) {
    let resultsToMerge = filterObject(data, searchParameter1);
    data = filterObject(data, searchParameter2);
    data = data.concat(resultsToMerge);
    return data;
}

export function fetchData(req) {
    const data = req.query;
    return {
        fullName: data.fullname,
        age: data.age,
        gender: data.gender,
        email: data.email,
        englishLevel: data.englishlevel,
        location: data.currentcountry,
        localLanguageLevel: data.locallanguagelevel,
        digitalToolsLevel: data.digitaltoolstevel,
        highestDegreeObtained: data.highestdegreeobtained,
        background: data.educationandworkbackground,
        JobReadinessLevel: data.assessyourjobreadiness,
        gdpr: data.gdpr,
        filledEntrepreneur : data.hasOwnProperty('startyourownbusiness'),
        isEntrepreneur: data.startyourownbusiness === 'yes',
        filledLocation: data.hasOwnProperty('currentcountry'),
    }
}

export function searchFor(user) {
    return {
        enrepreneur: {Theme: 'entrepreneurship and incubation'},
        country: {Country : user.location},
        global: {Country : 'Global'},
        job: {Category : 'Job'},
        edu: {Category : 'University Degree'},
        tra: {Category : 'Training'},
        ctra: {Category: 'Certified Training'},
        onsite: {'Mode of Delivery': "onsite"},
        hybrid: {"Mode of Delivery": "hybrid"},
        jobLevel: {"Level": user.JobReadinessLevel},
        locLevel: {"local_lan_requirements": user.localLanguageLevel},
        engLevel: {"en_requirements": user.englishLevel},
        background: {"Cluster nb": user.background},
    }
}
