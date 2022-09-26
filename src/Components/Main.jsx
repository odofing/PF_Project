import React, { useState } from 'react'
import CreateRecords from './CreateRecords'

import RecordList from './RecordList'

const Main = () => {
  const recordId = Date.now()

  const [record, setRecord] = useState({
    name: '',
    score: '',
    category: 'A',
  })
  const [records, setRecords] = useState([])

  // handle change for records
  const handleChange = (e) => {
    setRecord((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  // submit button of data
  const handleSubmit = (e) => {
    e.preventDefault()
    if (record !== '') {
      setRecords([{ id: recordId, record }, ...records])
      setRecord({ name: '', score: '', category: '' })
    }
  }
  // delete button of records
  const handleDelete = (id) => {
    const delRecord = records.filter((d) => d.id !== id)
    setRecords([...delRecord])
  }

  return (
    <div className='App'>
      <CreateRecords
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        record={record}
        setRecord={setRecord}
      />
      <RecordList
        records={records}
        handleDelete={handleDelete}
        setRecords={setRecords}
      />
    </div>
  )
}

export default Main
