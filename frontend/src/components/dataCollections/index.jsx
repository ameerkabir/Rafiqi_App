import React, {Fragment, useState} from 'react';
import styled from 'styled-components';
const Container = styled.div`
display: grid;
border: 3px solid gold;
grid-template-columns: 2fr  2fr;
`;


// "opportunity_name": "Kiron",
//     "category": "University Degree",
//     "mode_of_delivery": "online",
//     "theme": "business",
//     "country": "Germany",
//     "city": "any",
//     "level": "1",
//     "duration": "depends",
//     "full_or_part": "",
//     "info": "https://kiron.ngo/apply/",
//     "comments": "",
//     "cluster_nb": "17",
//     "local_lan_requirements": "1",
//     "en_requirements": "7"

 function  TextFieldInput({label, value, onChange,  ...props}){
     debugger;


     return <Fragment>

             <label htmlFor={props.id}> {label}</label><input id={props.id} value={value} onChange={onChange} />
     </Fragment>

}
function Opportunities (){
     const [value, setValue] = useState('');
     const [submitValue, setSubmit] = useState({});
     
    const onSubmit = (e)=>{
         e.preventDefault();
      setSubmit(submitValue);
      console.log(submitValue)
         debugger

    };
     const onChange = (e)=>{
         setValue(e.target.value)
     };
    return <Fragment>
        <Container>
            <form onSubmit={onSubmit}>
                <TextFieldInput label="Opportunity name"  id="OpportunityName" value={value} onChange={onChange}/>
                <TextFieldInput label="Opportunity name"  id="OpportunityName" value={value} onChange={onChange}/>
                <TextFieldInput label="Opportunity name"  id="OpportunityName" value={value} onChange={onChange}/>
                <TextFieldInput label="Opportunity name"  id="OpportunityName" value={value} onChange={onChange}/>
            </form>
        </Container>
    </Fragment>
};
export default Opportunities
