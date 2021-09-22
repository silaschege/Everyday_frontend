import React , { useState, useEffect  } from "react";
import { Form, Input, Button} from "antd";
import { EmployeeLayout } from "../../../containers/templates/employee/employeelayout";
import axiosInstance from "../../connection";
import { useHistory, useParams} from 'react-router-dom';




const FormItem = Form.Item;


export default function EmployeeTaskCreateForm () {

  const history = useHistory();
	const initialFormData = Object.freeze({
    Task : '',
    State: '',    
    From : '',  
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
			.post(`hr/Task/`, {
       Task:formData.Task,
       State:formData.State,
       From:formData.From,
			})


			.then((res) => {
				history.push('/task/');
				console.log(res);
				console.log(res.data);
			});
	};

	

    return (
      <div>
          <EmployeeLayout>
        <Form>
        <FormItem label="Task">
            <Input 
            id="Task"
            name="Task" 
			      label="Task"
			      onChange={handleChange}
            placeholder="Input a business  task here" 
            />
          </FormItem>



          <FormItem label="State">
            <Input 
            id="State"
            name="State" 
			      label="State"
			      onChange={handleChange}
            placeholder="Input a business  state here" 
            />
          </FormItem>

          <FormItem label="From">
            <Input 
            id="From"
            name="From" 
			      label="From"
			      onChange={handleChange}
            placeholder="Input a where a task is from here" 
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
        </EmployeeLayout>
      </div>
    );
  
}




