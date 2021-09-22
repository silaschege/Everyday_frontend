import React , { useState, useEffect } from "react";
import { Form, Input, Button} from "antd";
import axiosInstance from "../../connection";
import { useHistory, useParams} from 'react-router-dom';



const FormItem = Form.Item;


export default function TaskUpdateForm () {
  
  const history = useHistory();
	const { taskID } = useParams();
	const initialFormData = Object.freeze({
		Task : '',
		State: '',    
		From : '', 
	});

	const [formData, updateFormData] = useState(initialFormData);

	useEffect(() => {
		axiosInstance.get(`hr/Task/${taskID}/`).then((res) => {
			updateFormData({
				...formData,
				['Task']: res.data.Task,
				['State']: res.data.State,
				['From']: res.data.From,
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

		axiosInstance.put(`hr/Task/${taskID}/`, {
			Task:formData.Task,
			State:formData.State,
			From:formData.From,
		});
		history.push({
			pathname: `/task/${taskID}/`,
		});
		window.location.reload();
	};

	

    return (
      <div>
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


