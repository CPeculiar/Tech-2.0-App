import axios from 'axios';
import React, {useState, useEffect} from 'react'
axios

const TransactionHistory = () => {
  const [formData, setFormData] = useState({
    account_number: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://rldondon.pythonanywhere.com/transactions',
        {
          params: formData,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      );

      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error:', error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <div className='bg-[#2D2A32]/50 rounded-lg p-5 h-[100%] w-full flex flex-col gap-5'>
        <div className="function flex items-center">
          <div className='w-[10px] bg-white rounded-lg h-[25px]'></div>
          <span className=' w-fit p-3 rounded-lg'>Transaction History</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='create-account gap-5 flex flex-col relative min-h-[40vh] min-w-[450px] w-[100%] rounded-lg'>
            <div className='field pin'>
              <label htmlFor='account_number'>Account</label>
              <input type='text' id='account_number' name='account_number' value={formData.account_number} onChange={handleChange} />
            </div>
            <button type='submit' className='submit_signup absolute bottom-0 bg-red-700 hover:bg-red-800 transition-ease-in duration-300'>
              Get transactions history
            </button>
          </div>
        </form>
      </div>
      <div className='accounts_form gap-5 flex flex-col min-w-[450px] w-[100%] rounded-lg'></div>
    </>
  );
};

export default TransactionHistory;
