
function  Footer({iteam}) {
    const date = new Date();
    const count = iteam.filter(item => item.checked).length;

  return (
    <div>
       <footer>copyright &copy; {date.getFullYear()} </footer>
       <p>{count}</p>
    </div>
    
   
  );
}

export default Footer;