import "./footer.scss";

export default function Footer() {
  const d = new Date();
  const year = d.getFullYear();
  return(
    <footer className="footer">
      <div className="container mx-auto">
        <div>
          <span className="small">Copyright © {year} Rein Abrera. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  )
}