import React , { useState, useEffect  } from "react";
import { Form, Input, Button} from "antd";
import { HrLayout } from "../../../containers/templates/hr_manager/hrlayout";
import axiosInstance from "../../connection";
import { useHistory, useParams} from 'react-router-dom';




const FormItem = Form.Item;


export default function WorkdayCreateForm () {

  const history = useHistory();
	const initialFormData = Object.freeze({
        Employee: '',
          
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
			.post(`hr/Work_day/`, {
        Employee:formData.Employee,
			})


			.then((res) => {
				history.push('/workday/');
				console.log(res);
				console.log(res.data);
			});
	};

	

    return (
      <div>
          <HrLayout>
        <Form>
        <FormItem label="Employee">
            <Input 
            id="Employee"
            name="Employee" 
			label="Employee"
			onChange={handleChange}
            placeholder="Input a employee name here" 
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
        </HrLayout>
      </div>
    );
  
}




