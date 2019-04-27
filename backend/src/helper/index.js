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

export function filterByRelation(data, searchParameter, relation){
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
    const data = req.body;
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
        "onsite": {'Mode of Delivery': "onsite"},
        hybrid: {"Mode of Delivery": "hybrid"},
        jobLevel: {"Level": user.JobReadinessLevel},
        locLevel: {"local_lan_requirements": user.localLanguageLevel},
        engLevel: {"en_requirements": user.englishLevel},
        background: {"Cluster nb": user.background},
    }
}


export function filteredData(user, result) {

    // First filter the location of the user - Global OR country
    if(user.filledLocation)
        result = mergeObject(result, searchFor(user).country, searchFor(user).global);

    // Filter interest in entrepreneurship
    if (user.filledEntrepreneur)
        if(user.isEntrepreneur) {
            result = filterObject(result, searchFor(user).enrepreneur);
            return result; // Exit from function
        } else {
            result = filterObject(result, searchFor(user).enrepreneur, true);
        }

    // Split result to branches by category
    let jobBranch = filterObject(result, searchFor(user).job);
    let eduBranch = filterObject(result, searchFor(user).edu);
    let trainBranch = filterObject(result, searchFor(user).tra);

    // set mode of delivery, whether onsite or hybrid
    jobBranch = mergeObject(jobBranch, searchFor(user).hybrid, searchFor(user).onsite);

    // Filter, level <= applicant job readiness level
    jobBranch = filterByRelation(jobBranch, searchFor(user).jobLevel, (dataVal, searchVal) => dataVal <= searchVal);

    // Filter, language levels <= candidate language levels.
    // English Language Levels
    jobBranch = filterByRelation(jobBranch, searchFor(user).engLevel, (dataVal, searchVal) => dataVal <= searchVal);
    // Local Language Levels
    jobBranch = filterByRelation(jobBranch, searchFor(user).locLevel, (dataVal, searchVal) => dataVal <= searchVal);

    // Filter which background matches their work background
    jobBranch = filterObject(jobBranch, searchFor(user).background);

    //if(jobBranch.length > 0)
    result = jobBranch;
    //else if(eduBranch.length > 0)
    //  result = eduBranch;
    //else
    //  result = trainBranch;

    return result;
}

