import React from "react"
const Footer = () => {
    const date = new Date()
    const current_date =date.getFullYear()
    return <footer className="footer">
        <div className="text-container">
            <h4>copyright &#169; { current_date}</h4>
           
        </div>
    </footer>
}
export default Footer