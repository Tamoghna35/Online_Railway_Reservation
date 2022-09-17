import SearchTrainForm from "./SearchTrainForm";
import PnrSearch from "./PnrSearch";
import img1 from "../../assets/train8.jpg";

const NewSearchTrain = (props) => {
  return (
    <div className="new-expense">
      <p />

      <div className="ui segment ">
        <div
          className="ui two column very relaxed grid"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="column">
            <PnrSearch></PnrSearch>
          </div>

          <div className="column">
            <SearchTrainForm></SearchTrainForm>
          </div>
        </div>
        <div className="ui vertical divider"></div>
      </div>
    </div>
  );
};

export default NewSearchTrain;
