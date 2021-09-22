import React , { useState, useEffect } from "react";
import { Form, Input, Button} from "antd";
import axiosInstance from "../../connection";
import { useHistory, useParams} from 'react-router-dom';



const FormItem = Form.Item;


export default function JoblistingUpdateForm () {
  
  const history = useHistory();
	const { jobID } = useParams();
	const initialFormData = Object.freeze({
		Education_level:"",
		Course:"",
		Years_experience:"" ,
		Position:"",
		Location:"",
    
	});

	const [formData, updateFormData] = useState(initialFormData);

	useEffect(() => {
		axiosInstance.get(`job/Listing/${jobID}/`).then((res) => {
			updateFormData({
				...formData,
				['Education_level']: res.data.Education_level,
				['Course']: res.data.Course,
				['Years_experience']: res.data.Years_experience,
				['Position']: res.data.Position,
				['Location']: res.data.Location,
			});
			console.log(res.data);
		});
	}, [updateFormData]);

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

		axiosInstance.put(`job/Listing/${jobID}/`, {
			Education_level:formData.Education_level,
			Course:formData.Course,
			Years_experience:formData.Years_experience,
			Position:formData.Position,
			Location:formData.Location,
		});
		history.push({
			pathname: `/joblisting/${jobID}/`,
		});
		window.location.reload();
	};

	

    return (
      <div>
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
			color="Blue"
			onClick={handleSubmit}
            >
            Update
            </Button>
          </FormItem>

        </Form>
      </div>
    );
  
}


