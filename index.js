const Notification = (props) => {
    //  Write your code here.
    const { classNaming, imageLink, paraDescription } = props;
    return (
      <div className={classNaming}>
        <img src={imageLink} class="icon" />
        <p>{paraDescription}</p>
      </div>
    );
  };
  
  const element = (
    //  Write your code here.
    <div class="bg">
      <h1 class="mainHeading">Notifications</h1>
      <div class="notificationsContainer">
        <Notification
          classNaming="blueCard card"
          imageLink="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          paraDescription="Information Message"
        />
        <Notification
          classNaming="greenCard card"
          imageLink="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          paraDescription="Success Message"
        />
        <Notification
          classNaming="yellowCard card"
          imageLink="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          paraDescription="Warning Message"
        />
        <Notification
          classNaming="redCard card"
          imageLink="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          paraDescription="Error Message"
        />
      </div>
    </div>
  );
  
  ReactDOM.render(element, document.getElementById("root"));
  