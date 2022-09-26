import React from 'react'

const CreateRecords = ({ handleSubmit, record, handleChange }) => {
  return (
    <form className='form-row ' onSubmit={handleSubmit}>
      <div className='col-md-4 form-group m-auto'>
        <div className='inputData'>
          <label htmlFor='name' className='text-dark mb-2'>
            Student Name
          </label>
          <input
            className='form-control'
            type='text'
            id='name'
            name='name'
            value={record.name}
            onChange={handleChange}
            required
            placeholder='Enter Name'
          />
        </div>
        <div className='inputData'>
          <label htmlFor='score' className='text-dark mb-2 mt-3'>
            Score
          </label>
          <input
            placeholder='Enter Score'
            className='form-control'
            type='number'
            id='score'
            value={record.score}
            onChange={handleChange}
            required
          />
        </div>
        <div className='d-flex flex-row justify-content-around mt-3 mb-3 '>
          <div className='form-check'>
            <label className='text-dark'>A</label>
            <input
              className='form-check-input'
              type='radio'
              id='category'
              value='A'
              checked={record.category === 'A'}
              onChange={handleChange}
            />
          </div>
          <div className='form-check'>
            <label className='text-dark'>B</label>
            <input
              className='form-check-input'
              type='radio'
              id='category'
              value='B'
              checked={record.category === 'B'}
              onChange={handleChange}
            />
          </div>
          <div className='form-check'>
            <label className='text-dark'>C</label>
            <input
              className='form-check-input'
              type='radio'
              id='category'
              value='C'
              checked={record.category === 'C'}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type='submit' className='btn btn-success d-flex m-auto '>
          Create Record
        </button>
      </div>
    </form>
  )
}

export default CreateRecords
