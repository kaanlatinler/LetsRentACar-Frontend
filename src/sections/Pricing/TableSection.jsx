import CarTable from '@/components/pricing/CarTable'
import React from 'react'

const TableSection = () => {
  return (
    <section className="ftco-section ftco-cart">
    <div className="container">
        <div className="row">
        <div className="col-md-12 ftco-animate">
            <div className="car-list">
                <CarTable />
              </div>
        </div>
    </div>
    </div>
</section>
  )
}

export default TableSection