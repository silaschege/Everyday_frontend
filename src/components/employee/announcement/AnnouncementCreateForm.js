import React , { useState, useEffect  } from "react";
import { Form, Input, Button} from "antd";
import HrLayout from "../../../containers/templates/hr_manager/hrlayout";
import axiosInstance from "../../connection";
import { useHistory, useParams} from 'react-router-dom';



const FormItem = Form.Item;


export default function AnnouncementCreateForm () {

  const history = useHistory();
	const initialFormData = Object.freeze({
		Message: '',
		From: '',
		To : '',
    
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
			.post(`hr/Announcement/`, {
                Message: formData.Message,
                From:formData.From,
                To:formData.To,
      // time:formData.time,

			})


			.then((res) => {
				history.push('/announcement');
				console.log(res);
				console.log(res.data);
			});
	};

	

    return (
      <div>
          <HrLayout>
        <Form>

          <FormItem label="Message">
            <Input 
            id="Message"
            name="Message" 
						label="Message"
						onChange={handleChange}
            placeholder="Input a Message here" 
            />
          </FormItem>

          <FormItem label="From">
            <Input 
            id="From"
            name="From" 
			label="From"
			onChange={handleChange}
            placeholder="Input a business from here" 
            />
          </FormItem>

          <FormItem label="To">
            <Input 
            id="To"
            name="To" 
			label="To"
			onChange={handleChange}
            placeholder="Input where a message is to  here" 
            />
          </FormItem>

         
        

         
 
          
        {/* <Form.Item label="Date of Birth">
        <DatePicker label="Date_of_birth" placeholder="Enter some content ..." />
        </Form.Item> */}

       

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


