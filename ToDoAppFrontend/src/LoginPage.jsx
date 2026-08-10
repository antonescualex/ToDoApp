import "./LoginPage.css";

export default function LoginPage() {
  return (
    <>
      <div className="main_div">
        <div className="title_div">
          <p className="login_text">LOGIN</p>
        </div>
        <div className="content_div">
          <form className="login_form">
            <input className="input" placeholder="Username" type="text"></input>
            <input className="input" placeholder="Password" type="text"></input>
            <button className="submit_button">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
