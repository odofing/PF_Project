import React from 'react'
import { useState } from 'react'

const FilterRecords = ({ records, setRecords }) => {
  const [filterArray, setFilterArray] = useState([])
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')

  // handle change of checked values
  const handleChange = (e) => {
    e.preventDefault()
    const value = e.target.value
    const checked = e.target.checked
    if (checked) {
      setFilterArray([...filterArray, value])
    } else {
      setFilterArray(filterArray.filter((e) => e !== value))
    }
  }

  // filter button
  const handleFilter = (e) => {
    e.preventDefault()
    const result = records.filter(function (rec) {
      return (
        (rec.record.score >= min && rec.record.score <= max) ||
        filterArray.some((value) => value === rec.record.category)
      )
    })
    setRecords(result)
  }

  return (
    <>
      <form className='form-row ' onSubmit={handleFilter}>
        <div className='col-md-6 form-group m-auto'>
          <h4 className='d-flex justify-content-center mt-5 text-dark'>
            Filter Data
          </h4>
          <div className='col-md-6 form-group m-auto d-flex'>
            <div className='m-3'>
              <label htmlFor=''>min</label>
              <input
                type='number'
                name='min'
                placeholder='Min'
                className='form-control'
                onChange={(e) => setMin(e.target.value)}
              />
            </div>
            <div className='m-3'>
              <label htmlFor=''>max</label>
              <input
                className='form-control'
                type='number'
                name='max'
                placeholder='Max'
                onChange={(e) => setMax(e.target.value)}
              />
            </div>
          </div>
          <div className='d-flex flex-row justify-content-center mt-3 mb-3 '>
            <div className='form-check'>
              <label htmlFor=''>A</label>
              <input
                type='checkbox'
                name='A'
                value='A'
                onChange={handleChange}
              />
            </div>
            <div className='form-check'>
              <label htmlFor=''>B</label>
              <input
                type='checkbox'
                name='B'
                value='B'
                onChange={handleChange}
              />
            </div>
            <div className='form-check'>
              <label htmlFor=''>C</label>
              <input
                type='checkbox'
                name='C'
                value='C'
                onChange={handleChange}
              />
            </div>
          </div>

          <button type='submit' className='btn btn-danger d-flex m-auto mb-5 '>
            Filter
          </button>
        </div>
      </form>
    </>
  )
}

export default FilterRecords
