import React , { useState, useEffect  } from "react";
import { Form, Input, Button} from "antd";
import { HrLayout } from "../../../containers/templates/hr_manager/hrlayout";
import axiosInstance from "../../connection";
import { useHistory, useParams} from 'react-router-dom';




const FormItem = Form.Item;


export default function ComplainCreateForm () {

  const history = useHistory();
	const initialFormData = Object.freeze({
        Staff_issue: '',
        Action: '',    
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
			.post(`hr/Complain/`, {
                Staff_issue:formData.Staff_issue,
                Action:formData.Action,
			})


			.then((res) => {
				history.push('/complain/');
				console.log(res);
				console.log(res.data);
			});
	};

	

    return (
      <div>
          <HrLayout>
        <Form>
        <FormItem label="Staff_issue">
            <Input 
            id="Staff_issue"
            name="Staff_issue" 
			label="Staff_issue"
			onChange={handleChange}
            placeholder="Input a staff issue here" 
            />
          </FormItem>



          <FormItem label="Action">
            <Input 
            id="Action"
            name="Action" 
			label="Action"
			onChange={handleChange}
            placeholder="Input a business  action taken here" 
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




