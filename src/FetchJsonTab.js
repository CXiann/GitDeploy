import Button from "./Button";

const FetchJsonTab = ({ tab, setTab }) => {
  return (
    <form className="switchTab" onSubmit={(e) => e.preventDefault()}>
      <Button buttonText="users" tab={tab} setTab={setTab} />
      <Button buttonText="posts" tab={tab} setTab={setTab} />
      <Button buttonText="comments" tab={tab} setTab={setTab} />
    </form>
  );
};

export default FetchJsonTab;
