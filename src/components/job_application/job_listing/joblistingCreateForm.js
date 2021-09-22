import React , { useState, useEffect  } from "react";
import { Form, Input, Button} from "antd";
import { ApplicantLayout } from "../../../containers/templates/applicant/applicantlayout";
import axiosInstance from "../../connection";
import { useHistory, useParams} from 'react-router-dom';




const FormItem = Form.Item;


export default function JoblistingCreateForm () {

  const history = useHistory();
	const initialFormData = Object.freeze({
        
	Education_level:"",
  Course:"",
   Years_experience:"" ,
  Position:"",
    Location:"",
          
	});

  


	const [formData, updateFormData] = useState(initialFormData);

    

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post(`job/Listing/`, {
		    Education_level:formData.Education_level,
        Course:formData.Course,
        Years_experience:formData.Years_experience,
        Position:formData.Position,
        Location:formData.Location,
			})


			.then((res) => {
				history.push('/joblisting/');
				console.log(res);
				console.log(res.data);
			});
	};

	

    return (
      <div>
          <ApplicantLayout>
        <Form>
		
  

        <FormItem label="Education_level">
            <Input 
            id="Education_level"
            name="Education_level" 
			label="Education_level"
			onChange={handleChange}
            placeholder="Input the Education level here" 
            />
          </FormItem>

          <FormItem label=" Course">
            <Input 
            id="Course"
            name="Course" 
			label=" Course"
			onChange={handleChange}
            placeholder="Input the  Course here" 
            />
          </FormItem>


		  <FormItem label="Years experience">
            <Input 
            id="Years_experience"
            name="Years_experience" 
			label="Years_experience"
			onChange={handleChange}
            placeholder="Input the Years experience required here" 
            />
          </FormItem>


		  <FormItem label="Position">
            <Input 
            id="Position"
            name="Position" 
			label="Position"
			onChange={handleChange}
            placeholder="Input the Position  here" 
            />
          </FormItem>

		  <FormItem label="Location">
            <Input 
            id="Location"
            name="Location" 
			label="Location"
			onChange={handleChange}
            placeholder="Input the Location here" 
            />
          </FormItem>



  

          <FormItem>
            <Button 
            type="submit"
			color="primary"
			onClick={handleSubmit}
            >
            Create
            </Button>
          </FormItem>

        </Form>
        </ApplicantLayout>
      </div>
    );
  
}




