import React from 'react'

function Deposit() {
    return (
        <>
        <div class="pagetitle">
      <h1>Deposit</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active">Deposit</li>
        </ol>
      </nav>
            <div className="container" id='three'>
                <form class="row g-3">
                    <div class="col-md-12">
                        <label for="inputEmail4" class="form-label">Account Number</label>
                        <input type="number" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-12">
                        <label for="inputPassword4" class="form-label">Amount</label>
                        <input type="number" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">PIN</label>
                        <input type="number" class="form-control" id="inputAddress" placeholder="" />
                    </div>

                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Deposit</button>
                    </div>
                </form> 
            </div>
            </div>
        </>
    )
}

export default Deposit