import React from 'react'
import "./NewNav.css"
function NewNav() {
  return (
    <footer className="footer">
            <div className="footer-content">
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-whatsapp"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
                <div className="registration">
                    <input type="email" placeholder="Subscribe to our newsletter" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2023 Your Website Name</p>
            </div>
        </footer>
  )
}

export default NewNav