import React , { useState } from "react";
import { Form, Input, Button} from "antd";
import HrLayout from "../../containers/templates/hr_manager/hrlayout";
import axiosInstance from "../connection";
import { useHistory } from 'react-router-dom';


const FormItem = Form.Item;


export default function BusinessCreateForm () {
  
  const history = useHistory();
	const initialFormData = Object.freeze({
		Business_Name: '',
		Phone_Number: '',
		Industry: '',
    Email : '',
    Director_First_Name: '',
    Directors_Last_Name: '',
    Directors_Other_Name: '',
    Directors_Phone_Number: '',
    Director_Email: '',
    // time: '',
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
			.post(`business/Business/`, {
			Business_Name: formData.Business_Name,
			Phone_Number:formData.Phone_Number,
		  Industry:formData.Industry,
      Email:formData.Email,
      Director_First_Name:formData.Director_First_Name,
      Directors_Last_Name:formData.Directors_Last_Name,
      Directors_Other_Name:formData.Directors_Other_Name,
      Directors_Phone_Number:formData.Directors_Phone_Number,
      Director_Email:formData.Director_Email,
      // time:formData.time,

			})
			.then((res) => {
				history.push('/business');
				console.log(res);
				console.log(res.data);
			});
	};

	

    return (
      <div>
          <HrLayout>
        <Form>

          <FormItem label="Business Name">
            <Input 
            id="Business_Name"
            name="Business_Name" 
						label="Business Name"
						onChange={handleChange}
            placeholder="Input a business name here" 
            />
          </FormItem>

          <FormItem label="Phone Number">
            <Input 
            id="Phone_Number"
            name="Phone_Number" 
						label="Phone Number"
						onChange={handleChange}
            placeholder="Input a business phone number here" 
            />
          </FormItem>

          <FormItem label="Industry">
            <Input 
            id="Industry"
            name="Industry" 
						label="Industry"
						onChange={handleChange}
            placeholder="Input a business industry here" 
            />
          </FormItem>

          <FormItem label="Email">
            <Input 
            	id="Email"
              name="Email" 
             label="Email Address"
             onChange={handleChange}
            placeholder="Input a business email here" 
            />
          </FormItem>

          <FormItem label="Director First Name">
            <Input 
            	id="Director_First_Name"
              name="Director_First_Name"
             label="Director First Name"   
             onChange={handleChange}
            placeholder="Input a business director first name here" 
            />
          </FormItem>

          <FormItem label="Director Last Name">
            <Input 
            	id="Directors_Last_Name"
              name="Directors_Last_Name"
             label="Director Last Name"   
             onChange={handleChange}
            placeholder="Input a business director last name here" 
            />
          </FormItem>

          <FormItem label="Director Other Name">
            <Input 
            	id="Directors_Other_Name"
              name="Directors_Other_Name"
             label="Director Other Name"   
             onChange={handleChange}
            placeholder="Input a business director other Name here" 
            />
          </FormItem>

          <FormItem label="Director Phone Number">
            <Input 
            	id="Directors_Phone_Number"
              name="Directors_Phone_Number"
             label="Director Phone Number"   
             onChange={handleChange}
            placeholder="Input a business director Phone Number here" 
            />
          </FormItem>

          <FormItem label="Director Email">
            <Input 
            	id="Director_Email"
              name="Director_Email"
             label="Director Email"   
             onChange={handleChange}
            placeholder="Input a business director Email here" 
            />
          </FormItem>


 
          
        {/* <Form.Item label="Date of Birth">
        <DatePicker label="Date_of_birth" placeholder="Enter some content ..." />
        </Form.Item> */}

       

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


