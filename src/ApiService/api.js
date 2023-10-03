import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/'

export const createBatchPost = async (formData) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/batch/create/', formData);
        console.log('Batch created successfully:', response.data);
    } catch (error) {
        console.error('Error creating batch:', error.response); // Log the error response
    }
};

export const getBatchData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/batch/`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
};

export const getBatchDataIdWise = async(id)=>{
    const response = await axios.get(`${BASE_URL}/batch/${id}`)
    return response.data
}