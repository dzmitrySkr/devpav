function ModalChangeUserInfo({ days, fulluser }) {
  return (
    <div className="tasks_wrapper">
      <div className="tasks_box">
        <p className="tasks_title">School days</p>
        <p className="tasks_answer">{days} Days</p>
      </div>

      <div className="tasks_box">
        <p className="tasks_title">Taska done</p>
        <p className="tasks_answer">
          {fulluser.progress.filter((item) => item.status).length}/
          {fulluser.progress.length}
        </p>
      </div>

      <div className="tasks_box">
        <p className="tasks_title">Check lists</p>
        <p className="tasks_answer">3/5</p>
      </div>
    </div>
  );
}

export default ModalChangeUserInfo;
