import React , { useState } from "react";
import { Form, Input, Button} from "antd";
import HrLayout from "../../../containers/templates/hr_manager/hrlayout";
import axiosInstance from "../../connection";
import { useHistory } from 'react-router-dom';


const FormItem = Form.Item;


export default function GuarantorCreateForm () {
  
  const history = useHistory();
	const initialFormData = Object.freeze({
    First_name: '',
    Last_name: '',
    Other_Names: '',
    Email: '',
    Id_Number: '',
    Phone_Number: '',
    Relationship:'',
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
			.post(`/job/Guarantors/`, {
    First_name:formData.First_name   ,
    Last_name :formData.Last_name ,
    Other_Names:formData.Other_Names,
    Email:formData.Email ,
    Id_Number:formData.Id_Number  ,
    Phone_Number:formData.Phone_Number ,
	Relationship:formData.Relationship,
			})
			.then((res) => {
				history.push('/guarantor/');
				console.log(res);
				console.log(res.data);
			});
	};

	

    return (
      <div>
          <HrLayout>
        <Form>
       
          <FormItem label="First Name">
            <Input 
            id="First_name"
            name="First_name" 
			label="First_name"
			onChange={handleChange}
            placeholder="Input your first name here" 
            />
          </FormItem>


          <FormItem label="Last Name">
            <Input 
            id="Last_name"
            name="Last_name" 
			label="Last_name"
			onChange={handleChange}
            placeholder="Input a your last name here" 
            />
          </FormItem>

          <FormItem label="Other Names">
            <Input 
            id="Other_Names"
            name="Other_Names" 
			label="Other_Names"
			onChange={handleChange}
            placeholder="Input your other names here" 
            />
          </FormItem>

          <FormItem label="Email">
            <Input 
            	id="Email"
              name="Email" 
             label="Email"
             onChange={handleChange}
            placeholder="Input a business email here" 
            />
          </FormItem>

          <FormItem label="Id_Number">
            <Input 
            	id="Id_Number"
              name="Id_Number"
             label="Id_Number"   
             onChange={handleChange}
            placeholder="Input your id number here" 
            />
          </FormItem>

          <FormItem label="Phone Number">
            <Input 
            	id="Phone_Number"
              name="Phone_Number"
             label="Phone_Number"   
             onChange={handleChange}
            placeholder="Input your phone number here" 
            />
          </FormItem>
          
 

          <FormItem label="Relationship">
            <Input 
            	id="Relationship"
              name="Relationship"
             label="Relationship"   
             onChange={handleChange}
            placeholder="Input relationship here" 
            />
          </FormItem>

          

          <FormItem>
            <Button 
            type="submit"
			color="Blue"
		   onClick={handleSubmit}
            >
            Create
            </Button>
          </FormItem>

        </Form>
        </HrLayout>
      </div>
    );
  
}


