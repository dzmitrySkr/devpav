import "../Styles/TitleForAccount.scss";

let TitleForAccounts = () => {
  return (
    <>
      <div className="title_box ">
        <div className="table_title">Name</div>
        <div className="table_title">Profit & Loss</div>
        <div className="table_title">Account Type</div>
      </div>
      <hr className="title_hr" />
    </>
  );
};

export default TitleForAccounts;
