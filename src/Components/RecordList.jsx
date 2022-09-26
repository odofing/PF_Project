import React from 'react'
import FilterRecords from './FilterRecords'

const RecordList = ({ records, handleDelete, setRecords }) => {
  return (
    <div className='mb-5'>
      {records.length === 0 ? (
        <h6 className='d-flex justify-content-center m-5 text-dark'>
          Records empty, Please add new record
        </h6>
      ) : (
        <>
          <FilterRecords
            records={records}
            handleDelete={handleDelete}
            setRecords={setRecords}
          />
          <div className='row'>
            <div className='col-md-6 m-auto'>
              <table className='table table-striped'>
                <thead className='thead-dark'>
                  <tr>
                    <th scope='col '>Student Name</th>
                    <th scope='col'>Score</th>
                    <th scope='col'>Class</th>
                    <th scope='col'></th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((r, index) => (
                    <>
                      <tr key={index}>
                        <td>{r.record.name}</td>
                        <td>{r.record.score}</td>
                        <td>{r.record.category}</td>
                        <td>
                          <button
                            onClick={() => handleDelete(r.id)}
                            className='align-items-center'
                          >
                            <i className='fa fa-trash' aria-hidden='true'></i>
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default RecordList
