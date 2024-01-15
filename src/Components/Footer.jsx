import React from 'react'
// import '../Components/WelcomePage/WelcomePage.css'


function Footer() {
  return (
    <div>
      <div>
        <footer class="py-3 my-4" id="footer">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item">
                    <a href="#" class="nav-link px-2 text-body-secondary">Home</a>
                </li>
                <li class="nav-item">
                    <a href="../About Us/About Us.html" class="nav-link px-2 text-body-secondary">About</a>
                </li>
                <li class="nav-item">
                    <a href="../Services/Services.html" class="nav-link px-2 text-body-secondary">Services</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link px-2 text-body-secondary">Contact us</a>
                </li>
            </ul>
            <p class="text-center text-body-secondary">UBA Tech App©2023</p>
        </footer>
        </div>




         {/* <footer class="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; UBA Tech App 2023</div>
                            <div>
                                <a href="#">Privacy Policy</a>
            ;
                                <a href="#">Terms & Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer> */}
    </div>

  )
}

export default Footer
